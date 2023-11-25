import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Blueharb | Home</title>
            </Helmet>
            <Banner/>
            <About/>
        </div>
    );
};

export default Home;