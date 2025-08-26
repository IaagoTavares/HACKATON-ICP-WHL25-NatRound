# ICP DAO de Condomínio — Template (4 Canisters)

**Arquitetura (4 canisters):**
1. `frontend` (assets): SPA React (Vite) — navegação Dashboard, Votações, Financeiro e Documentos.
2. `governance` (Motoko): esqueleto de DAO (propostas, votos) — **placeholders**, não integrado ao front.
3. `treasury` (Motoko): esqueleto financeiro (balanço, registro) — **placeholders**, não integrado ao front.
4. `records` (Motoko): esqueleto de atas/documentos — **placeholders**, não integrado ao front.

> O front-end funciona localmente como SPA. Os canisters de backend são mínimos com comentários curtos e **não** são chamados pelo front por design.

## Requisitos
- Node 18+
- `dfx` (Internet Computer SDK) instalado e configurado

## Como rodar localmente (somente front)
```bash
cd frontend
npm install
npm run dev
```

## Como compilar e fazer deploy local (todos os canisters)
```bash
# Em um terminal:
dfx start --background

# Em outro terminal (na raiz do projeto):
dfx deploy
```

Após o deploy, o `dfx` mostrará a URL do canister de `frontend` para acessar a SPA buildada.

---

## Estrutura
```text
icp-dao-condominio-4-canisters/
├─ dfx.json
├─ canisters/
│  ├─ governance/main.mo
│  ├─ treasury/main.mo
│  └─ records/main.mo
└─ frontend/
   ├─ index.html
   ├─ package.json
   ├─ tsconfig.json
   ├─ vite.config.ts
   └─ src/
      ├─ main.tsx
      ├─ App.tsx
      ├─ styles.css
      ├─ components/Nav.tsx
      └─ pages/
         ├─ Dashboard.tsx
         ├─ Votacoes.tsx
         ├─ Financeiro.tsx
         └─ Documentos.tsx
```

## Próximos passos (quando quiser integrar)
- Adicionar `@dfinity/agent` ao front e gerar bindings dos canisters via `dfx` para chamadas candid.
- Modelar estado dos canisters e endpoints (ex.: `createProposal`, `vote`, `getBalance`, `addRecord`).
- Adicionar autenticação via Internet Identity.
```
