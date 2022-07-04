import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import Center from "components/Center";
import CustomTypo from "components/CustomTypo";
import { APP_NAME } from "config";
import BusinessHours from "./forms/BusinessHours";
import HeroSlider from "./forms/HeroSlider";
import HomeMap from "./forms/HomeMap";

export default function HomeContent() {
  return (
    <div className="mb-5">
      <Center className="pt-20 pb-6 sm-down:pt-16 sm-down:pb-4">
        <CustomTypo variant="h1" color="secondary">
          {APP_NAME}
        </CustomTypo>
      </Center>
      <Center className="pb-9 sm-down:pb-6">
        <CustomTypo variant="body2" color="primary">
          Cafe in Munich
        </CustomTypo>
      </Center>
      <Center className="pb-16 sm-down:pb-12">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Email />}
          size="large"
        >
          Contact Us
        </Button>
      </Center>

      {/* slider */}
      <HeroSlider />

      {/* map box */}
      <HomeMap />

      {/* Business Hours */}
      <BusinessHours />
    </div>
  );
}
