import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Types "Types";
import Text "mo:base/Text";
import Debug "mo:base/Debug";
import Blob "mo:base/Blob";

actor UserManager {

  // Stable data store for users
  stable var userDB : {
    var internalUsers : [Types.User]
  } = {
    var internalUsers = []
  };

  // Counter to generate unique IDs for users
  stable var userIdCounter : Nat = 0;

  // Generate a unique ID for a user based on wallet address and chain
  func generateUserID() : Text {
    userIdCounter += 1;
    Nat.toText(userIdCounter)
  };

  // Helper: find a user by (walletAddress, chain).
  // Returns ?User or null if not found.
  private func findUser(walletAddress : Text, chain : Types.Chain) : ?Types.User {
    Array.find(userDB.internalUsers, func (user : Types.User) : Bool {
      user.walletAddress == walletAddress and user.chain == chain
    })
  };

  // Step 2 recap: store a brand new user (if you explicitly want that).
  public func storeUser(walletAddress : Text, chain : Types.Chain) : async () {
    let newUser : Types.User = {
      walletAddress = walletAddress;
      userID = generateUserID();  // or generate from a stable counter if you wish
      provider = false;
      chain = chain;
      pods = [];
      cxmputeBalance = 0;
      stxres = [];
      totalStxrage = 0;
      infxrenceConfig = {
        priceRange = [];
      };
    };
    userDB.internalUsers := Array.append(userDB.internalUsers, [newUser]);
  };

  // Step 3: Check if user exists, else create it, then return that user.
  public func getOrCreateUser(walletAddress : Text, chain : Types.Chain) : async Types.User {
    let maybeUser = findUser(walletAddress, chain);
    switch maybeUser {
      case (?found) { 
        // Already in store; return that user
        return found;
      };
      case null { 
        // Not found; create & store a new user, return it
        let newUser : Types.User = {
          walletAddress = walletAddress;
          userID = "generatedUserId"; // you can do something unique or random
          provider = false;
          chain = chain;
          pods = [];
          cxmputeBalance = 0;
          stxres = [];
          totalStxrage = 0;
          infxrenceConfig = { priceRange = [] };
        };

        // Add to stable array
        userDB.internalUsers := Array.append(userDB.internalUsers, [newUser]);
        return newUser;
      };
    }
  };

  // A query function to see all stored users (not required, but useful)
  public query func getAllUsers() : async [Types.User] {
    return userDB.internalUsers;
  };
}
