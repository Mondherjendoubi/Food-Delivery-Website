import React, {useState} from 'react';
// material
import theme from "../modules/theme";
import {Container, Stack, Typography} from '@mui/material';
// components
import Page from '../Page';
import {ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar} from '../../sections/@dashboard/products';
// mock
import DRINKS from '../../_mock/drinks';
import AppAppBar from "../modules/views/AppAppBar";
import {ThemeProvider} from "@mui/material/styles";
import AppFooter from "../modules/views/AppFooter";
import MenuBar from "../Menubar";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";

// ----------------------------------------------------------------------

export default function EcommerceShop() {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <AppAppBar/>
                <Container
                    component="section"
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9}}
                >
                    <Button
                        sx={{
                            border: '4px solid currentColor',
                            borderRadius: 0,
                            height: 'auto',
                            py: 2,
                            px: 5,
                        }}
                    >
                        <Typography variant="h4" component="span">
                            Products
                        </Typography>
                    </Button>
                </Container>
                <MenuBar/>
                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end"
                       sx={{mb: 5}}>
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{my: 1}}>
                        <ProductFilterSidebar
                            isOpenFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        <ProductSort/>
                    </Stack>
                </Stack>
                <ProductList products={DRINKS}/>
                <Container
                    component="section"
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9}}
                >

                    <Pagination count={10} color="primary"/>
                </Container>
            </Container>
            <AppFooter/>
        </ThemeProvider>
    );
}
