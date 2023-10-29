/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import imgs from '../assets/IMG-20220302-WA0004.jpg';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full min-h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-4 md:px-8 flex flex-col justify-center min-h-screen'>
                <div className='flex flex-col md:flex-row md:space-x-4 gap-5'>
                    <div className='flex-shrink-0'>
                        <img src={imgs} className='w-48 h-48' alt='my Image' />
                    </div>
                    <div className='mt-4 md:mt-0'>
                        <p className='text-pink-600'>Hi, my name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Awolad Hossain</h1>
                        <h2 className='text-3xl font-bold text-[#8892b0]'>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    ' I am a Full Stack Developer',
                                    1000,
                                    'I am a Professional Coder.',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
                        </p>
                    </div>
                </div>
                <div className='mx-56'>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-600'>
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
