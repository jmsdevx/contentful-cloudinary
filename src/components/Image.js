import React from "react";

function Image(props) {
  const { src, alt } = props;
  return <img src={src} alt={alt} className="image" />;
}

export default Image;
