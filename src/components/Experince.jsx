import React from 'react'
import htmlimg from "../assets/html.png"
import jsimg from "../assets/js.jpg"
import cssimg from "../assets/css.png"
import sqlimg from "../assets/sql.png"

const Experince = () => {
  return (
    <>
    <div name="Experince" className='  md:px-10  max-w-screen-2xl container mx-auto px-4 shadow-md'>
            <h2 className=' text-3xl sm:2xl md:2xl lg:2xl font-bold pb-1 italic my-4 mt-14'>Expereince</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni dolorum minus vero dolores. Quidem praesentium nostrum et quis ipsum perferendis magnam sapiente eius commodi amet, temporibus doloremque</p>
            <div className='flex md:flex-row flex-col gap-y-5 justify-between items-center mt-4 mb-4 '>
                <img src={htmlimg} className='w-50 h-50 m-3 border-2 border-white ' />
                <img src={jsimg} className='w-50 h-50 m-3 border-2 border-white' />
                <img src={cssimg} className='w-50 h-50 m-3 border-2 border-white' />
                <img src={sqlimg} className='w-50 h-50 m-3 border-2 border-white' />
                
            </div>
        </div>
    </>
  )
}

export default Experince;