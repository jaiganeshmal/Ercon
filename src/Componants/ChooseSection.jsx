import React from 'react';
import { motion } from 'framer-motion';
import { choseSection } from '../assets/global';

const ChooseSection = () => {
    return (
        <motion.div
            className='min-h-screen w-full md:py-20 py-10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
        >
            {/* Heading */}
            <motion.h1
                className='text-5xl font-bold text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Why <span className='text-[#F46100]'>Choose</span> Us
            </motion.h1>

            {/* Cards Container */}
            <motion.div
                className="mt-10 flex flex-col md:flex-row md:gap-4 gap-10 md:w-full w-[90%] mx-auto md:px-4 px-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {/* Cards */}
                {choseSection.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col flex-1 shadow-2xl hover:-translate-y-2 duration-300 hover:border-t-4 hover:border-[#2969C5] rounded-lg md:py-4 md:px-4 py-10 px-4 items-center gap-2 min-h-[300px] bg-white"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                    >
                        <motion.img
                            src={item.image}
                            alt="icon"
                            className="size-56 mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 0.5 }}
                        />
                        <h1 className="font-bold text-2xl text-center">{item.title}</h1>
                        <p className="text-gray-600 font-semibold text-justify flex-grow">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ChooseSection;
