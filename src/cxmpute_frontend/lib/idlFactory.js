// idlFactory.js (example)
export const idlFactory = ({ IDL }) => {
    const TransferArg = IDL.Record({
      from_subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
      to: IDL.Record({
        owner: IDL.Principal,
        subaccount: IDL.Opt(IDL.Vec(IDL.Nat8)),
      }),
      fee: IDL.Opt(IDL.Nat),
      created_at_time: IDL.Opt(IDL.Nat64),
      memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
      amount: IDL.Nat,
    });
    
    const TransferError = IDL.Variant({
      GenericError: IDL.Record({ error_code: IDL.Nat, message: IDL.Text }),
      TemporarilyUnavailable: IDL.Null,
      BadBurn: IDL.Null,
      Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
      BadReceipt: IDL.Record({ reason: IDL.Text }),
      InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
      TooOld: IDL.Null,
    });
    
    const TransferResult = IDL.Variant({
      Ok: IDL.Nat,
      Err: TransferError,
    });
  
    return IDL.Service({
      // other ICRC-1 methods might go here
      transfer: IDL.Func([TransferArg], [TransferResult], []),
    });
  };
  