import { Button, Grid } from "@mui/material";
import { Directions } from "@mui/icons-material";
import CustomTypo from "components/CustomTypo";
import React from "react";

export default function BusinessHours() {
  return (
    <div className="text-secondary">
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CustomTypo variant="h4">Address</CustomTypo>
          <div className="m-4">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Directions />}
            >
              Get Directions
            </Button>
            <br />
            <br />
            <CustomTypo color="primary">
              Storm in a Coffeepot,
              <br />
              Ehrengutstraße 18,
              <br />
              80469 München,
              <br />
              Germany
            </CustomTypo>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CustomTypo variant="h4">Business Hours</CustomTypo>
          <div className="m-4">
            <table>
              <tbody>
                {[
                  { day: "Monday", time: "09:00–17:00" },
                  { day: "Tuesday", time: "09:00–17:00" },
                  { day: "Wednesday", time: "09:00–17:00" },
                  { day: "Thursday", time: "09:00–17:00" },
                  { day: "Friday", time: "09:00–17:00" },
                  { day: "Saturday", time: "09:00–17:00" },
                  { day: "Sunday", time: "closed" },
                ].map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="pr-4">
                      <CustomTypo color="primary">{item?.day ?? ""}:</CustomTypo>
                    </td>
                    <td>
                      <CustomTypo color="primary">
                        {item?.time ?? ""}
                      </CustomTypo>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
