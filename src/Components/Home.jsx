
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#592a3b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-pink-500 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl md:6xl lg:7xl font-bold text-[#ccd6f6]'>
          SIDDHARTHAN DILEEP
        </h1>
        <h2 className='text-3xl sm:text-4xl md:5xl lg:6xl font-bold text-[#8892b0]'>
          I'm a Front End Developer.
        </h2>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;