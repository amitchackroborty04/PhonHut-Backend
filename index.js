const express = require("express");

const cors = require("cors");
require("dotenv").config();
// const router = require("./router");
const app = express();
app.use(cors());
app.use(express.json());

// app.use(router);
app.get("/", (req, res) => {
  res.send("Hello from PhonHut Backend ");
});

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

app.listen(process.env.SERVERPORT, () => {
  console.log(`Server running on port ${process.env.SERVERPORT}`);
});