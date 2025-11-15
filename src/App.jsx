import './App.scss';
import {
    Header,
    Banner,
    New,
    Partners,
    Footer
} from './components/index.js';

const App = () => {
    return  <>
                <Header />
                <Banner />
                <New />
                <New />
                <New />
                <New />
                <Partners />
                <Footer />
            </>;
}

export default App;