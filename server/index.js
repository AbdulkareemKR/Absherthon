const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const algorithmia = require("algorithmia"); //fetching from ai projects

//mysql://b476717618491f:9f74fa26@us-cdbr-east-04.cleardb.com/heroku_883cdc9b7276b4a?reconnect=true

const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b476717618491f",
  password: "9f74fa26",
  database: "heroku_883cdc9b7276b4a",
});

app.use(cors()); //must be written
app.use(express.json()); //must be written
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/main", (req, res) => {
  const calls = req.body.calls;
  const written = req.body.written;
  const age = req.body.age;
  const gender = req.body.gender;
  const martialStatus = req.body.martialStatus;
  const verified = req.body.verified;
  const sessionCount = req.body.sessionCount;
  const paidCount = req.body.paidCount;
  const price = req.body.price;
  const problem = req.body.problem;

  const input_sms = `${calls}, ${written}, ${age}, ${gender}, ${martialStatus}, ${verified}, ${sessionCount}, ${paidCount}, ${price}, ${problem}`;
  console.log(input_sms);

  const apiKey = "simpTh/X9pl1sE6NZuqB1wFmv0L1";
  const client = algorithmia.client(apiKey);
  client
    .algo("salwakr1/famecare/0.1.0")
    .pipe(input_sms)
    .then((response) => {
      console.log(response.get());
      res.json(response.get());
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
