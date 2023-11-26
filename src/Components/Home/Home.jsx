import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import SectionPackage from "../SectionPackage/SectionPackage";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Blueharb | Home</title>
            </Helmet>
            <Banner/>
            <About/>
            <SectionPackage/>
        </div>
    );
};

export default Home;