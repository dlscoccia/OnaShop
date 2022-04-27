import type { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks';

import { FullScreenLoading } from '../../components/ui';
import banner from '../../assets/men-banner.jpg';

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout
      title={'Ona Shop - Men'}
      pageDescription={'Find the look that will make you dream'}
    >
      <Image src={banner} alt="hero banner" />
      <Typography variant="h1" component="h1" sx={{ mt: 2, mb: 1 }}>
        Men
      </Typography>
      <Typography variant="h2" sx={{ mb: 5 }}>
        Check out all the freshest styles your closet needs in our men&apos;s
        clothing range.
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
