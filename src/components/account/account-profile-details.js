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
import Collapse from "@mui/material/Collapse";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import userApi from "src/api/usersApi";
import CloseIcon from "@mui/icons-material/Close";

export const AccountProfileDetails = (props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const updateUser = async () => {
    try {
      const response = await userApi.updateUser(props.infoUser);
      console.log(response);
      setOpen(!open);
    } catch (error) {
      console.log(Promise.reject(error));
    }
  };

  return (
    <form autoComplete="off">
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Update success
          </Alert>
        </Collapse>
      </Box>
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
                onChange={(e) => {
                  props.infoUser.name = e.target.value;
                  console.log("username", props.infoUser?.name);
                }}
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
                onChange={(e) => {
                  props.infoUser.id = e.target.value;
                }}
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
                onChange={(e) => {
                  props.infoUser.email = e.target.value;
                }}
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
                onChange={(e) => {
                  props.infoUser.username = e.target.value;
                }}
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
                onChange={(e) => {
                  props.infoUser.phone = e.target.value;
                }}
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
          <Button color="primary" variant="contained" onClick={updateUser}>
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
