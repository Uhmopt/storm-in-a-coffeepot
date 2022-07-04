import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CustomDrawer({
  position = "left",
  children = null,
  isOpen: propsOpen = false,
  onClose = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose(false);
  };

  useEffect(() => {
    setIsOpen(Boolean(propsOpen));
  }, [propsOpen]);

  return (
    <div>
      <Drawer anchor={position} open={isOpen} onClose={handleClose}>
        {children}
      </Drawer>
    </div>
  );
}
