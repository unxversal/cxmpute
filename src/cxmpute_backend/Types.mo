// In a file called "Types.mo"
import List "mo:base/List";

module Types {

  // CHAIN - a variant capturing all possible chain options
  public type Chain = {
    #icp;
    #metis;
    #lisk;
    #roostock;
    #cronos;
    #starknet;
    #bnbchain;
    #avalanche;
    #moonbeam;
    #velas;
    #cartesi;
    #aleo;
    #polygonzkEVM;
    #polygonPOS;
    #vechain;
    #aptos;
    #linea
  };

  // MODEL - enumerates the large set of potential model options
  // If you don’t need to match them exactly in Motoko,
  // you could simplify to a text field, but here’s the explicit approach:
  public type Model = {
    #meta_llama_Llama_3_3_70B_Instruct;
    #meta_llama_Llama_3_2_11B_Vision_Instruct;
    #meta_llama_Llama_3_2_90B_Vision_Instruct;
    #meta_llama_Llama_3_1_8B_Instruct;
    #meta_llama_Llama_3_2_3B_Instruct;
    #deepseek_ai_DeepSeek_R1;
    #deepseek_ai_DeepSeek_V3;
    #meta_llama_Llama_3_1_405B_Instruct;
    #microsoft_Phi_3_5_MoE_instruct;
    #microsoft_Phi_3_5_vision_instruct;
    #mistralai_Mistral_Small_24B_Instruct_2501;
    #mistralai_Pixtral_12B_2409;
    #mistralai_Mistral_Nemo_Instruct_2407;
    #mistralai_Mixtral_8x7B_Instruct_v0_1;
    #mistralai_Mistral_7B_Instruct_v0_3;
    #Qwen_Qwen2_5_VL_3B_Instruct;
    #Qwen_Qwen2_5_VL_7B_Instruct;
    #Qwen_Qwen2_5_VL_72B_Instruct;
    #Qwen_Qwen2_5_7B_Instruct_1M;
    #Qwen_Qwen2_5_14B_Instruct_1M;
    #Qwen_QwQ_32B_Preview;
    #Qwen_QVQ_72B_Preview;
    #Qwen_Qwen2_5_Coder_32B_Instruct;
    #Qwen_Qwen2_5_Coder_14B_Instruct;
    #Qwen_Qwen2_5_Coder_7B_Instruct;
    #Qwen_Qwen2_5_3B_Instruct;
    #Qwen_Qwen2_5_7B_Instruct;
    #Qwen_Qwen2_5_14B_Instruct;
    #Qwen_Qwen2_5_32B_Instruct;
    #Qwen_Qwen2_5_72B_Instruct;
    #internlm_internlm_xcomposer2d5_7b;
    #internlm_internlm3_8b_instruct;
    #internlm_internlm2_5_20b_chat;
    #vikhyatk_moondream2;
    #openbmb_MiniCPM_o_2_6;
    #hexgrad_Kokoro_82M;
    #black_forest_labs_FLUX_1_schnell;
    #genmo_mochi_1_preview;
    #openai_whisper_large_v2;
    #openai_whisper_medium;
    #openai_whisper_small
  };

  // PODTYPE - includes the above Model plus other enumerations
  public type PodType = {
    #generalVM;
    #memoryVM;
    #cpuVM;
    #storageVM;
    #gpuVM;
    #kubernetes;
    #serverlessPY;
    #serverlessJS;
    #serverlessTS;
    #mongodb;
    #postgresql;
    #mysql;
    #BAAI_bge_m3;
    // This final variant includes an entire Model
    #model : Model
  };

  // FILE - just a record with ID and bucketID
  // public type File = {
  //   ID : Text;          // some unique ID for the file
  //   bucketIDs : [Text]; // principal IDs of each bucket canister that holds part of the file
  // };

  public type FileChunk = {
    chunk : ?Blob;
    chunkID : Text;
    bucketID : ?Nat;
  };


  public type File = {
    name : Text;
    chunks : [FileChunk];
    totalSize : Nat; 
    fileType : Text;
  };


  // PODSTATUS - a variant for deployed, deploying, or undeployed
  public type PodStatus = {
    #deployed;
    #deploying;
    #undeployed
  };

  

  // POD - record describing a pod
  public type Pod = {
    name : Text;
    files : ?File;
    priceRange : [Nat];    // start and end range, or empty if unspecified
    podType : PodType;
    status : PodStatus;
    memory : ?Nat;
    cpu : ?Nat;
    gpu : ?Nat;
    storage : ?Nat;
    nodes : ?Nat;
  };

  // STXRED - a record describing some stored file data
  public type Stxred = {
    file : File;
    size : Nat;
  };

  // INFXRENCECONFIG - a record with priceRange, for example
  public type InfxrenceConfig = {
    priceRange : [Nat];
  };

  // USER - your main user record
  public type User = {
    walletAddress : Text;
    userID : Text;
    provider : Bool;
    chain : Chain;
    pods : List.List<Pod>;
    cxmputeBalance : Nat;
    stxres : List.List<Stxred>;
    totalStxrage : Nat;
    infxrenceConfig : InfxrenceConfig;
  };


}
