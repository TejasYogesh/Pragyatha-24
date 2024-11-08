import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Cyber = () => {

  const nav = useNavigate();
  const goBack = () => {

    nav(-1)
  }
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='h-[100vh]'>
        <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[95vh] md:h-[70vh] lg:h-[90vh] p-4 m-6'>
          <div className='p-10'><div className='text-pink-700 font-bold text-4xl lg:text-6xl px-4'>Cyber Security & Ethical Hacking.</div>
            <p className='text-white font-bold text-xl lg:text-[20px] p-6'>9:30 AM | 30th Nov to Dec 1st | Venue - Electrical Lab</p>

            <p className='text-white px-6 text-xl'>The Cybersecurity and Ethical Hacking 

              Workshop is a 2-day intensive program designed to enhance skills in
              safeguarding digital assets. Participants will learn about the latest cyber
              threats, defensive strategies, and practical techniques for protecting
              sensitive information. Engaging in real-world scenarios, they will grasp
              ethical hacking principles and methods to detect and prevent security
              breaches
              , staying ahead in the evolving cybersecurity landscape</p>
            <br />

            <button className='bg-white my-4 mx-4 px-10 py-4 hover:bg-pink-600 hover:text-white'><a href="https://forms.gle/1wiFX4KA63vxt3ja6">Register Now</a></button>
            <button className='bg-white mx-4 px-10 py-4' onClick={goBack}>Go Back</button>

          </div>

          <div className='mt-20 md:mt-8 mx-auto m-2 order-first md:order-last'>
            <div className='bg-white border-4 md:border-8 rounded-[20px]'>
              <img src="cyberdated.png" alt="" className='h-[30vh] md:h-[70vh] rounded-[20px]' />
            </div>
          </div>






        </div>

        <Footer />

      </div>
    </div>
  )
}

export default Cyber
