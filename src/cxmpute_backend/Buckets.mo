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

persistent actor class Bucket({chunkID ; chunk} : Types.FileChunk) {
  
  type Key = Nat;
  type Value = Blob;

  transient let keyMap = Map.Make<Key>(Nat.compare);

  var map : Map.Map<Key, Value> = keyMap.empty();

  public func get(k : Key) : async ?Value {
    keyMap.get(map, k);
  };

  public func put(k : Key, v : Value) : async () {
    map := keyMap.put(map, k, v);
  };

};