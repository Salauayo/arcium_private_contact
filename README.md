#  Private Contact Discovery (Arcium)

##  Overview
This project allows users to find friends on a platform **without exposing their contact list**.

Instead of uploading raw contacts, the system uses **privacy-preserving matching** so that:
- Only matches are revealed
- Non-matching contacts remain completely private

---

##  Problem
Most apps like WhatsApp, Telegram, etc. require users to upload their entire contact list on their platform.

This leads to:
- Privacy leaks
- Centralized data collection
- Risk of misuse

---

##  Solution
This project implements **Private Set Intersection (PSI)** logic:

- Contacts are **hashed and encoded**
- Matching is done on encrypted values
- Only common contacts are returned

---

##  Arcium Integration
In a production setup:

- Contacts are encrypted client-side
- Arcium performs computation using **MPC (Multi-Party Computation)**
- No party (server or nodes) can see raw data
- Only matches are revealed

> Current implementation simulates PSI logic, but backend is designed to integrate Arcium directly.

---

##  Tech Stack
- Node.js
- Express
- JWT Authentication
- Crypto (SHA256 hashing)
- Solana (devnet ready)
- Arcium (conceptual integration)

---

##  Project Structure


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

##  Installation & Setup

# Getting Started

Follow these steps to run the backend locally.

---

### 0. Update System (Optional)

```bash
sudo apt update && sudo apt upgrade -y


1. Install Node.js (if not installed)

Check if Node.js exists:
 node -v

If not installed:
 sudo apt install nodejs npm -y


2. Clone the Repository:
git clone https://github.com/salauayo/arcium_private_contact.git
cd arcium_private_contact


3. Install Dependencies
npm install


4. Create Environment Variables:

Create a .env file:
nano .env

Paste:

RPC_URL=https://api.devnet.solana.com
ARCIUM_CLUSTER_OFFSET=1
KEYPAIR_PATH=/home/salauayo/.config/solana/id.json
MXE_PROGRAM_ID=placeholder

⚠️(Replace YOUR_USERNAME with your system username)


5. (Optional) Install Solana CLI;
Only needed if you want blockchain interaction:

sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
solana --version


6. Start the Backend Server
npm start

You should see:
Server running on port 3000
 Testing the API

1. Login:
curl -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"username":"alice","password":"password123"}'

2. Find Friends (Private Matching)
curl -X POST http://localhost:3000/api/find-friends \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
-d '{"contacts":["elon@yahoo.com","friend@gmail.com"]}'

---

##  How It Works
User logs in
Sends contact list
Contacts are hashed + encoded
System compares encrypted values
Only matches are returned

---

##  Impact
Prevents contact data leaks
Enables privacy-first onboarding
Can be used in:
Messaging apps
Social networks
Fintech platforms

---

##  Future Improvements
Full Arcium MPC integration
Frontend UI
Wallet-based authentication
Real encrypted computation

---

##  Advanced Setup (Arcium + Solana)

# 1. Install solana CLI
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
# Reload Terminal
  export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
# check installation
  solana --version

# 2. Generate a wallet
  solana-keygen new
# this create a keypair at:
~/.config/solana/id.json

# 3. Airdrop Solana Devnet
solana config set --url devnet
solana airdrop 2
# Check Balance
solana balance

# 4. Update .env
#Make sure your .env contains
RPC_URL=https://api.devnet.solana.com
ARCIUM_CLUSTER_OFFSET=1
KEYPAIR_PATH=/home/YOUR_USERNAME/.config/solana/id.json
MXE_PROGRAM_ID=placeholder

# 5. Test Solana Connection
node testSolana.js
# Expected output
Connected to Solana! Current slot: XXXXX

#  Arcium Integration Note;
- Current implementation uses simulated Private Set Intersection (PSI)
- Backend structure supports encrypted computation flow
- In full Arcium setup: contacts are encrypted before submission, MPC nodes compute matches, only matches are reveale
