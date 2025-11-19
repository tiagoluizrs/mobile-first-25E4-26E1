import { Banner, News, Partners } from "../components";

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