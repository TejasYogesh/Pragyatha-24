import React from 'react'
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
const git = () => {
  const nav = useNavigate();
  const goBack = () => {
    nav(-1)
  }
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='h-[100vh]'>
        <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[90vh] md:h-[70vh] lg:h-[90vh] p-4 m-6'>
          <div className='p-10'><div className='text-pink-700 font-bold text-4xl lg:text-7xl px-4'>Git & GitHub Workshop.</div>
            <p className='text-white font-bold text-xl lg:text-[20px] p-6'>9:30 AM | 30th Nov to 1st Dec | Venue - Civil CAED Lab</p>

            <p className='text-white px-6'>The Git & GitHub Workshop unites

              visionary developers and creative designers to address real-world challenges
              . Participants engage in immersive, hands-on sessions to master Git for effective
              version control and GitHub for seamless collaboration. This dynamic platform
              fosters creativity, nurtures teamwork, and empowers innovators to transform bold
              ideas into groundbreaking solutions
              that can shape the future of the tech industry.</p>
           

            <button className='bg-white my-10 mx-4 px-10 py-4  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5n7rqZ_kdztm4ZUDWLybPtchLIFLn__vsPZCMcx5_RwgaZA/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
            <button className='bg-white mx-4 px-10 py-4' onClick={goBack}>Go Back</button>

          </div>

          <div className='mt-24 md:mt-2 lg:mt-10 mx-auto m-2 order-first md:order-last'>
            <div className='bg-white border-4 md:border-8 rounded-[20px]'>
              <img src="github.png" alt="" className='h-[30vh] md:h-[50vh] lg:h-[70vh] rounded-[20px]' />
            </div>
          </div>






        </div>

        <Footer />

      </div>
    </div>
  )
}

export default git
