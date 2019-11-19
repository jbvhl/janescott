const express = require("express"),
  path = require("path"),
  app = express();

app.use(express.static(`${__dirname}/../build`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen("we are connected?");
