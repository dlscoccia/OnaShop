import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';
import banner from '../../assets/kids-banner.jpg';

const KidPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title={'Ona Shop - Kids'}
      pageDescription={'Find the look that will make you shine'}
    >
      <Image src={banner} alt="hero banner" />
      <Typography variant="h1" component="h1" sx={{ mt: 2, mb: 1 }}>
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
