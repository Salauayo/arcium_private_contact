const fs = require("fs");
const { Keypair, Connection } = require("@solana/web3.js");
const { Artium } = require("@arcium-hq/client");
require('dotenv').config();

// Connect to Solana
const connection = new Connection(process.env.RPC_URL);

// Load wallet keypair
const wallet = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(fs.readFileSync(process.env.KEYPAIR_PATH, "utf-8")))
);

// Create Arcium client
const arciumClient = new Artium({ connection, wallet });

// Submit PSI computation to Arcium
async function runPrivateContactPSI(encryptedContacts, encryptedPlatform) {
  try {
    // Generate unique computation ID (timestamp)
    const computationId = Date.now();

    // Submit computation (example API — adapt based on your Arcium PSI program)
    const tx = await arciumClient.methods
      .runPsi(encryptedContacts, encryptedPlatform)
      .accounts({
        computationAccount: computationId,
        clusterAccount: process.env.ARCIUM_CLUSTER_OFFSET,
      })
      .rpc();

    // Wait for result
    const result = await arciumClient.methods
      .getPsiResult()
      .accounts({ computationAccount: computationId })
      .view();

    return result;
  } catch (err) {
    throw new Error("Arcium PSI computation failed: " + err.message);
  }
}

module.exports = { runPrivateContactPSI };
