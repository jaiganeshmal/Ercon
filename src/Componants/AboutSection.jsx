import React from 'react'
import { motion } from 'framer-motion';
import { images20, images21, images22 } from '../assets/global'
import { TiTick } from "react-icons/ti";
import { IoMdArrowForward } from "react-icons/io";

const AboutSection = () => {
    // Animation Variants
    const slideFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } }
    };

    const slideFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } }
    };

    return (
        <>
            <div className='min-h-screen w-full space-y-10 py-10'>

                {/* Section 1: Text slides from left, Image from right */}
                <motion.div
                    className='flex md:flex-row flex-col px-6 md:gap-0 gap-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className='md:w-[60%] flex flex-col md:justify-evenly justify-center md:gap-0 gap-4 items-start'
                        variants={slideFromLeft}
                    >
                        <h2 className='font-bold text-[#DB990A]'>ABOUT</h2>
                        <h1 className='text-4xl font-bold'>Our Engineering & Power Solutions: <br />
                            What We Do at ERCON Industries</h1>
                        <p className='text-gray-700 md:w-[90%] w-full text-justify'>
                            At ERCON Industries (Pvt.) Limited, we specialize in delivering integrated power distribution and energy solutions for industrial and infrastructure projects across Pakistan. As part of the ERCON Group with operations in the UAE and KSA since 2002, we bring global expertise to the local market with a strong focus on LV/MV switchgear, solar energy systems, and cable tray & sheet metal fabrication.
                        </p>
                        <p className='text-gray-700 md:w-[90%] w-full text-justify'>
                            Our manufacturing facility is equipped with advanced technology and driven by a skilled technical team committed to quality, safety, and performance. From powering critical systems to supporting energy transitions, we provide reliable and standards-compliant solutions that help clients build with confidence and scale with efficiency.
                        </p>
                        <button className='text-[#9B4EDC] hover:text-[#FF5C39] duration-200 cursor-pointer font-semibold'>
                            More Info
                        </button>
                    </motion.div>

                    <motion.div
                        className='md:w-[40%] w-auto md:h-[80vh]'
                        variants={slideFromRight}
                    >
                        <img src={images20} alt="image" loading='lazy' className='w-auto md:h-full rounded-2xl' />
                    </motion.div>
                </motion.div>

                {/* Section 2: Image slides from left, Text from right */}
                {/* <motion.div
                    className='w-full flex md:flex-row flex-col md:gap-0 gap-10 md:px-0 px-6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className='md:w-[50%] w-auto md:h-[80vh] '
                        variants={slideFromLeft}
                    >
                        <img src={images21} alt="image" className='w-auto md:h-full  md:rounded-r-2xl md:rounded-l-none rounded-2xl ' loading='lazy' />
                    </motion.div>

                    <motion.div
                        className='md:w-[50%] w-[90%] flex flex-col md:justify-evenly md:gap-0 gap-4 items-start md:p-10 mx-auto'
                        variants={slideFromRight}
                    >
                        <h2 className='font-bold text-[#9B4EDC]'>SERVICES</h2>
                        <h1 className='text-4xl font-bold'>Global Destinations <br />
                            We Serve</h1>
                        <p className='text-gray-800 w-full text-justify text-lg'>
                            We maintain a strong presence in different continents and countries to link global businesses with their trade goals.
                        </p>
                        <ul className='space-y-1'>
                            <li className="flex items-center text-gray-800 text-lg md:w-[90%] w-full">
                                <TiTick size={25} className='text-[#FF5C39]' />  Asia: Pakistan
                            </li>
                            <li className='flex items-start text-gray-800 text-lg md:w-[90%] w-full'>
                                <TiTick size={25} className='text-[#FF5C39]' />  Middle East: Bahrain, Saudi Arabia, Dubai, and more..
                            </li>
                        </ul>
                        <button className='text-[#9B4EDC] hover:text-[#FF5C39] duration-200 cursor-pointer font-semibold flex items-center gap-1'>
                            More Info <IoMdArrowForward size={18} />
                        </button>
                    </motion.div>
                </motion.div> */}

                {/* Section 3: Image slides from left, Text from right */}
                {/* <motion.div
                    className='w-full flex md:flex-row flex-col md:gap-0 gap-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className='md:w-[50%] w-auto md:h-[80vh]'
                        variants={slideFromLeft}
                    >
                        <img src={images22} alt="image" className='w-auto md:h-full' />
                    </motion.div>

                    <motion.div
                        className='md:w-[50%] w-[90%] flex flex-col justify-center gap-10 items-start md:p-10 mx-auto'
                        variants={slideFromRight}
                    >
                        <h2 className='font-bold text-[#9B4EDC]'>ABOUT</h2>
                        <h1 className='text-4xl font-bold'>Affordable, Best Quality <br />
                            Food for Your Customers</h1>
                        <p className='text-gray-800 w-full text-justify text-lg'>
                            We always care for our B2B clients by ensuring prompt and affordable delivery of freshly sourced food products such as Organic Jaggery, mangoes, saffron, and pulp at competitive rates.
                        </p>
                        <button className='text-[#9B4EDC] hover:text-[#FF5C39] duration-200 cursor-pointer font-semibold flex items-center gap-1'>
                            More Info <IoMdArrowForward size={18} />
                        </button>
                    </motion.div>
                </motion.div> */}
            </div>
        </>
    )
}

export default AboutSection;
