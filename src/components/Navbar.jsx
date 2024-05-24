/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className=' mb-20 flex items-center justify-between py-6'>
        {/* logo */}
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="/" />
        </div>

        {/* links */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>

        </div>

    </div>
  )
}

export default Navbar