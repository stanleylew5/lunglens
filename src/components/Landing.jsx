import Navigation from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import lungs from "../../public/images/lungs.png"
import mask from "../../public/images/mask.png"
import Link from "next/link";
const Landing = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-28">
                <div className="mx-14 border-1 rounded-lg pt-4 shadow-3xl shadow-regalmagenta/50">
                    <p className="text-center text-5xl pb-2 font-medium bg-clip-text text-transparent bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8">Welcome to Lung Lens</p>
                    <p className="text-center text-xl">"Over 50% of Asian American females diagnosed with lung cancer did not smoke."</p>
                    <p className="text-center text-xl">UCSF Helen Diller Family Comprehensive Cancer Center</p>
                </div>
                <div className="grid grid-cols-10 my-16 mx-24 shadow-3xl shadow-regalmagenta/50 items-center border-1 py-4">
                    <div className="row-span-2 px-6 text-center col-span-5">
                        <div className="text-4xl">What is Lung Cancer?</div>
                        <div className="pt-12">Lung cancer is a type of cancer that starts in the lungs. It is one of the leading causes of cancer-related deaths worldwide.</div>
                        <button className="border-2 mx-52 rounded-xl py-2 px-8 mt-8 shadow-indigo-500/50 shadow-2xl">
                            <Link href="/info" className="text-white" style={{ textDecoration: "none" }}>Learn More</Link>
                        </button>
                    </div>
                    <div className="text-center">
                        <Link title="Click to learn more!" href="https://www.cancer.org/cancer/types/lung-cancer/detection-diagnosis-staging/signs-symptoms.html#:~:text=The%20most%20common%20symptoms%20of,deep%20breathing%2C%20coughing%2C%20or%20laughing">
                            <Image src={lungs.src} width={150} height={150} alt="lungs" className="static"/>
                        </Link>
                    </div>
                    <div className="col-span-4 px-4">
                        <div className="text-2xl">Types of Lung Cancer</div>
                        <div className="mt-3">There are two main types of lung cancer: small cell lung cancer & non-small cell lung cancer</div>
                    </div>
                    <div className="text-center">
                        <Link title="Click to learn more!" href="https://www.youtube.com/watch?v=QKUOYpsbROk">
                            <Image src={mask.src} width={150} height={150} alt="mask"/>
                        </Link>
                    </div>
                    <div className="col-span-4 px-4">
                        <div className="text-2xl">Symptoms of Lung Cancer</div>
                        <div className="mt-3">Symptoms of lung cancer may include persistent cough, chest pain, shortness of breath, and fatigue</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Landing;