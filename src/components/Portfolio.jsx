import React from 'react'
import reacimg from "../assets/react.png"
import mongoimg from "../assets/mongo.png"
import nodeimg from "../assets/node.png"
import expressimg from "../assets/express.png"

const Portfolio = () => {
    const list = [
        {id:1,
          name:reacimg,
          type:"React",
          
        },
        {id:2,
          name:mongoimg,
          type:"Mongo DB"
        },
        {id:3,
          name:nodeimg,
          type:"Node.js"
        },
        {id:4,
          name:expressimg,
          type:"Experess"
        }
]
  return (
    <div name="Portfolio" className='md:px-10 max-w-screen-2xl container mx-auto px-4 h-auto  '>
        <h2 className='text-3xl font-bold pb-4'>Portofolio</h2>
        <p className='underline text-xl '>Featured project</p>

        <div className='flex flex-col md:flex-row justify-between   h-auto mt-10'>
{ list.map(({id,name,type})=>(
            <div key={id} className='p-4 rounded-2xl shadow-md w-fit md:w-80 h-auto  cursor-pointer hover:scale-100'> 
            <img src={name} className='w- h-20 p-2 rounded-full border-2 border-white mb-5 shadow-md' />
            <p className='font-bold  text-xl mb-3'>{type}</p>
            <p className='mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt consequatur sed asperiores "</p>
            <div className='w-full flex justify-between'><button className='bg-blue-500 text-white p-2 rounded-[8px] font-bold text-xl cursor-pointer'>Video</button> <button className='bg-green-500 text-white p-2 rounded-[8px] font-bold text-xl cursor-pointer'>Source Code</button></div>
            </div>
          
        ))}
        </div>
        
    </div>
  )
}

export default Portfolio;