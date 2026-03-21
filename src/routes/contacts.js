const express = require("express");
const router = express.Router();

const { hashAndEncrypt } = require("../services/hashService");
const { authenticate } = require("../services/authService");

// Find friends route
router.post("/find-friends", authenticate, async (req, res) => {
  const { contacts } = req.body;

  if (!Array.isArray(contacts)) {
    return res.status(400).json({ error: "Contacts must be an array" });
  }

  try {
    // Encrypt contacts
    const encryptedContacts = hashAndEncrypt(contacts);

    // Encrypt platform users
    const platformUsers = require("../data/users");
    const encryptedPlatform = hashAndEncrypt(platformUsers);

    // Match (temporary PSI simulation)
    const matches = encryptedContacts.filter(c =>
      encryptedPlatform.includes(c)
    );

    res.json({ matches });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
