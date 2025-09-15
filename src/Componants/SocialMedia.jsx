import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Loader from './Loader'

const SocialMedia = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='min-h-screen w-full my-10 flex flex-col md:flex-row justify-center md:items-stretch items-center gap-6'
      >
        <div className='w-full md:w-[40%] p-6 space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold'> Social Media </h1>
            <p className='text-gray-600'>
              Follow us on Social Media to get latest discounts, promotions & updates
            </p>
          </div>

          <div className='flex flex-col items-start '>
            {[
              { icon: FaFacebook, name: 'Facebook', color: 'text-blue-600' },
              { icon: FaTwitter, name: 'Twitter', color: 'text-gray-800' },
              { icon: FaInstagramSquare, name: 'Instagram', color: 'text-[#D73F8E]' },
              { icon: FaLinkedin, name: 'Linkedin', color: 'text-blue-800' },
            ].map(({ icon: Icon, name, color }) => (
              <div
                key={name}
                className='flex w-full justify-between items-center border-b-2 border-gray-200 py-6'
              >
                <div className={`flex items-center gap-1 font-semibold ${color}`}>
                  <Icon size={30} />
                  {name}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className='py-2 px-6 text-white font-semibold text-xl bg-black rounded-xl hover:bg-[#E65333] cursor-pointer duration-300'
                >
                  Follow
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[90%] md:w-[40%] h-[80vh] md:h-auto flex items-center justify-center bg-gray-100 rounded-xl '>
          <div className='flex flex-col items-center gap-6 '>
            <Loader />
            <div className='flex items-center gap-1'>
              <h1 className='text-2xl font-semibold'>Linkedin</h1>
              <FaLinkedin size={34} className='text-blue-800' />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SocialMedia
