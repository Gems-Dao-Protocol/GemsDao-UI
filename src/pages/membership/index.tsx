import Header from "@app/products/membership/Header";
import MemberCards from "@app/products/membership/MemberCards";

const Home = () => {
    return (
        <div className="w-full flex justify-center bg-top bg-no-repeat bg-contain bg-[url('./images/Background.png')] flex-1">
            <div className="w-full bg-app-default flex justify-center">
                <div className='w-full mx-6 sm:mx-10 lg:w-10/12 lg:mx-0'>
                    <Header />
                    <MemberCards />
                </div>
            </div>
        </div>
    );
};

export default Home;