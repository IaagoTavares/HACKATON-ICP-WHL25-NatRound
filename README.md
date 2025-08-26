# Condominium DAO on ICP

## Problem Context
Condominium management often faces recurring challenges: lack of transparency in decision-making, poor communication between the building manager and residents, bureaucracy in financial administration, and limited access to official documents such as minutes and regulations.  
In in-person meetings, participation is usually low, decisions are questioned, and information is scattered across different channels, which increases mistrust and reduces community engagement.

## Proposed Solution
This project demonstrates how the **Internet Computer (ICP)** can be used to create a decentralized condominium management solution. The central idea is to apply distributed governance concepts, allowing decisions, finances, and documents to be organized in a reliable and easily accessible system.

The application is structured into **four canisters**:

1. **Frontend (assets)**  
   A React interface that provides residents with an intuitive dashboard, including sections for voting, finances, documents, and general overview.  

2. **Governance (Motoko)**  
   Canister designed for proposals and voting. It allows decisions to be created and registered transparently.  

3. **Treasury (Motoko)**  
   Canister responsible for managing financial information such as balance and income/expense records.  

4. **Records (Motoko)**  
   Canister dedicated to registering and consulting official documents and meeting minutes, ensuring accessible and immutable history.  

Currently, the front-end works with local mock data for prototyping purposes, while the backend canisters serve as skeletons for future integrations.

## Objectives
- Provide greater transparency in condominium management.  
- Facilitate resident participation in votes and deliberations.  
- Centralize documents and records in a single environment.  
- Improve communication between management and the community.  

## How to Run the Project
### Run only the front-end
```bash
cd frontend
npm install
npm run dev
```

### Compile and deploy locally (all canisters)
```bash
# In one terminal
dfx start --background

# In another terminal
dfx deploy
```
