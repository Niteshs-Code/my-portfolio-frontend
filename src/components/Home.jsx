import React from 'react'
import photo from "../assets/icon.png"
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa6';
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";






function Home() {
    return (
        <>
            <div name="Home" className=' flex flex-col md:flex-row md:px-10 max-w-screen-2xl container mx-auto px-4 py-10'>
                <div className='md:w-1/2 order-2'>
                    <div className='pt-20 md:pb-20'>
                        <p className='text-2xl font-bold text-center md:text-left md:pl-5'>Welecome in my Portfolio</p>
                        <h2 className='font-bold text-4xl text-center md:text-left md:pl-5'>Hello I'm a <br /><span className='text-red-500'><ReactTyped strings={["web Developr", "Good progrmar"]} typeSpeed={40} backSpeed={50} loop ></ReactTyped></span></h2>
                        <br />
                        <p className='text-center p-5 pt-1 md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis consequuntur dicta nihil quo libero doloremque beatae aliquid atque cumque exercitationem ipsa eos iste, placeat distinctio voluptatem deleniti accusamus sapiente quidem possimus! Dolorum eligendi nostrum recusandae numquam doloribus enim dignissimos minima reiciendis!</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className=''>
                            <p className='text-shadow-black font-bold md:text-xl text-center shadow-md'>Availabe on </p>
                            <span className='flex md:flex-row gap-10 py-5 text-3xl md:gap-10 md:text-xl pb-30 md:pb-0 '>
                                <a href="" className='text-blue-700 bg-white rounded-full p-2 hover:shadow-lg hover:scale-105'><FaTelegramPlane /></a>
                                <a href="" className='text-blue-500 bg-white rounded-full p-2 hover:shadow-lg hover:scale-105'><FaLinkedin /> </a>
                                <a href="" className='text-blue-800 bg-white rounded-full p-2 hover:shadow-lg hover:scale-105'><FaTwitterSquare /></a>
                                <a href="" className='text-blue-800 bg-white rounded-full p-2 hover:shadow-lg hover:scale-105'><FaFacebook /></a>
                            </span>
                        </div>
                        <div className=''>
                            <p className='text-shadow-black font-bold md:text-xl text-center shadow-md '  >currently workin on</p>
                            <span className='md:flex md:gap-11 md:flex-row py-10 gap-14 md:py-4 grid grid-cols-2 text-5xl md:text-3xl pb-30 md:pb-0'>
                                <a href="" className='text-blue-500 p-2 hover:shadow-lg hover:scale-105 md:mx-0 md:my-0 mx-7 my-2'><FaReact /></a>
                                <a href="" className='text-green-800 p-2 hover:shadow-lg hover:scale-105 md:mx-0 md:my-0 mx-7 my-2'><IoLogoNodejs /></a>
                                <a href="" className='text-green-900 p-2 hover:shadow-lg hover:scale-105 md:mx-0 md:my-0 mx-7 my-2'><SiMongodb /></a>
                                <a href="" className='text-blue-600 p-2 hover:shadow-lg hover:scale-105 md:mx-0 md:my-0 mx-7 my-2'><GrMysql /></a>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='md:w-1/2  order-1 md:order-2 flex justify-center items-center' >
                    <img src={photo} alt="My image" className='md:w-[400px] md:h-[400px] w-50 h-50 rounded-full p-2 md:mt-20 md:ml-40 my-6 border-blue-50 ' />

                </div>

            </div>

        </>
    )
}

export default Home

{/*
            
            <

            <FaGitAlt /><IoLogoJavascript /><TiHtml5 /><DiCss3 />
           <FaDatabase /> */}