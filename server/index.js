require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;

//setup
app.use(json());
app.use(cors());

//contentful
const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

//get entries endpoint
app.get("/entries", (req, res) => {
  client
    .getEntry(process.env.CONTENTFUL_SAMPLE_ENTRY_ID)
    .then(function (entry) {
      console.log(entry);
      res.status(200).send(entry);
    })
    .catch((error) => console.log(error));
});

//cloudinary
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//upload endpoint
app.post("/upload", (req, res) => {
  const { uploadImage } = req.body;

  cloudinary.uploader.upload(uploadImage, function (error, result) {
    console.log(result);
  });

  res.status(200).send("uploaded");
});

app.listen(port, () => console.log(`Listening on ${port}`));
