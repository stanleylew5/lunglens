"use client";
import Navigation from "./Navigation";
import React, { useState } from 'react';

const FileUploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Update state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform file upload logic here (e.g., send file to server)
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // You can implement your file upload logic here, such as using APIs or libraries
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

const LungModel = () => {
  return (
    <div className="bg-gradient-to-b from-regalblack from-0% via-regalblack via-75% to-regalpurple to-100% h-screen">
      <Navigation />
      <div className="text-white">Lung Cancer Model</div>
      <div className="text-white pt-36">
        <div className="grid grid-cols-2 mx-12">
          <div className="bg-red-500">
            <FileUploadSection /> {/* Use FileUploadSection here */}
          </div>
          <div className="bg-blue-500">test</div>
          <div className="bg-orange-500">test</div>
          <div className="bg-yellow-500">test</div>
        </div>
      </div>
    </div>
  );
};

export default LungModel;
