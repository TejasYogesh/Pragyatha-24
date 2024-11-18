import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom'
const uiux = () => {
  const nav = useNavigate();
  const goBack = () => {

    nav(-1)
  }
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='h-[100vh]'>
        <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[95vh] md:h-[70vh] lg:h-[90vh] p-4 m-6'>
          <div className='p-10'><div className='text-pink-700 font-bold text-6xl lg:text-6xl px-4'>UI/UX Hackathon.</div>
            <p className='text-white font-bold text-xl lg:text-[20px] p-6 mb-1 md:mb-8'>6:00PM | 29th to 30th Nov | Venue - IS Unix Lab</p>

            <p className='text-white px-6 '>An exhilarating 2-day UI/UX Hackathon, where creativity meets speed! Over 24 action-packed hours,
               participants will tackle unique problem statements and race against the clock to design interactive prototypes in Figma. You'll brainstorm,
                visualize, and craft intuitive user interfaces that bring your solution to life. 
               Get ready to prototype, present, and impress!</p>
            <p className='text-white px-6 my-1 md:my-8'>By the end, each team will pitch their prototypes to an expert judging panel, 
            competing for top honors in innovation and design.</p>

            <button className='bg-white my-1 md:my-10 mx-4 px-10 py-4  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSePvygDIo4lYZq7VeAHXJAl_riyy--CL6YVSJgf_qDFXvNdcg/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
            <button className='bg-white mx-4 px-10 py-4' onClick={goBack}>Go Back</button>

          </div>

          <div className='mt-20 md:mt-4 mx-auto m-2 order-first md:order-last'>
            <div className='bg-white border-4 md:border-8 rounded-[20px]'>
              <img src="uiux.jpg" alt="" className='h-[30vh] md:h-[70vh] rounded-[20px]' />
            </div>
          </div>






        </div>

        <Footer />

      </div>
    </div>
  )
}

export default uiux
