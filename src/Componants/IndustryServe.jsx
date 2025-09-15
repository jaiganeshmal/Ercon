import React from 'react'
import { motion } from 'framer-motion'
// import { productAssets } from '../assets/global'

const IndustryServe = () => {
    return (
        <>
            <div className='w-full p-10'>

                <motion.div
                    className='flex flex-col justify-center gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='flex items-center gap-2 mx-auto'>
                        {/* <img src={productAssets.images43} alt="icon" loading='lazy' className='size-8' /> */}
                        <h1 className='text-4xl font-bold'> We Serve</h1>
                    </div>
                    {/* <p className='text-gray-600 text-center'>
                        We specialize in importing and exporting a wide range of products across multiple industries.
                    </p> */}
                </motion.div>

                <div className=' py-10  flex flex-wrap lg:justify-start justify-center  items-center lg:gap-x-6 lg:gap-y-8 gap-10 ' >
                    <motion.div
                        className='h-56  md:w-56 w-full text-center bg-gray-100 p-4 rounded-xl flex flex-col justify-center items-center space-y-2 '
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className='text-3xl md:text-2xl font-bold text-gray-800'>Industries</h1>
                        {/* <p className='text-gray-700 text-center'>Fresh fruits, vegetables, and spices exported worldwide.</p> */}
                    </motion.div>
{/* h-60 md:w-72 sm:w-96 */}
                    <motion.div
                        className='h-56  md:w-56 w-full text-center flex-shrink-0 bg-gray-100 p-4 rounded-xl flex flex-col justify-center items-center space-y-2 '
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h1 className='text-3xl md:text-2xl  font-bold text-gray-800'>Infrastructure</h1>
                        {/* <p className='text-gray-700 text-center'>Premium quality garments, leather products, and fabrics.</p> */}
                    </motion.div>

                    <motion.div
                        className='h-56  md:w-56 w-full text-center bg-gray-100 p-4 rounded-xl flex flex-col justify-center items-center space-y-2 '
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h1 className='text-3xl md:text-2xl font-bold text-gray-800'>Telecom Sector</h1>
                        {/* <p className='text-gray-700 text-center'>Power Your Passion with Premium Sports Products.</p> */}
                    </motion.div>

                    <motion.div
                        className='h-56  md:w-56 w-full text-center bg-gray-100 p-4 rounded-xl flex flex-col justify-center items-center space-y-2 '
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h1 className='text-3xl md:text-2xl font-bold text-gray-800'>Health Sector</h1>
                        {/* <p className='text-gray-700 text-center'>Support your healthcare services with premium tools.</p> */}
                    </motion.div>

                    <motion.div
                        className='h-56  md:w-56 w-full bg-gray-100 p-4 rounded-xl flex flex-col justify-center items-center space-y-2 '
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h1 className='text-3xl md:text-2xl font-bold text-gray-800 text-center'> Government sector </h1>
                        {/* <p className='text-gray-700 text-center'>Support your healthcare services with premium tools.</p> */}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default IndustryServe
