import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import userApi from "src/api/usersApi";

export const AccountProfileDetails = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form autoComplete="off">
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent key={Math.random()}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Name"
                name="name"
                // onChange={handleChange}
                defaultValue={props.infoUser?.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled
                label="ID"
                name="id"
                onChange={handleChange}
                required
                defaultValue={props.infoUser?.id}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                defaultValue={props.infoUser?.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User name"
                name="username"
                onChange={handleChange}
                required
                defaultValue={props.infoUser?.username}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                required
                defaultValue={props.infoUser?.phone}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
