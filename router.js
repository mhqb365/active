const express = require("express");
const router = express.Router();
const fs = require("fs");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);

router.get("/run", async (req, res, next) => {
  const activeScript = fs.readFileSync(appDir + "/active.ps1");
  const stringBuf = Buffer.from(activeScript);
  res.send(stringBuf);
});

router.get("/Active.bat", async (req, res, next) => {
  res.sendFile(appDir + "/Active.bat");
});

module.exports = router;
