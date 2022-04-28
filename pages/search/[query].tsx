import type { NextPage, GetServerSideProps } from 'next';
import { Typography, Box } from '@mui/material';

import { ShopLayout } from '../../shared/components/layouts';

import { ProductList } from '../../shared/components/products';

import { dbProducts } from '../../core/database';
import { IProduct } from '../../core/interfaces';


interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}


const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {


  return (
    <ShopLayout
      title={'Ona Shop - Search'}
      pageDescription={'Find the outfit for your next date'}
    >
      <Typography variant="h1" component="h1">
        Find products
      </Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Term: {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            We could&apos;t find any products for the term:
          </Typography>
          <Typography
            variant="h2"
            sx={{ ml: 1 }}
            color="secondary"
            textTransform="capitalize"
          >
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getProductsByTerm('shirt');
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};


export default SearchPage;
