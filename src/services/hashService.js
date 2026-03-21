const crypto = require("crypto");

// Simple hash function (SHA256)
function hashEmail(email) {
  return crypto.createHash("sha256").update(email).digest("hex");
}

// 1️⃣ Hash + "encrypt" contacts for Arcium PSI
// Note: real encryption would use Arcium's SDK; for dev/testing, this is placeholder
function hashAndEncrypt(contacts) {
  return contacts.map(email => {
    const hashed = hashEmail(email);
    // simulate encryption (placeholder)
    return Buffer.from(hashed).toString("base64");
  });
}

// 2️⃣ Decrypt PSI results returned from Arcium
// Again, for dev/testing, decode Base64 back to SHA256 hash
function decryptPsiResult(encryptedResults) {
  return encryptedResults.map(enc => Buffer.from(enc, "base64").toString("utf-8"));
}

module.exports = { hashAndEncrypt, decryptPsiResult };
