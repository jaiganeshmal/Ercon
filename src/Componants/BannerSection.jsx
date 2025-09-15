import React, { useState } from 'react'
import { images23 } from '../assets/global'
import { FaPlay } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
}

const playButtonVariants = {
  hover: { scale: 1.1, rotate: 10, transition: { yoyo: Infinity, duration: 0.5 } },
  tap: { scale: 0.95 },
}

const BannerSection = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className='relative w-full h-[50vh] md:h-screen flex justify-center items-center'
        style={{
          backgroundImage: `url(${images23})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center ',
        }}
      >
        <motion.button
          onClick={() => setOpen(true)}
          className='bg-gray-200 inline-block p-6 rounded-full cursor-pointer '
          variants={playButtonVariants}
          whileHover='hover'
          whileTap='tap'
          aria-label='Play Video'
        >
          <FaPlay className='text-blue-600 size-8' />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              onClick={() => setOpen(false)}
              className='absolute inset-0 w-full  h-[50vh] md:h-screen bg-black/20 backdrop-blur-xs flex justify-center items-center'
              variants={backdropVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className='w-[80%] h-[40vh] md:h-[80vh] rounded-md'
                variants={modalVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
              >
                <div
                  onClick={() => setOpen(false)}
                  className='absolute md:top-4 md:right-4 top-2 right-2 text-white cursor-pointer '
                >
                  <MdClose className='size-6 md:size-10 ' />
                </div>
                <iframe
                  src='https://www.youtube.com/embed/qh3NGpYRG3I?si=--3-o2rx-AG_-iDv'
                  title='YouTube video player'
                  frameBorder='0'
                  allowFullScreen
                  className='h-full w-full rounded-md'
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default BannerSection
