import { AppBar, Container, Grid } from "@mui/material";
import Logo from "components/Logo";
import MenuActions from "./menus/MenuActions";
import SideMenu from "./menus/SideMenu";

export default function Header() {
  return (
    <AppBar color="transparent" className="backdrop-blur-md">
      <Container maxWidth="lg">
        <div className="flex justify-between items-center py-4">
          <div>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SideMenu />
              </Grid>
              <Grid item>
                <Logo />
              </Grid>
            </Grid>
          </div>
          <MenuActions />
        </div>
      </Container>
    </AppBar>
  );
}
