import React from 'react'
import ContactMe from './ContactMe'
import { FaGithub } from 'react-icons/fa6'
import { Socials } from '@/constants'
import { div } from 'framer-motion/client'
import Link from 'next/link'




const LandingPage = () => {
  return (
    
    <main 
    className='max-w-6xl mx-auto h-full border-2 border-transparent relative group'
    style={{ borderImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent) 1 100%'}}>
      <div className='px-12 mt-20 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4'>
        <div className='h-[30rem] rounded-3xl p-10 flex flex-col justify-between bg-[url("/assets/gradient-bg.jpg")] bg-cover shadow-xl'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-5xl font-semibold'>Hello, I am a Web Designer</h1>
          <p className='text-lg font-semibold text-neutral-800'>
          I'm passionate about designing and developing websites that merge creativity with functionality. With years of experience in the field, I specialize in crafting responsive, intuitive, and aesthetically pleasing digital experiences. Whether it's a simple landing page or a complex e-commerce platform, my goal is to deliver web solutions that are both visually engaging and user-centric.

          </p>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            {Socials.map((social, index) => (
              <div className={`rounded-lg p-1`} style={{ backgroundColor: social.bgColor }} key={index}>
                <Link href={social.href}>
                <social.icon size={30} className={`text-white hover:scale-105 duration-500 transition-all`}/>
                </Link>
              </div>
            ))}
          </div>

        <ContactMe />
        </div>
        </div>
        <div className='h-[30rem] rounded-3xl p-8 bg-cover transition-all duration-500 bg-no-repeat bg-center shadow-2xl' 
        style={{ backgroundImage: `url(/assets/profile.jpg)`}}></div>

      </div>

    </main>
  )
}

export default LandingPage