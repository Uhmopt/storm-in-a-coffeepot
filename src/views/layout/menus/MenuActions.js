import { Directions, Email } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import CustomLink from "components/CustomLink";

export default function MenuActions() {
  return (
    <div className="sm-down:hidden">
      <Grid container spacing={2} alignItems="center">
        {MENU_ACTIONS.map((item, itemIndex) => (
          <Grid key={itemIndex} item>
            <CustomLink to={item.to}>
              <Button color="primary" startIcon={item.icon ?? null}>
                {item.label ?? null}
              </Button>
            </CustomLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const MENU_ACTIONS = [
  { icon: <Email />, label: "Contact Us", to: "#" },
  { icon: <Directions />, label: "Get Directions", to: "#" },
];
