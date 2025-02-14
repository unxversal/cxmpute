import Nat "mo:base/Nat";
import Map "mo:base/OrderedMap";
import Bool "mo:base/Bool";
import Array "mo:base/Array";
import Blob "mo:base/Blob";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Option "mo:base/Option";
import Types "Types";

persistent actor class Bucket() {
  
  type Key = Nat;
  type Value = Blob;

  transient let keyMap = Map.Make<Key>(Nat.compare);

  let MAX_STORAGE : Nat = 429_496_729_600; // 400GiB

  var totalStorage : Nat = 0;

  var map : Map.Map<Key, Value> = keyMap.empty();

  public func get(k : Key) : async ?Value {
    keyMap.get(map, k);
  };

  public func put(k : Key, v : Value) : async (Bool) {
    let chunkSize = v.size();
    if (totalStorage + chunkSize > MAX_STORAGE) {
      return false; // Not enough space
    };
    map := keyMap.put(map, k, v);
    totalStorage := totalStorage + v.size();
    return true;
  };

  public func remove(k : Key) : async () {
    map := keyMap.delete(map, k);
    totalStorage := totalStorage - k;
  };

  public func getTotalStorage() : async Nat {
    totalStorage;
  };

  public func getFreeStorage() : async Nat {
    MAX_STORAGE - totalStorage;
  };

};