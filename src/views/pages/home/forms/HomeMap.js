import Center from "components/Center";
import CustomGoogleMap from "components/CustomGoogleMap";
import CustomTypo from "components/CustomTypo";
import React from "react";

export default function HomeMap() {
  return (
    <div className="my-6">
      <Center className="my-6">
        <CustomTypo variant="h2" color="secondary">Our Coffee Shop</CustomTypo>
      </Center>
      <CustomGoogleMap />
    </div>
  );
}
