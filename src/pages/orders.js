import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListOders } from '../components/customer/customer-list-orders';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Oders = () => (
  <>
    <Head>
      <title>
        Product
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar titlePage="Orders" />
        <Box sx={{ mt: 3 }}>
          <CustomerListOders customers={customers}/>
        </Box>
      </Container>
    </Box>
  </>
);

Oders.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Oders;