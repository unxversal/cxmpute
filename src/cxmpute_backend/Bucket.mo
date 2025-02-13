import Bool "mo:base/Bool";
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Option "mo:base/Option";

actor Filevault {

  // Define a data type for a file's chunks.
  type FileChunk = {
    chunk : Blob;
    index : Nat;
  };

  // Define a data type for a file.
  type File = {
    name : Text;
    chunks : [FileChunk];
    totalSize : Nat; 
    fileType : Text;
  };

  // We'll store user => [filename => File].
  type UserFiles = HashMap.HashMap<Text, File>;

  // ==================
  // Stable Variables
  // ==================

  // 1. For stable upgrades
  private stable var stableFiles : [(Principal, [(Text, File)])] = [];

  // 2. In-memory HashMap that we'll actually query during normal usage
  private var files = HashMap.HashMap<Principal, UserFiles>(
    0,
    Principal.equal,
    Principal.hash
  );

  // Return (and initialize if needed) a user’s file HashMap
  private func getUserFiles(user : Principal) : UserFiles {
    switch (files.get(user)) {
      case null {
        let newUserFileMap = HashMap.HashMap<Text, File>(0, Text.equal, Text.hash);
        files.put(user, newUserFileMap);
        newUserFileMap
      };
      case (?f) f;
    }
  };

  // =========
  //  Public
  // =========

  // Check if a given file `name` exists for the caller
  public shared (msg) func checkFileExists(name : Text) : async Bool {
    Option.isSome(getUserFiles(msg.caller).get(name));
  };

  // Upload chunks of a file. Must be done in sequence: chunk 0, chunk 1, chunk 2, ...
  public shared (msg) func uploadFileChunk(
    name : Text,
    chunk : Blob,
    index : Nat,
    fileType : Text
  ) : async () {
    let userFiles = getUserFiles(msg.caller);

    let fileChunk = {
      chunk = chunk;
      index = index;
    };

    switch (userFiles.get(name)) {
      // This is the first chunk => create the File record
      case null {
        userFiles.put(name, {
          name = name;
          chunks = [fileChunk];
          totalSize = chunk.size();
          fileType = fileType;
        });
      };
      case (?existingFile) {
        // Just append a new chunk 
        let updatedChunks = Array.append(existingFile.chunks, [fileChunk]);
        let updatedSize = existingFile.totalSize + chunk.size();

        userFiles.put(name, {
          name = name;
          chunks = updatedChunks;
          totalSize = updatedSize;
          fileType = fileType;
        });
      };
    };
  };

  // Return a list of {name; size; fileType} for all user files
  public shared (msg) func getFiles() : async [{ name : Text; size : Nat; fileType : Text }] {
    let userFiles = getUserFiles(msg.caller);
    Iter.toArray(
      Iter.map(
        userFiles.vals(),
        func (file : File) : { name : Text; size : Nat; fileType : Text } {
          {
            name = file.name;
            size = file.totalSize;
            fileType = file.fileType;
          }
        }
      )
    );
  };

  // Return how many total chunks a file has
  public shared (msg) func getTotalChunks(name : Text) : async Nat {
    switch (getUserFiles(msg.caller).get(name)) {
      case null 0;
      case (?file) file.chunks.size();
    }
  };

  // Return a specific chunk by index
  public shared (msg) func getFileChunk(name : Text, index : Nat) : async ?Blob {
    switch (getUserFiles(msg.caller).get(name)) {
      case null null;
      case (?file) {
        // find chunk matching the index
        let chunkOpt = Array.find<FileChunk>(file.chunks, func (c : FileChunk) : Bool {
          c.index == index
        });
        switch (chunkOpt) {
          case null null;
          case (?foundChunk) ?foundChunk.chunk;
        }
      }
    };
  };

  // Return the fileType for a given file
  public shared (msg) func getFileType(name : Text) : async ?Text {
    switch (getUserFiles(msg.caller).get(name)) {
      case null null;
      case (?file) ?file.fileType;
    };
  };

  // Delete a file
  public shared (msg) func deleteFile(name : Text) : async Bool {
    let userFiles = getUserFiles(msg.caller);
    let removed = userFiles.remove(name);
    Option.isSome(removed);
  };

  // =========
  // Upgrade
  // =========

  // Save everything to stable memory
  system func preupgrade() {
    // Convert files => stable format
    let entries : Iter.Iter<(Principal, UserFiles)> = files.entries();
    stableFiles := Iter.toArray(
      Iter.map<(Principal, UserFiles), (Principal, [(Text, File)])>(
        entries,
        func((userPrincipal, userFileMap) : (Principal, UserFiles)) : (Principal, [(Text, File)]) {
          let userFilePairs = Iter.toArray(userFileMap.entries());
          (userPrincipal, userFilePairs);
        }
      )
    );
  };

  // Restore stable memory after upgrade
  system func postupgrade() {
    files := HashMap.fromIter<Principal, UserFiles>(
      Iter.map<(Principal, [(Text, File)]), (Principal, UserFiles)>(
        stableFiles.vals(),
        func((userPrincipal, userFilePairs) : (Principal, [(Text, File)])) : (Principal, UserFiles) {
          let userFileMap = HashMap.HashMap<Text, File>(0, Text.equal, Text.hash);
          for ((name, file) in userFilePairs.vals()) {
            userFileMap.put(name, file);
          };
          (userPrincipal, userFileMap);
        }
      ),
      0,
      Principal.equal,
      Principal.hash
    );
    // Clear stable store
    stableFiles := [];
  };
}
