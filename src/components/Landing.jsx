import Navigation from "./Navigation";
import Footer from "./Footer";
const Landing = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-36">
                <div className="mx-14 border-2 rounded-md pt-4 drop-shadow-sm">
                    <p className="text-center text-5xl pb-2">Welcome to Our Lung Cancer Website</p>
                    <p className="text-center text-xl">"Over 50% of Asian American females diagnosed with lung cancer did not smoke." <br/><br/>UCSF Helen Diller Family Comprehensive Cancer Center</p>
                </div>
                <div className="grid grid-cols-2 my-16 mx-24">
                    <div className="text-center bg-blue-800 shadow-xl shadow-regalmagenta/50 row-span-2">Test 1</div>
                    <div className="text-center bg-blue-800">Test 2</div>
                    <div className="text-center bg-blue-800">Test 2</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Landing;