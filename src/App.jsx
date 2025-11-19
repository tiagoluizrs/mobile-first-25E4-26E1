import { lazy, Suspense } from 'react';
import './App.scss';

import Loading from './components/custom/loading/Loading';

const HeaderLazy = lazy(() => import('./components/custom/header/Header.jsx'));
const HomePageLazy = lazy(() => import('./pages/Home.jsx'));
const FooterLazy = lazy(() => import('./components/custom/footer/Footer.jsx'));

const App = () => {
return  <>
            <Suspense fallback={<Loading/>}>
                <HeaderLazy />
                <HomePageLazy />
                <FooterLazy />
            </Suspense>
        </>;
}

export default App;