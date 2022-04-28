import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

interface Props {
  title: string;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        style={{
          height: '100vh',
          backgroundImage: `url('https://res.cloudinary.com/dlscoccia/image/upload/e_grayscale/v1651102431/lxxksjzh1y2cracxe7r9.jpg')`,
          backgroundSize: 'cover',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
