import { formatArray } from "lib/arrayObject";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import CustomImage from "./CustomImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CustomSlider({ data = [], imageClassName = "" }) {
  return (
    <div>
      <Carousel autoPlay={false} infiniteLoop={true}>
        {formatArray(data).map((item, itemIndex) => (
          <div key={itemIndex} className="relative">
            <CustomImage
              src={item?.background}
              className={"object-cover " + imageClassName}
            />
            {item?.content ?? null}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
