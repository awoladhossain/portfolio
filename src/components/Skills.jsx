/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import Html from '../assets/html.png'
import Css from '../assets/css.png'
import firebase from '../assets/firebase.png'
import boostrap from '../assets/bootstrap.png'
import github from '../assets/github.png'
import aws from '../assets/aws.png'
import mongodb from '../assets/mongo.png'
import nodejs from '../assets/node.png'
import reactjs from '../assets/react.png'
import typescript from '../assets/typescript.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full sm:h-80 md:h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Css} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactjs} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={nodejs} alt="HTML icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongodb} alt="HTML icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto' src={firebase} alt="HTML icon" />
                        <p className='my-4'>FIREBASE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={boostrap} alt="HTML icon" />
                        <p className='my-4'>BOOTSTRAP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt="HTML icon" />
                        <p className='my-7'>TYPESCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={aws} alt="HTML icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;