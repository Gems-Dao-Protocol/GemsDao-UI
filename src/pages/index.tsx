import Benefits from "@app/products/home/Benefits"
import Faq from "@app/products/home/Faq"
// import Header from "@app/products/home/Header"
import Intro from "@app/products/home/Intro"
import Mint from "@app/products/home/Mint"
import Stats from "@app/products/home/Stats"
import Header from "@app/products/membership/Header"

const Home = () => {
    return (
        <div className="w-full flex justify-center bg-top bg-no-repeat bg-contain bg-[url('./images/Background.png')] flex-1">
            <div className="w-full bg-app-default flex justify-center">
                <div className='w-full mx-6 sm:mx-10 lg:w-10/12 lg:mx-0'>
                    <Header />
                    <Intro />
                    <Stats />
                    <Benefits />
                    <Faq />
                    <Mint />
                </div>
            </div>
        </div>
    );
};

export default Home;