import React from 'react'
import Nodejs from '../assets/nodejs.png';
import Typescript from '../assets/typescript.png';
import Mysql from '../assets/mysql.png';


function Learning() {
  return (
    <>
    <div className='w-full bg-[#592a3b] text-gray-300 flex flex-col'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
              <p className='py-4'>// Technologies I'm currently learning</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nodejs} alt="HTML icon" />
                  <p className='my-4'>Node.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Learning