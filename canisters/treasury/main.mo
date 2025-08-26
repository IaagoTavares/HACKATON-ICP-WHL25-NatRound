// canisters/treasury/main.mo
actor {
  // Tesouraria (placeholder). Adapte para balanço e registros.

  public query func status() : async Text {
    "treasury canister ok"
  };

  // Saldo atual (placeholder)
  public query func balance() : async Nat {
    125_000 // centavos (R$ 1.250,00), por exemplo
  };

  // Registro de pagamento/recebimento (placeholder)
  public func registerPayment(_descricao : Text, _valorCentavos : Nat) : async Text {
    // TODO: gravar histórico, validar permissões, conciliar boletos/pix, etc.
    "payment registered (mock)"
  };
}
