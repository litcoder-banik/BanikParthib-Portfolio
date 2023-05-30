import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-[#ecf0f3] fixed w-full h-20px shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src={"/../public/assets/navLogo.png"} alt='navlogo' width={"125"} height={"40"} className='select-none' style={{ WebkitUserDrag: 'none' }}/>

            <div>
                <ul className='hidden md:flex'>
                    <Link href={"/"}>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#ff4D41] hover:border-[#ff4D41]'>Home</li>
                    </Link>

                    <Link href={"/#about"}>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#ff4D41] hover:border-[#ff4D41]'>About</li>
                    </Link>

                    <Link href={"/#skills"}>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#ff4D41] hover:border-[#ff4D41]'>Skills</li>
                    </Link>

                    <Link href={"/#projects"}>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#ff4D41] hover:border-[#ff4D41]'>Projects</li>
                    </Link>

                    <Link href={"/#contact"}>
                        <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#ff4D41] hover:border-[#ff4D41]'>Contact</li>
                    </Link>
                </ul>

                <div onClick={handleNav} className='md:hidden '>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
            <div className={
                nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={"/../public/assets/navLogo.png"} alt='/' width={87} height={35} className='select-none' style={{ WebkitUserDrag: 'none' }}/>

                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>

                    <div className='pl-8 border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%]'>Let's build something togather</p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href={"/"}>
                            <li className='py-4 text-sm hover:text-[#ff4D41] hover:border-b-2 hover:border-[#ff4D41]'>Home</li>
                        </Link>

                        <Link href={"/#about"}>
                            <li className='py-4 text-sm hover:text-[#ff4D41] hover:border-b-2 hover:border-[#ff4D41]'>About</li>
                        </Link>

                        <Link href={"/#skills"}>
                            <li className='py-4 text-sm hover:text-[#ff4D41] hover:border-b-2 hover:border-[#ff4D41]'>Skills</li>
                        </Link>

                        <Link href={"/#projects"}>
                            <li className='py-4 text-sm hover:text-[#ff4D41] hover:border-b-2 hover:border-[#ff4D41]'>Projects</li>
                        </Link>

                        <Link href={"/#contact"}>
                            <li className='py-4 text-sm hover:text-[#ff4D41] hover:border-b-2 hover:border-[#ff4D41]'>Contact</li>
                        </Link>
                    </ul>

                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>

                        <div className='flex items-center justify-between my-4 w-fullsm:w-[80%]'>
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
        </div>
    </div>
  )
}

export default Navbar