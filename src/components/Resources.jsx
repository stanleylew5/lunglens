"use client";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import support from "../../public/images/support.png";
import clip from "../../public/images/clip.png";
import tech from "../../public/images/tech.png";
import steps from "../../public/images/steps.png";
import general from "../../public/images/general.png";
import other from "../../public/images/other.png";
import Link from "next/link";
import { motion } from "framer-motion";
const Resources = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-28">
                <motion.div className="mx-14 border-1 rounded-lg pt-4 shadow-3xl shadow-regalmagenta/50"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}>
                    <p className="text-center text-5xl pb-2 font-medium bg-clip-text text-transparent bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8">Recommended Resources</p>
                    <p className="text-center text-lg">Click the icons to explore helpful resources for lung cancer patients and their families</p>
                </motion.div>
                <motion.div className="mt-14 grid grid-cols-3 mx-32 place-items-center border-1 rounded-lg py-4 shadow-regalmagenta/50 shadow-3xl mb-8"
                initial={{y: -60, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}>
                    <div>
                        <Link href="https://www.lungcancerresearchfoundation.org/for-patients/patient-stories/">
                            <Image src={support.src} width={150} height={150} alt="support"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.mayoclinic.org/diseases-conditions/lung-cancer/symptoms-causes/syc-20374620">
                            <Image src={clip.src} width={150} height={150} alt="clip"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.cdc.gov/cancer/lung/basic_info/diagnosis_treatment.htm#:~:text=it%20has%20spread.-,People%20with%20non%2Dsmall%20cell%20lung%20cancer%20can%20be%20treated,doctors%20cut%20out%20cancer%20tissue">
                            <Image src={tech.src} width={150} height={150} alt="tech"/>
                        </Link>
                    </div>
                    <div className="text-center">
                        <div className="font-bold">Survivor Stories</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold">Symptoms & Causes</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold">Treatments</div>
                    </div>
                    <div className="pt-4">
                        <Link href="https://www.mskcc.org/cancer-care/types/lung/diagnosis/stages-lung">
                            <Image src={steps.src} width={125} height={125}  alt="lcf"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.cancer.org/">
                            <Image src={general.src} width={150} height={150} alt="nih"/>
                        </Link>
                    </div>
                    <div>
                        <Link href="https://www.cancer.gov/types">
                            <Image src={other.src} width={150} height={150} alt="nih"/>
                        </Link>
                    </div>
                    <div>
                        <div className="font-bold">Stages of Lung Cancer</div>
                    </div>
                    <div>
                        <div className="font-bold">Cancer: General Info</div>
                    </div>
                    <div>
                        <div className="font-bold">Other Types of Cancer</div>
                    </div>
                </motion.div>
                <Footer/>
            </div>
        </div>
    );
}
export default Resources;