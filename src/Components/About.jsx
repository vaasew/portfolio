import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#592a3b] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi! I'm a passionate web developer who is all in for problem hunting and solving.</p>
            </div>
            <div>
              <p className="text-lg">I've worked with various front end technologies ranging from React, RTK to TailwindCSS. I'm currently working towards learning backend technologies to create powerful full-stack applications. <u className="decoration-pink-600 decoration-2">I'm open for internship opportunites in the front end domain</u> to accelerate my learning and gain industrial development experience. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;