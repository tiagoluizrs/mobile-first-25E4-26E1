import { lazy, Suspense, useState } from 'react';
import './App.scss';

import Loading from './components/custom/loading/Loading';
import { Button } from './components';
import { ThemeProvider } from 'styled-components';

const HeaderLazy = lazy(() => import('./components/custom/header/Header.jsx'));
const HomePageLazy = lazy(() => import('./pages/Home.jsx'));
const FooterLazy = lazy(() => import('./components/custom/footer/Footer.jsx'));

const lightTheme = {
    primaryColor: '#d2232a',
    secondaryColor: '#000000',
    tertiaryColor: '#92181d',
    quaternaryColor: '#bc1f26'
}

const darkTheme = {
    primaryColor: '#e25459ff',
    secondaryColor: '#aeaeaeff',
    tertiaryColor: '#ed6469ff',
    quaternaryColor: '#f2959aff'
}

const App = () => {
    const [dark, setDark] =  useState(window.localStorage.getItem('darkMode') === 'true' ? true : false);

    return  <ThemeProvider theme={dark ? darkTheme : lightTheme}>
                <Suspense fallback={<Loading/>}>
                    <Button
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            zIndex: 1000
                        }}
                        color="primary" onClick={() => {
                            setDark(!dark)
                            window.localStorage.setItem('darkMode', !dark);
                        }}>
                        {!dark ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
                    </Button>
                    <HeaderLazy/>
                    <HomePageLazy />
                    <FooterLazy />
                </Suspense>
            </ThemeProvider>;
}

export default App;