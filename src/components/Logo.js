import { Grid } from "@mui/material";
import logo from "assets/logos/logo.png";
import { APP_NAME } from "config";
import CustomImage from "./CustomImage";
import CustomLink from "./CustomLink";
import CustomTypo from "./CustomTypo";

export default function Logo({ isPublish = false, noCaption = false }) {
  const content = (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <CustomImage src={logo} className="h-12" />
      </Grid>
      {noCaption ? null : (
        <Grid item className="md-down:hidden">
          <CustomTypo variant="h3" color="secondary">
            {APP_NAME}
          </CustomTypo>
        </Grid>
      )}
    </Grid>
  );
  return isPublish ? content : <CustomLink to="/">{content}</CustomLink>;
}
