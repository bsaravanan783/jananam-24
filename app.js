const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;
app.use(express.json());

console.log(process.env.PAYU_MERCHANT_KEY);

app.listen(port, () => {
  console.log(`Server listening on ${port} `);
});
