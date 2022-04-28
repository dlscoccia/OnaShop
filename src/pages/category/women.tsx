import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../../shared/components/layouts';

import { ProductList } from '../../../shared/components/products';
import { useProducts } from '../../../shared/hooks';

import { FullScreenLoading } from '../../../shared/components/ui';
import banner from '../../../shared/assets/women-banner.jpg';

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=women');

  return (
    <ShopLayout
      title={'Ona Shop - Women'}
      pageDescription={'Find the look that will make you smile'}
    >
      <Image src={banner} alt="women banner" />
      <Typography
        variant="h1"
        component="h1"
        sx={{ mt: 2, mb: 1, fontSize: '3.5rem' }}
      >
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
