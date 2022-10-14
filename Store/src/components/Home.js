import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero'
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./modules/theme";



function Index() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <AppAppBar/>
                    <ProductHero/>
                    <ProductCategories/>
                    <ProductHowItWorks/>
                    <ProductCTA/>
                    <ProductSmokingHero/>
                    <AppFooter/>
                </React.Fragment>
            </ThemeProvider>
        </div>

    );
}

export default withRoot(Index);
