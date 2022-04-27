import NextLink from 'next/link';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';
import { dbOrders } from '../../database';
import { IOrder } from '../../interfaces';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },

  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows information if the order is paid or not',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="No Paid" variant="outlined" />
      );
    },
  },
  {
    field: 'order',
    headerName: 'View order',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.orderId}`} passHref>
          <Link underline="always">View order</Link>
        </NextLink>
      );
    },
  },
];

interface Props {
  orders: IOrder[];
}

const HistoryPage: NextPage<Props> = ({ orders }) => {
  const rows = orders.map((order, idx) => ({
    id: idx + 1,
    paid: order.isPaid,
    fullname: `${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    orderId: order._id,
  }));

  return (
    <ShopLayout
      title={'Order history'}
      pageDescription={'Client order history'}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
        Order history
      </Typography>

      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
  const session: any = await getSession({ req });

  if ( !session ) {
    return {
      redirect: {
        destination: '/auth/login?p=/orders/history',
        permanent: false,
      },
    };
  }

  const orders = await dbOrders.getOrdersByUser( session.user._id );


  return {
    props: {
      orders,
    },
  };
};



export default HistoryPage;