import Navigation from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import tempimg1 from "../../public/images/lungs.png"
const Info = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-28">
                <div>
                    
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default Info;