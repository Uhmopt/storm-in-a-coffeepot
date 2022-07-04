import { Email } from "@mui/icons-material";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import React from "react";

export default function Subscribe() {
  return (
    <div className="py-20 sm-down:py-8 bg-primary text-white">
      <Container>
        <CustomTypo variant="h2" className="pb-5 text-center">
          <Email fontSize="inherit" /> Contact Us
        </CustomTypo>
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <CustomTypo variant="body2 ">
              contact us, contact us, contact us, contact us, contact us,
              contact us, contact us, contact us, contact us, contact us,
              contact us, contact us, contact us, contact us, contact us,
              contact us, contact us, contact us, contact us, contact us,
            </CustomTypo>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="flex justify-center items-center"
          >
            <div className="flex-grow mr-4 sm-down:hidden">
              <Paper>
                <TextField fullWidth size="small" />
              </Paper>
            </div>
            <Button variant="outlined" color="inherit" size="large">
              SUBSCRIBE
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
