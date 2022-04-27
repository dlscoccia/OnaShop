import { FC } from 'react';
import Head from 'next/head';

import { Navbar, SideMenu } from '../ui';
import Footer from '../ui/Footer';
import { Box } from '@mui/material';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav>
        <Navbar />
      </nav>

      <SideMenu />
      <Box sx={{ minHeight: '75vh' }}>
        <main
          style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px',
          }}
        >
          {children}
        </main>
      </Box>
      <Footer />
    </>
  );
};


