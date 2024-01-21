"use client";
import React, { useCallback, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useDropzone } from 'react-dropzone';
import learningrate from '../../public/images/learningrate.png'
import Image from 'next/image';
import { motion } from "framer-motion";
const LungModel = () => {
    const [prediction, setPrediction] = useState(null);
    const [isPredicting, setIsPredicting] = useState(false);
    const [error, setError] = useState(null); // State to store error messages

    const onDrop = useCallback(async (acceptedFiles) => {
        setIsPredicting(true);
        setError(null); // Reset error state
        const file = acceptedFiles[0];

        // Create a FormData instance
        const formData = new FormData();
        formData.append('file', file);

        const readFileAsBase64 = (file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
          };

       const base64 = await  readFileAsBase64(file)

       console.log(base64)
        // POST to the server
        fetch('/api/predict', {
            method: 'POST',
            body: base64,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            setPrediction(data.prediction);
            setIsPredicting(false);
        })
        .catch(error => {
            console.error(`Error in prediction: ${error.message}`);
            setError(error.message); // Update error state
            setIsPredicting(false);
        });
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div className="lung-model-container bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
            <Navigation/>
            <div className='pt-28'>
                <motion.div className="mx-14 border-1 rounded-lg pt-4 shadow-3xl shadow-regalmagenta/50" 
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}>
                    <p className="text-center text-5xl pb-2 font-medium bg-clip-text text-transparent bg-gradient-to-b from-textpurple from-20% via-textmidpink via-80% to-textpink to-100% mt-2 hover:opacity-0.8">Lung Cancer Model</p>
                    <p className="text-center text-xl text-white">Protect your health! Upload your CT scan to confirm you don't have lung cancer!</p>
                </motion.div>
                <motion.div className='grid grid-cols-2 mb-8 gap-y-8 gap-x-48'
                initial={{y: -60, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                y: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}>
                    <div {...getRootProps()} className="dropzone col-span-2 text-center mt-8 border-1 mx-32 shadow-3xl shadow-regalmagenta/50 text-white">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p>Drop the CT scan image here ...</p> :
                            <p className='text-2xl font-bold mx-8 my-2 '>Click me to upload your CT scan</p>
                        }
                    </div>
                    {isPredicting && (
                        <div className='col-span-2 mx-32 border-1 shadow-3xl shadow-regalmagenta/50'>
                            <h2 className='text-white text-2xl text-center'>Processing...</h2>
                            <p className='text-white text-2xl text-center'>Please wait while the prediction is being processed.</p>
                        </div>
                    )}
                    {error && (
                        <div className='col-span-2 mx-32 border-1 shadow-3xl shadow-regalmagenta/50'>
                            <h2 className='text-white text-xl text-center pt-2'>An Error Occurred</h2>
                            <p className='text-white text-xl text-center'>{error}</p>
                        </div>
                    )}
                    {prediction !== null && (
                        <div className='col-span-2 mx-32 border-1 shadow-3xl shadow-regalmagenta/50 text-center text-white pt-2'>
                            <h2 className='text-xl'>Prediction Result:</h2>
                            <p className='text-xl'>{prediction ? 'Lung Cancer Detected' : 'No Lung Cancer Detected'}</p>
                        </div>
                    )}
                    <div className='border-1 rounded-xl ml-64 flex justify-center'>
                        <Image src={learningrate.src} width={250} height={250} alt="learning rate"/>
                    </div>
                    <div className='border-1 rounded-xl mr-48 text-sm text-white px-2 pb-2 pt-2 text-center'>
                        Using CT scans from the Iraq-Oncology Teaching Hospital/National Center for Cancer Diseases (Q_OTH/NCD) lung cancer dataset. This data was collected in the Fall of 2019 over 3 months, and includes healthy patients, patients with benign tumors, and patients with malignant tumors. 
                        With this dataset we were able to train our model to get a learning rate of 0.0075, ensuring our model’s prediction accuracy.
                    </div>
                </motion.div>
            </div>
            <Footer/>
        </div>
    );
}

export default LungModel;
