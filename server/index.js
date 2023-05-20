require("dotenv").config();
const upload = require("./routes/upload");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const connection = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

let gfs;
connection();

const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

app.use("/file", upload);

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// media routes
app.get("/file", async (req, res) => {
  try {
    let file = await gfs.files;
    file = await file.find().toArray();
    res.send(file);
  } catch (error) {
    res.send("No data found");
  }
});
app.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
    console.log(res);
    res.send(readStream);
  } catch (error) {
    res.send("No file found");
  }
});

app.delete("/file/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send("An error occured.");
  }
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
