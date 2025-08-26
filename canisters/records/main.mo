// canisters/records/main.mo
actor {
  // Atas/Documentos (placeholder). Armazene hashes/IPFS ou blobs em chunks.

  public query func status() : async Text {
    "records canister ok"
  };

  // Adiciona novo registro/ata (placeholder)
  public func add(_titulo : Text, _conteudo : Text) : async Bool {
    // TODO: persistir, versionar, assinar, controlar acesso
    true
  };

  // Lista registros (placeholder)
  public query func list() : async [Text] {
    ["Ata 2025-08-20 (ex.)", "Regulamento Interno v1 (ex.)"]
  };
}
