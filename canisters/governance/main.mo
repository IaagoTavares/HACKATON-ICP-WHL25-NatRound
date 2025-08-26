// canisters/governance/main.mo
actor {
  // Governance/DAO (placeholder). Adapte para propostas/votos reais.

  public query func status() : async Text {
    "governance canister ok"
  };

  // Lista de propostas (placeholder)
  public query func list() : async [Text] {
    ["#1: Troca do porteiro (exemplo)", "#2: Pintura fachada (exemplo)"]
  };

  // Votar em uma proposta (placeholder)
  public func vote(_proposalId : Nat, _approve : Bool) : async Text {
    // TODO: persistir votos, checar elegibilidade, quorum, etc.
    "vote registered (mock)"
  };
}
