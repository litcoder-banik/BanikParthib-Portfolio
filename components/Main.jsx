import React from 'react'
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import TypeWriter from 'typewriter-effect'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Togather</p>

                <h1 className='py-4 text-gray-700'>Hi,  I'm <span className='text-[#5651e5]'>Parthib Banik</span></h1>

                <h1 className='py-2 text-[#ff4D41]'>
                <TypeWriter
                    options={{
                        strings: [
                            "Full Stack Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "Software Engineer",
                            "Machine Learning Engineer",
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true,
                        loop: true,
                    }}/>
                </h1>

                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    As an aspiring <b>Software developer</b> and <b>Machine Learning Engineer</b>, I'm committed to staying up-to-date with the latest technologies and using them to solve real-world problems.
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/parthib-banik-b3b189214/' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>

                    <a href='https://github.com/litcoder-banik' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>

                    <a href="mailto:banikparthib401@gmail.com">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>


                    <Link href='/resume.pdf' download='resume.pdf'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div> 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main