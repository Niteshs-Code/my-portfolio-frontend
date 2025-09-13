import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import image from "../assets/icon.png";
import {Link} from "react-scroll"


function Nav() {
    const [icon, seticon] = useState(false);
    const item = [
    {
        id:1,
        point:"Home"
    },
    {
        id:2,
        point:"About"
    },
    {
        id:3,
        point:"Portfolio"
    },{
        id:4,
        point:"Experince"
    },{
        id:5,
        point:"Contact"
    }

]
  return (
    <>
    <div className='md:px-10 max-w-screen-2xl container mx-auto px-4 shadow-md  z-10 bg-white' >
        <div className='flex justify-between  items-center h-18 '>
        <div className='flex gap-2 items-center'>
            <img src={image} alt="" className='w-13 h-13 rounded-full'/>
            <div><h1 className='text-2xl font-extrabold'>Nitesh<span className='text-green-500'>'s</span></h1>
            <p className='text-green-500 text-2xl'>portfolio</p></div>
            
        </div>
        <div >
            <ul className='hidden md:flex space-x-20 mr-20 '>
                {item.map(({id, point})=>(
                    <li key={id} className=' cursor-pointer hover:scale-105 duration-100 hover:text-blue-300'>
                        <Link to={point}
                        smooth={true}
                        duration={500}  
                        offset={-70}
                        activeClass='active'
                        >{point}</Link>
                        </li>
                    ))}

               
            </ul> 
            </div>

        <div onClick={()=>seticon(!icon)} className='md:hidden duration-1000'>{icon?<RxCross2 size={25}/>:<LuMenu size={25}/>}
            </div>
          </div>
       
       
        { icon && (
            <div className='w-full'>
            <ul className='md:hidden flex flex-col space-y-1 text-shadow-2xs text-xl justify-center  '>
                {item.map(({id, point})=>(
                    <li key={id} className=' cursor-pointer hover:scale-105 hover:text-blue-800 duration-200  w-full rounded-2xl text-center hover:bg-blue-100'> <Link to={point}
                        smooth={true}
                        duration={500}  
                        offset={-70}
                        activeClass='active'
                        >{point}</Link></li>
                    ))}
                </ul>
        </div>
        )}
    </div>
    

     
    </>
    
  )
}

export default Nav