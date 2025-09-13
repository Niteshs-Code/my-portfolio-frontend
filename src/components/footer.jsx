import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

const footer = () => {
  return (
    <>
    <div name="footer" className='md:px-10 max-w-screen-2xl container mx-auto px-4 bg-gray-200 p-5 '>
        <div className='flex flex-col justify-center items-center'>
           <div className='flex gap-5 text-xl mb-4'>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
            <FaLinkedin/>
           </div>
           <hr className='text-gray-500 w-50 m-2 font-bold mb-4'/>
           <p className='font-medium'>&copy; 2025 My Portfolio 2025. All rights reverved.</p>
           <p className='font-medium'>always be supportive.🤝</p>
        </div>
    </div>
    </>
  )
}

export default footer