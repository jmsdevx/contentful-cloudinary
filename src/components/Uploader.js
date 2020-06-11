import React, { Component } from "react";
import imageFile from "../pit.jpg";
import axios from "axios";
import Carousel from "./Carousel";

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: {} };
    this.uploadImage = this.uploadImage.bind(this);
    this.getEntry = this.getEntry.bind(this);
  }

  uploadImage(imageFile) {
    axios
      .post("/upload", { imageFile: imageFile })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  getEntry() {
    axios
      .get("/entries")
      .then((response) => {
        console.log(response.data);
        this.setState({ entry: response.data.fields });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { entry } = this.state;
    return (
      <div>
        <h1>Cloudinary Test</h1>
        <button onClick={() => this.uploadImage(imageFile)}>Upload</button>
        <button onClick={this.getEntry}>Get Entry</button>
        <Carousel entry={entry} />
      </div>
    );
  }
}

export default Uploader;
