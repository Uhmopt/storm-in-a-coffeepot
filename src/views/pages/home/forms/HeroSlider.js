import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import heroImage10 from "assets/photos/photo (10).webp";
import heroImage11 from "assets/photos/photo (11).webp";
import heroImage13 from "assets/photos/photo (13).webp";
import heroImage14 from "assets/photos/photo (14).webp";
import heroImage15 from "assets/photos/photo (15).webp";
import heroImage16 from "assets/photos/photo (16).webp";
import heroImage17 from "assets/photos/photo (17).webp";
import heroImage22 from "assets/photos/photo (22).webp";
import heroImage23 from "assets/photos/photo (23).webp";
import heroImage27 from "assets/photos/photo (27).webp";
import heroImage31 from "assets/photos/photo (31).webp";
import heroImage34 from "assets/photos/photo (34).webp";
import heroImage37 from "assets/photos/photo (37).webp";
import heroImage40 from "assets/photos/photo (40).webp";
import heroImage9 from "assets/photos/photo (9).webp";
import CustomSlider from "components/CustomSlider";
import CustomTypo from "components/CustomTypo";

const HeroSliderContent = ({ title = "", caption = "", color = "primary" }) => (
  <div
    className={`sm:absolute sm:bottom-0 sm:pl-32 py-5 flex flex-col items-center sm:items-start sm:text-${color} sm-down:text-primary sm-down:bg-white-gray sm-down:py-8 backdrop-blur-sm bg-white bg-opacity-30 w-full`}
  >
    <CustomTypo variant="h2">{title}</CustomTypo>
    <CustomTypo variant="body2" className="sm:pb-6">
      {caption}
    </CustomTypo>
    <Button variant="contained" color="secondary" startIcon={<Email />}>
      Contact Us
    </Button>
  </div>
);

export default function HeroSlider() {
  return (
    <div>
      <CustomSlider
        imageClassName="h-144 sm-down:h-48"
        data={[
          {
            background: heroImage15,
            content: (
              <HeroSliderContent
                title="Our Coffeeshop...."
                caption="Clean, modern, minimalistic.... Maybe the smallest Cafe? It doesn't matter, if you want damn fine Coffee.😉"
                // color="white"
              />
            ),
          },
          {
            background: heroImage23,
            content: (
              <HeroSliderContent
                title="Best equipment for good coffee..."
                caption=""
                // color="white"
              />
            ),
          },
          {
            background: heroImage31,
            content: (
              <HeroSliderContent
                title="We are waiting for you!"
                caption="It will be a very sunny spring day today. A perfect start with coffee and cake😉."
                // color="white"
              />
            ),
          },
          {
            background: heroImage27,
            content: (
              <HeroSliderContent
                title="Best equipment for good coffee..."
                caption=""
                // color="white"
              />
            ),
          },
          {
            background: heroImage37,
            content: (
              <HeroSliderContent
                title="Specialty coffee is like an art..."
                caption="We can't wait to enjoy coffee with you, very soon! "
                color="white"
              />
            ),
          },
          {
            background: heroImage34,
            content: (
              <HeroSliderContent
                title="The beast is waiting....."
                caption=""
                // color="white"
              />
            ),
          },
          {
            background: heroImage40,
            content: (
              <HeroSliderContent
                title="Stay tuned! ........"
                caption=""
                // color="white"
              />
            ),
          },
          {
            background: heroImage9,
            content: (
              <HeroSliderContent
                title="ANZAC-Cookies"
                caption="On April 25th the ANZAC-Day is a national day of remembrance in Australia and New Zealand. Try these cookies and you will feel like a short trip to Australia and New Zealand."
                color="white"
              />
            ),
          },
          {
            background: heroImage10,
            content: (
              <HeroSliderContent
                title="Easter Bunny"
                caption="Nowadays the Easter Bunny not only lays eggs but also our Happy-Easter-Espresso roasted"
                // color="white"
              />
            ),
          },
          {
            background: heroImage11,
            content: (
              <HeroSliderContent
                title="Grab your Golden Ticket for free Coffee!"
                caption="Every 10th Coffee is free! Do you remember where the ticket is come from?"
                // color="white"
              />
            ),
          },
          {
            background: heroImage14,
            content: (
              <HeroSliderContent
                title="Our new special espresso roast Rwanda Natural"
                caption="Our new special espresso roast Rwanda Natural for all, who wants to try a new taste experience! Super juicy - taste like apple chewing gum🍏😋 Be the first!"
                // color="white"
              />
            ),
          },
          {
            background: heroImage13,
            content: (
              <HeroSliderContent
                title="Humans can exist without coffee..."
                caption="but it doesn't make sense😉 Therefore come and enjoy fine specialty coffee"
                // color="white"
              />
            ),
          },
          {
            background: heroImage17,
            content: (
              <HeroSliderContent
                title="Did you try our handmade almondpastry?"
                caption="Hand laminated puff-pastry filled with almondcream🤤. Come and enjoy this beauties with a damn fine cup of coffee!"
                color="white"
              />
            ),
          },
          {
            background: heroImage16,
            content: (
              <HeroSliderContent
                title="Grab this sweet for your weekend!"
                caption="Our handmade laminated almond pastry filled with a creamy almondcream...."
                // color="white"
              />
            ),
          },
          {
            background: heroImage22,
            content: (
              <HeroSliderContent
                title="Did you know"
                caption="Did you know, that you can buy our organic oatm*lk from @minorfigures not only in your coffee but also as a package? Now, you know it;)"
                // color="white"
              />
            ),
          },
        ]}
      />
    </div>
  );
}
