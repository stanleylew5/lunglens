import Navigation from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import tempimg1 from "../../public/images/lungs.png"
const Resources = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-36">
                <div className="mx-14 border-1 rounded-lg pt-4 shadow-xl shadow-regalmagenta/50">
                    <p className="text-center text-5xl pb-2 font-medium">Recommended Resources</p>
                    <p className="text-center text-lg">Explore these helpful resources for lung cancer patients and their families</p>
                </div>
                <div className="grid grid-cols-3 mx-32 place-items-center">
                    <div>
                        <Image src={tempimg1.src} width={150} height={150} alt="tempimg1"/>
                    </div>
                    <div>
                        <Image src={tempimg1.src} width={150} height={150} alt="tempimg2"/>
                    </div>
                    <div>
                        <Image src={tempimg1.src} width={150} height={150} alt="tempimg3"/>
                    </div>
                    <div>Temp Text 1</div>
                    <div>Temp Text 1</div>
                    <div>Temp Text 1</div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default Resources;