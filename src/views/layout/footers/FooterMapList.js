import { Add, Remove } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomLink from "components/CustomLink";
import CustomTypo from "components/CustomTypo";
import { formatArray } from "lib/arrayObject";
import { useEffect, useState } from "react";

export default function FooterMapList({ title = "", data = [] }) {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen((s = false) => !s);

  useEffect(() => {
    setIsOpen(!isSmDown);
  }, [isSmDown]);

  return (
    <div>
      <div className="flex justify-between items-center pb-6 sm-down:pb-4">
        <CustomTypo variant="h3">{title}</CustomTypo>
        <div className="sm:hidden">
          <IconButton color="inherit" onClick={toggleOpen}>
            {isOpen ? <Add /> : <Remove />}
          </IconButton>
        </div>
      </div>
      <Collapse in={isOpen}>
        <Stack spacing={2} className="mr-10 sm-down:mr-0">
          {formatArray(data).map((item, itemIndex) => (
            <CustomLink key={itemIndex} to={item?.to ?? ""}>
              <CustomTypo variant="subtitle2">{item?.label ?? ""}</CustomTypo>
            </CustomLink>
          ))}
        </Stack>
      </Collapse>
    </div>
  );
}
