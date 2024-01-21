"use client";
import { motion } from "framer-motion";
const Footer = () => {
    return(
        <motion.div className="text-white text-center bottom-0" 
        initial={{y: -40, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
        y: {type: 'tween', ease: 'easeOut', duration: 1.4},
        opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
        }}>
            &copy; Made with Love by Team Lung Lunatics ♡
        </motion.div>
    );
}
export default Footer;