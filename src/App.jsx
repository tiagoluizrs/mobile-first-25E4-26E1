import './App.scss';

import {
    Header,
    Footer
} from './components/index.js';
import HomePage from './pages/Home.jsx';

const App = () => {
    return  <>
                <Header />
                <HomePage />
                <Footer />
            </>;
}

export default App;