import React from "react";
import Image from "./Image";

function Carousel(props) {
  const { title, images } = props.entry;

  const renderImages =
    images &&
    images.map((e, i) => {
      console.log(e);
      const alt = e.fields.altText;
      const src = e.fields.desktopImage[0].url;
      return <Image alt={alt} src={src} key={i} />;
    });

  return (
    <div className="carousel">
      <h1>{title}</h1>
      <div className="images">{renderImages}</div>
    </div>
  );
}

export default Carousel;
