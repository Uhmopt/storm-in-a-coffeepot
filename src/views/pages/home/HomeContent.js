import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import Center from "components/Center";
import CustomTypo from "components/CustomTypo";
import { APP_NAME } from "config";
import HeroSlider from "./forms/HeroSlider";

export default function HomeContent() {
  return (
    <div className="mb-5">
      <Center className="pt-20 pb-6">
        <CustomTypo variant="h1" color="primary">
          {APP_NAME}
        </CustomTypo>
      </Center>
      <Center className="pb-3">
        <CustomTypo variant="body2" color="primary">
          Cafe in New York
        </CustomTypo>
      </Center>
      <Center className="pb-9">
        <CustomTypo variant="body2" color="primary">
          Open today until 7:00 PM
        </CustomTypo>
      </Center>
      <Center className="pb-16">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Email />}
          size="large"
        >
          Contact Us
        </Button>
      </Center>
      <HeroSlider />
    </div>
  );
}
