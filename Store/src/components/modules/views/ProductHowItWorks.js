import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'primary.main', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography color="secondary.light" variant="h4" marked="center" component="h2" sx={{ mb: 16 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <IconButton color="secondary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file"/>
                  <PhotoCamera/>
                </IconButton>
                <Typography color="secondary.light" variant="h6" sx={{my: 5}}>
                  Exclusive rates
                </Typography>
                <Typography color="secondary.light" variant="h5">
                  {'By registering, you will access specially negotiated rates '}
                  {'that you will not find anywhere else.'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <IconButton color="secondary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file"/>
                  <PhotoCamera/>
                </IconButton>
                <Typography color="secondary.light" variant="h6" sx={{my: 5}}>
                  Exclusive rates
                </Typography>
                <Typography color="secondary.light" variant="h5">
                  {'By registering, you will access specially negotiated rates '}
                  {'that you will not find anywhere else.'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <IconButton color="secondary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file"/>
                  <PhotoCamera/>
                </IconButton>
                <Typography color="secondary.light" variant="h6" sx={{my: 5}}>
                  Exclusive rates
                </Typography>
                <Typography color="secondary.light" variant="h5">
                  {'By registering, you will access specially negotiated rates '}
                  {'that you will not find anywhere else.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get Direction
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
