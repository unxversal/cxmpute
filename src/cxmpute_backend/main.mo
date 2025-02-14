import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Types "Types";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";
// import Error "mo:base/Error";
import Buckets "Buckets";
import Buffer "mo:base/Buffer";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Cycles "mo:base/ExperimentalCycles";

actor UserManager {

  stable var userDB : List.List<Types.User> = List.nil<Types.User>();
  stable var userIdCounter : Nat = 0;

  func generateUserID() : Text {
    userIdCounter += 1;
    Nat.toText(userIdCounter)
  };

  private func findUser(walletAddress : Text, chain : Types.Chain) : ?Types.User {
    List.find<Types.User>(userDB, func (user : Types.User) : Bool {
      user.walletAddress == walletAddress and user.chain == chain
    })
  };

  public func storeUser(walletAddress : Text, chain : Types.Chain) : async () {
    let newUser : Types.User = {
      walletAddress = walletAddress;
      userID = generateUserID();
      provider = false;
      chain = chain;
      pods = List.nil();
      cxmputeBalance = 0;
      stxres = List.nil();
      totalStxrage = 0;
      infxrenceConfig = { priceRange = [0,0] };
    };
    userDB := List.push(newUser, userDB);
  };

  public func getOrCreateUser(walletAddress : Text, chain : Types.Chain) : async Types.User {
    switch (findUser(walletAddress, chain)) {
      case (?found) found;
      case null {
        let newUser : Types.User = {
          walletAddress = walletAddress;
          userID = generateUserID();
          provider = false;
          chain = chain;
          pods = List.nil();
          cxmputeBalance = 0;
          stxres = List.nil();
          totalStxrage = 0;
          infxrenceConfig = { priceRange = [0,0] };
        };
        userDB := List.push(newUser, userDB);
        newUser;
      }
    }
  };

  public query func getAllUsers() : async [Types.User] {
    List.toArray(userDB)
  };

  public func changeUserChain(walletAddress : Text, oldChain : Types.Chain, newChain : Types.Chain) : async ?Types.User {
    let maybeUser = findUser(walletAddress, oldChain);
    switch maybeUser {
      case (?user) {
        let updatedUser : Types.User = {
          walletAddress = user.walletAddress;
          userID = user.userID;
          provider = user.provider;
          chain = newChain;
          pods = user.pods;
          cxmputeBalance = user.cxmputeBalance;
          stxres = user.stxres;
          totalStxrage = user.totalStxrage;
          infxrenceConfig = user.infxrenceConfig;
        };
        userDB := List.map<Types.User, Types.User>(userDB, func (u) {
          if (u.walletAddress == user.walletAddress and u.chain == user.chain) updatedUser else u
        });
        ?updatedUser;
      };
      case null null;
    }
  };


  // ██████╗░██╗░░░██╗░█████╗░██╗░░██╗███████╗████████╗░██████╗
  // ██╔══██╗██║░░░██║██╔══██╗██║░██╔╝██╔════╝╚══██╔══╝██╔════╝
  // ██████╦╝██║░░░██║██║░░╚═╝█████═╝░█████╗░░░░░██║░░░╚█████╗░
  // ██╔══██╗██║░░░██║██║░░██╗██╔═██╗░██╔══╝░░░░░██║░░░░╚═══██╗
  // ██████╦╝╚██████╔╝╚█████╔╝██║░╚██╗███████╗░░░██║░░░██████╔╝
  // ╚═════╝░░╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░╚═════╝░
  type Bucket = Buckets.Bucket;
  var buckets = Buffer.Buffer<Bucket>(0);

  public func storeFile(file : Types.File) : async (Types.File) {
    var updatedChunks : [Types.FileChunk] = [];

    for (chunk in file.chunks.vals()) {
      let stored = await storeChunk(chunk);
      if (not stored) {
        Debug.print("Failed to store chunk " # chunk.chunkID);
      } else {
        let bucketIndex = buckets.size() - 1;
        updatedChunks := Array.append(updatedChunks, [{
          chunk = null;
          chunkID = chunk.chunkID;
          bucketID = ?bucketIndex;
        }: Types.FileChunk]);
      }
    };

    return {
      name = file.name;
      chunks = updatedChunks;
      totalSize = file.totalSize;
      fileType = file.fileType;
    };
  };

  private func storeChunk(chunk : Types.FileChunk) : async Bool {
    switch (chunk.chunk) {
        case (?blob) {
            for (i in Iter.range(0, buckets.size() - 1)) {
                let bucket = buckets.get(i);
                let freeSpace = await bucket.getFreeStorage();
                if (freeSpace >= blob.size()) {
                    return await bucket.put(chunk.chunkID, blob);
                };
            };

            Cycles.add<system>(38_461_538_461); // Add cycles for the bucket creation
            let newBucket = await Buckets.Bucket();
            buckets.add(newBucket);
            return await newBucket.put(chunk.chunkID, blob);
        };
        case null {
            Debug.print("Chunk is null, cannot store.");
            return false;
        }
    }
  };


  public func retrieveFileChunk(file : Types.File, chunkID : Text) : async ?Blob {
    for (i in Iter.range(0, buckets.size() - 1)) {
      let bucket = buckets.get(i);
      let chunk = await bucket.get(chunkID);
      if (chunk != null) {
        return chunk;
      };
    };
    return null;
  };
}
