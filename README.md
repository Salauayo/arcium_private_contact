# 🔐 Private Contact Discovery (Arcium)

## 🚀 Overview
This project allows users to find friends on a platform **without exposing their contact list**.

Instead of uploading raw contacts, the system uses **privacy-preserving matching** so that:
- Only matches are revealed
- Non-matching contacts remain completely private

---

## ❗ Problem
Most apps (WhatsApp, Telegram, etc.) require users to upload their entire contact list.

This leads to:
- Privacy leaks
- Centralized data collection
- Risk of misuse

---

## ✅ Solution
This project implements **Private Set Intersection (PSI)** logic:

- Contacts are **hashed and encoded**
- Matching is done on encrypted values
- Only common contacts are returned

---

## 🧠 Arcium Integration
In a production setup:

- Contacts are encrypted client-side
- Arcium performs computation using **MPC (Multi-Party Computation)**
- No party (server or nodes) can see raw data
- Only matches are revealed

> Current implementation simulates PSI logic, but backend is designed to integrate Arcium directly.

---

## ⚙️ Tech Stack
- Node.js
- Express
- JWT Authentication
- Crypto (SHA256 hashing)
- Solana (devnet ready)
- Arcium (conceptual integration)

---

## 📁 Project Structure


arcium_private_contact/
│
├── src/
│ ├── routes/
│ │ └── contacts.js
│ ├── services/
│ │ ├── hashService.js
│ │ ├── authService.js
│ │ └── arciumClient.js
│ ├── data/
│ │ └── users.js
│ └── index.js
│
├── .env
├── package.json
└── README.md


---

## 🔧 Installation & Setup

### 1. Clone the repo

```bash
git clone <your-repo-link>
cd arcium_private_contact
2. Install dependencies
npm install
3. Create .env file
nano .env

Paste:

RPC_URL=https://api.devnet.solana.com
ARCIUM_CLUSTER_OFFSET=1
KEYPAIR_PATH=/home/YOUR_USERNAME/.config/solana/id.json
MXE_PROGRAM_ID=placeholder
4. Start server
npm start

You should see:

Server running on port 3000
🔐 API Usage
1. Login
curl -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"username":"alice","password":"password123"}'

Response:

{
  "token": "your_jwt_token"
}
2. Find Friends (Private Matching)
curl -X POST http://localhost:3000/api/find-friends \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
-d '{"contacts":["elon@yahoo.com","friend@gmail.com"]}'

Response:

{
  "matches": ["encrypted_hash1", "encrypted_hash2"]
}
🔄 How It Works
User logs in
Sends contact list
Contacts are hashed + encoded
System compares encrypted values
Only matches are returned
🌍 Impact
Prevents contact data leaks
Enables privacy-first onboarding
Can be used in:
Messaging apps
Social networks
Fintech platforms
🧪 Future Improvements
Full Arcium MPC integration
Frontend UI
Wallet-based authentication
Real encrypted computation
