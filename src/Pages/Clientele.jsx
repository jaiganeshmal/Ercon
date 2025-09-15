import React, { useEffect, useState } from 'react'
import { clienteledata, header_IMG } from '../assets/Clienteledata'
import { motion } from 'framer-motion'

const Clientele = () => {

  let btn1 = clienteledata.slice(0, 20)
  let btn2 = clienteledata.slice(20, 40)
  let btn3 = clienteledata.slice(40, 60)
  let btn4 = clienteledata.slice(60, 80)
  let btn5 = clienteledata.slice(80, 100  )

  let [activeGroup, setActiveGroup] = useState(btn1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div 
        className='w-full h-[50vh] relative' 
        style={{ 
          backgroundImage: `url(${header_IMG})`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
      </div>

      <div className='w-full flex flex-col items-center p-14'>
        <div className='flex flex-wrap items-center md:justify-normal justify-between gap-6 '>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGroup(btn1)} 
            className='text-lg font-semibold px-6 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-gray-400 duration-300 '
          >
            Industries
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGroup(btn2)} 
            className='text-lg font-semibold px-6 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-gray-400 duration-300 '
          >
            Infrastructure
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGroup(btn3)} 
            className='text-lg font-semibold px-6 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-gray-400 duration-300 '
          >
            Telecom Sector
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGroup(btn4)} 
            className='text-lg font-semibold px-6 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-gray-400 duration-300 '
          >
            Health Sector
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveGroup(btn5)} 
            className='text-lg font-semibold px-6 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-gray-400 duration-300 '
          >
             Government sector
          </motion.button>
        </div>

        <motion.div
          className='w-full mt-16 flex flex-wrap gap-10 justify-center items-center '
          key={activeGroup[0]}  // ensures animation re-runs when group changes
        >
          {activeGroup.map((img, index) => (
            <motion.div
              key={index}
              className='clienteleBox py-4 px-10 bg-white '
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <img 
                src={img} 
                alt="clientele" 
                loading='lazy' 
                className='w-48 h-32 object-contain mix-blend-multiply ' 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Clientele
