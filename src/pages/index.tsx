import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../shared/components/layouts';

import { ProductList } from '../shared/components/products';
import { useProducts } from '../shared/hooks';

import { FullScreenLoading } from '../shared/components/ui';
import banner from '../shared/assets/hero-banner.jpg';
import { useEffect } from 'react';

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);


  return (
    <ShopLayout
      title={'Ona Shop - Home'}
      pageDescription={'Find the trendy products here!'}
    >
      <Image src={banner} alt="hero banner" />
      <Typography
        variant="h1"
        component="h1"
        sx={{ mt: 5, mb: 2, fontSize: '3.5rem' }}
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
