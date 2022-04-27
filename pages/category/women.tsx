import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';
import banner from '../../assets/women-banner.jpg';

const WomenPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?gender=women');


  return (
    <ShopLayout
      title={'Teslo-Shop - Women'}
      pageDescription={'Encuentra los mejores productos de Teslo para ellas'}
    >
      <Image src={banner} alt="women banner" />
      <Typography variant="h1" component="h1" sx={{ mt: 2, mb: 1 }}>
        Women
      </Typography>
      <Typography variant="h2" sx={{ mb: 5 }}>
        {' '}
        Discover more women’s fashion by scrolling our Conscious collection
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
