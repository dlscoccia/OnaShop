import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts';

import { ProductList } from '../components/products';
import { useProducts } from '../hooks';

import { FullScreenLoading } from '../components/ui';
import banner from '../assets/hero-banner.jpg';

const HomePage: NextPage = () => {


  const { products, isLoading } = useProducts('/products');


  return (
    <ShopLayout
      title={'Ona Shop - Home'}
      pageDescription={'Find the trendy products here!'}
    >
      <Image src={banner} alt="hero banner" />
      <Typography
        variant="h1"
        component="h1"
        sx={{ mt: 5, mb: 2 }}
        align="center"
      >
        Choose the perfect outfit!
      </Typography>
      <Typography
        variant="h2"
        sx={{ mb: 5, textDecoration: 'underline' }}
        align="center"
      >
        All the products you need for your next trip
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default HomePage;
