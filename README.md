
---

# **kcrptosync Web** 🌐  
*Next.js Hybrid Fiat/Crypto Wallet with StarkNet Overdrafts*  

<img src="https://github.com/user-attachments/assets/56cb3802-9ded-491c-a581-c02c12874ef1" width="800" height="300" alt="Project Screenshot" style="border: 1px solid #ddd; border-radius: 30px;">

## 🔥 Features  
✅ **Real-Time Overdrafts**  
- Auto-convert crypto to fiat when balances are low  
- Slippage-protected swaps via Pragma Oracle  

✅ **Unified Dashboard**  
- View combined fiat + crypto balances  
- Transaction history with CSV export  

✅ **Web3Auth Integration**  
- Email/Social login + custom starknet wallet  

## 🛠 Tech Stack  
| Layer               | Technology           |
|---------------------|----------------------|
| **Frontend**        | Next.js 14 (App Router) |
| **State**           | Zustand + SWR        |
| **Blockchain**      | starknet.js v5       |
| **UI**              | ShadCN + Tailwind    |
| **Auth**            | NextAuth + Web3Modal |

## 🚀 Quick Start  
```bash
# Fork the repo
https://github.com/caxtonacollins/sync-frontend
# Clone repo
git clone https://github.com/yourorg/sync-frontend.git
cd sync-frontend

# Install
yarn install

# Run dev server
yarn dev
```

## 🌐 Deployment  
1. Set env vars:
```env
NEXT_PUBLIC_STARKNET_RPC=https://starknet-goerli.infura.io
NEXT_PUBLIC_CONTRACT_ADDRESS=0x123...
```
2. Deploy to Vercel:
```bash
vercel --prod
```
