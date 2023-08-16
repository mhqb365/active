const express = require("express");
const router = require("./router");
const app = express();
const port = 8004;

app.use(express.static("public"));
app.use("/", router);

app.listen(port, () => {
  console.log(`active run at port ${port}`);
});
