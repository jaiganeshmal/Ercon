import React from "react";
import { LuDownload } from "react-icons/lu";

const DownloadDocument = () => {
  return (
    <>
      <div className="w-full h-auto bg-gray-100 py-10 md:py-20 px-10 md:px-20 lg:px-32 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Download Documents</h1>
        <p className="mb-4 text-gray-800 lg:w-3/4 text-justify md:text-center">Since 1978, Bilal Switchgear Enginerring PVT. LTD has been a pioneer in the manufacturing of MV and LV switchgear in Pakistan. As a licensed manufacturer of ABB switchgear, we operate  state-of-art production facilities equipped with CNC and laser cutting machines, ensuring precisions and efficiency.</p>
        <div className="w-full flex md:flex-row flex-col justify-evenly items-center gap-10 mt-6 ">
          <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 duration-200">
            <LuDownload className="size-28 text-gray-800" />
            <p className="text-xl font-semibold cursor-pointer hover:text-blue-800">Company Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 duration-200">
            <LuDownload className="size-28 text-gray-800" />
            <p className="text-xl font-semibold cursor-pointer hover:text-blue-800">Product Catalog</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 duration-200">
            <LuDownload className="size-28 text-gray-800" />
            <p className="text-xl font-semibold cursor-pointer hover:text-blue-800">Company Manual</p>
          </div>
        </div>
     </div>
    </>
  );
};

export default DownloadDocument;
