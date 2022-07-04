import { Menu } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import CustomDrawer from "components/CustomDrawer";
import Logo from "components/Logo";
import { useState } from "react";
import { MENU_ACTIONS } from "./MenuActions";
import MENUS from "./menuData.json";
import SideMenuButton from "./SideMenuButton";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((s = false) => !s);

  return (
    <div>
      <IconButton onClick={toggleMenu} color="inherit">
        <Menu />
      </IconButton>

      <CustomDrawer isOpen={isOpen} onClose={setIsOpen} position="left">
        <div className="w-60 h-full pt-6 flex flex-col justify-between">
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Logo noCaption={true} />
            </Grid>
            {MENUS.map((menu, menuIndex) => (
              <Grid item lg={12} md={12} sm={12} xs={12} key={menuIndex}>
                <SideMenuButton label={menu?.label ?? ""} to={menu?.to ?? ""} />
              </Grid>
            ))}
          </Grid>

          {/* actions */}
          <Grid container justifyContent="center" spacing={1} className="pb-10">
            {MENU_ACTIONS.map((menu, menuIndex) => (
              <Grid item lg={12} md={12} sm={12} xs={12} key={menuIndex}>
                <SideMenuButton label={menu?.label ?? ""} to={menu?.to ?? ""} />
              </Grid>
            ))}
          </Grid>
        </div>
      </CustomDrawer>
    </div>
  );
}
