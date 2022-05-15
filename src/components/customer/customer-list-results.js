import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Menu, Dropdown } from "antd";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import {
  Box,
  Card,
  Modal,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TextField,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const CustomerListResults = ({ listUser, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function handleMenuClick(e) {
    // message.info("Click on menu item.");
    setModalIsOpen(true);
  }

  const formik = useFormik({
    initialValues: {
      username: "user3",
      password: "123",
    },

    onSubmit: (e) => {
      const payload = {
        code: e?.code,
        name: e?.name,
        shortDescription: e?.detailDescription,
        detailDescription: e?.detailDescription,
        price: e?.price,
        gender: 1,
        activeFlag: true,
        competitivePrice: e?.price,
        sizes: ["S", "L", "XL", "XXL"],
        colors: ["white", "black", "blue"],
      };

      console.log(e);
      // login(e);
    },
  });
  const handleOpen = (e) => {
    let selected = listUser?.filter((x) => x.id == e.key);
    formik.setFieldValue("code", selected[0].id);
    formik.setFieldValue("name", selected[0].name);
    formik.setFieldValue("price", selected[0].price);
    formik.setFieldValue("detailDescription", selected[0].detailDescription);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const menu = (
    <Menu
      items={[
        {
          label: "Edit",
          key: "1",
          icon: <EditOutlined />,
          onClick: handleOpen,
        },
        {
          label: "Delete",
          key: "2",
          icon: <DeleteOutlined />,
          style: { color: "red" },
          onClick: { handleMenuClick },
        },
      ]}
    />
  );

  return (
    <>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>ROLE</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listUser?.slice(0, limit).map((user) => (
                  <TableRow hover key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Typography color="textPrimary" variant="body1">
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.roles[0].name.slice(5)}</TableCell>
                    <TableCell>
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("value", e);
                          }}
                        >
                          <MoreOutlined
                            style={{
                              border: "1px solid #d9d9d9",
                              color: "black",
                              padding: "7px",
                              marginLeft: "10px",
                              fontSize: "18px",
                            }}
                          />
                        </a>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={listUser.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Update product
              </Typography>
            </Box>

            <TextField
              error={Boolean(formik.touched.code && formik.errors.code)}
              fullWidth
              helperText={formik.touched.code && formik.errors.code}
              label="Code"
              margin="normal"
              name="code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.code}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.name}
              variant="outlined"
            />

            <TextField
              error={Boolean(formik.touched.price && formik.errors.price)}
              fullWidth
              helperText={formik.touched.price && formik.errors.price}
              label="Price"
              margin="normal"
              name="price"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.price}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.detailDescription && formik.errors.detailDescription)}
              fullWidth
              helperText={formik.touched.detailDescription && formik.errors.detailDescription}
              label="Detail description"
              margin="normal"
              name="detailDescription"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.detailDescription}
              variant="outlined"
            />
            <Box sx={{ py: 2, ml: 16 }}>
              <Button sx={{ mr: 2 }} color="primary" size="large" type="submit" variant="contained">
                Update
              </Button>
              <Button color="primary" size="large" variant="contained" onClick={handleClose}>
                close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

CustomerListResults.propTypes = {
  listUser: PropTypes.array.isRequired,
};
