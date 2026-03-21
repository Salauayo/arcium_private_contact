const anchor = require("@coral-xyz/anchor");
require('dotenv').config();

const connection = new anchor.web3.Connection(process.env.RPC_URL);

(async () => {
  try {
    const slot = await connection.getSlot();
    console.log("Connected to Solana! Current slot:", slot);
  } catch (err) {
    console.error("Error connecting to Solana:", err);
  }
})();
