import Banner from '../components/custom/banner/Banner.jsx';
import News from '../components/custom/news/News.jsx';
import Partners from '../components/custom/partners/Partners.jsx';

const HomePage = () => {
    return  <>
                <Banner />
                    <div className="container">
                        <div className="row">
                            <News/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <Partners />
                        </div>
                    </div>
            </>
}

export default HomePage;