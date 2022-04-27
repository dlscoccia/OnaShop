import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid, styled, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#1E1E1E',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
}));

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: 'center' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://#">
        Ona | Shop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        bottom: 0,
      }}
    >
      <Container maxWidth="sm">
        <Grid container direction="row">
          <Grid item xs={4}>
            <Item>
              <InstagramIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <FacebookIcon />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <TwitterIcon />
            </Item>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
