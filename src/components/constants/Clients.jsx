import React from 'react'
import { niceplate, porky } from '../../assets'
import { motion } from "framer-motion";


const Clients = () => {
  return (
    <motion.div className='w-full lg:flex-none flex justify- bg-[#F1E7FD]'>
        <div className='inline-flex gap-20 p-12'>
            <img src={porky} alt="" className='lg:w-48 w-32 ' />
            <img src={niceplate} alt="" className='lg:w-56 w-40' />
        </div>
      
    </motion.div>
  )
}

export default Clients
