const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/", (req, res) => {
  res.send("Hello World! Hello!");
  
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
