import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListOders } from "../components/customer/customer-list-orders";
import { CustomerListToolbar } from "../components/customer/customer-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import React, { useState, useEffect } from "react";
import orderApi from "src/api/orderApi";

const Orders = () => {
  const [listOrder, setListOrder] = useState([]);
  const fetchListOrder = async () => {
    try {
      const param = {
        page: 1,
        size: 10,
      };
      const response = await orderApi.getListOrder(param);
      setListOrder(response);
    } catch (error) {
      console.log(Promise.reject(error));
    }
  };

  useEffect(() => {
    fetchListOrder();
  }, []);

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar titlePage="Orders" />
          <Box sx={{ mt: 3 }}>
            <CustomerListOders orders={listOrder} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Orders;

Orders.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
