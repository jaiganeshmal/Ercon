import React from 'react';
import { motion } from 'framer-motion';
import { images6, images7 } from '../assets/global';

const Intro = () => {
    return (
        <motion.div
            className='min-h-[80vh] w-full flex flex-col items-center gap-6 md:py-20 py-10'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            {/* Flags Image */}
            {/* <motion.img
                src={images5}
                alt="Flags"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
            /> */}

            {/* Heading + Animation GIF */}
            <motion.div
                className='flex items-end'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.0 }}
            >
                <motion.h1
                    className='relative text-4xl md:text-6xl font-bold tracking-wide'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                >
                    Supplying Goods <br />
                    Across the Globe
                    <motion.img
                        src={images7}
                        alt=""
                        className='md:max-w-3xl absolute top-[40%] right-0 -z-10'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.6 }}
                    />
                </motion.h1>

                <motion.img
                    src={images6}
                    alt="gif"
                    className='size-16 md:size-20'
                    initial={{ opacity: 0, rotate: -15 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 1.8 }}
                />
            </motion.div>

            {/* Paragraph */}
            <motion.p
                className='lg:w-[55%] md:w-[80%] w-[90%] md:text-lg text-justify font-semibold text-gray-600'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 2.1 }}
            >
                At ERCON Industries, we power progress through innovation in switchgear technology! From advanced Ring Main Units (RMUs) and Vacuum Circuit Breakers (VCBs) to customized electrical panels, we deliver cutting-edge power solutions with precision, reliability, and efficiency.
            </motion.p>
        </motion.div>
    );
};

export default Intro;
