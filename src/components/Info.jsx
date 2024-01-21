"use client";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import ap from "../../public/images/ap.png";
import af from "../../public/images/af.png";
import benign from "../../public/images/benign.png";
import malignant from "../../public/images/malignant.png";
import normal from "../../public/images/normal.png";
import { motion } from "framer-motion";
const Info = () => {
    return(
        <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className="text-white pt-28">
                <div>
                    <motion.div className="mx-14 border-1 rounded-lg pt-4 shadow-3xl shadow-regalmagenta/50"
                    initial={{y: -40, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                    y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                    opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                    }}>
                        <p className="text-center text-5xl pb-2 font-medium bg-clip-text text-transparent bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8">Data Analysis</p>
                        <p className="text-center text-lg">Learn about other factors that can affect lung cancer & how to distinguish different types of lung cancer in CT scans!</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-3 place-items-center pt-8 mb-6"
                    initial={{y: -60, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                    y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                    opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                    }}>
                        <div className="shadow-3xl shadow-regalmagenta/50">
                            <Image src={ap.src} height={250} width={275} alt="ap"/>
                        </div>
                        <div className="text-center">
                            <div className="text-xl">In an effort to bring awareness to how lung cancer is related to characteristics such as age & air pollution, Lung Lens offers a look into datasets of lung cancer detection!</div>
                            <div className="mt-8">
                                <button>
                                    <Link className="bg-clip-text text-transparent bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8 font-bold" style={{ textDecoration: "none" }} href="https://www.kaggle.com/datasets/jillanisofttech/lung-cancer-detection">Click to check out the dataset we used!</Link>
                                </button>
                            </div>
                        </div>
                        <div className="shadow-3xl shadow-regalmagenta/50">
                            <Image src={af.src} height={275} width={275} alt="af"/>
                        </div>
                        <div className="shadow-3xl shadow-regalmagenta/50 mt-4">
                            <Image src={malignant.src} height={300} width={150} alt="malignant"/>
                        </div>
                        <div className="shadow-3xl shadow-regalmagenta/50 mt-4">
                            <Image src={normal.src} height={300} width={150} alt="normal"/>
                        </div>
                        <div className="shadow-3xl shadow-regalmagenta/50 mt-6">
                            <Image src={benign.src} height={300} width={150} alt="benign"/>
                        </div>
                        <div className="mt-2">
                            <div className="font-bold">Malignant Lung Cancer</div>
                        </div>
                        <div>
                            <div className="font-bold">Normal Lungs</div>
                        </div>
                        <div className="mt-3">
                            <div className="font-bold">Benign Lung Cancer</div>
                        </div>
                    </motion.div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default Info;