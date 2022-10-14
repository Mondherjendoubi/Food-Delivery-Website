import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@mui/icons-material";
import createTheme from "@mui/material/styles/createTheme";
import grey from "@mui/material/colors/grey";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

function ProductValues() {
    return (
        <Box
            component="section"
            sx={{display: 'flex', overflow: 'hidden', bgcolor: 'primary.main'}}
        >
            <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
                <Grid direction="column" container spacing={5}>
                    <Grid direction="row" container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <IconButton color="secondary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file"/>
                                    <PhotoCamera/>
                                </IconButton>
                                <Typography color="secondary.light" variant="h6" sx={{my: 5}}>
                                    The best luxury hotels
                                </Typography>
                                <Typography color="secondary.light" variant="h5">
                                    {
                                        'From the latest trendy boutique hotel to the iconic palace with XXL pool'
                                    }

                                    {
                                        ', go for a mini-vacation just a few subway stops away from your home.'
                                    }
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
                                    New experiences
                                </Typography>
                                <Typography color="secondary.light" variant="h5">
                                    {
                                        'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                                    }

                                    {'your Sundays will not be alike.'}
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
                </Grid>
            </Container>
        </Box>

    );
}

export default ProductValues;
