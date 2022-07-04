import React from "react";
import defaultImage from "assets/images/default-image.png";
import { APP_NAME } from "config";

export default function CustomImage({ src = "", alt = APP_NAME, ...props }) {
  return <img src={src ? src : defaultImage} alt={alt} {...props} />;
}
