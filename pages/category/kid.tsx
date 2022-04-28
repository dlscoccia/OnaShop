import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../shared/components/layouts';

import { ProductList } from '../../shared/components/products';
import { useProducts } from '../../shared/hooks';

import { FullScreenLoading } from '../../shared/components/ui';
import banner from '../../shared/assets/kids-banner.jpg';

const KidPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title={'Ona Shop - Kids'}
      pageDescription={'Find the look that will make you shine'}
    >
      <Image src={banner} alt="hero banner" />
      <Typography
        variant="h1"
        component="h1"
        sx={{ mt: 2, mb: 1, fontSize: '3.5rem' }}
      >
        Kids
      </Typography>
      <Typography variant="h2" sx={{ mb: 5 }}>
        Top picks for kids
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
