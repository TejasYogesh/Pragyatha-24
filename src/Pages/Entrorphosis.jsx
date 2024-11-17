import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Entrorphosis = () => {
    const nav = useNavigate();
    const goBack = () => {
        nav(-1)
    }
    return (
        <div className='bg-black'>
            <Navbar />
            <div className='h-[100vh]'>
                <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[90vh] md:h-[70vh] lg:h-[90vh] p-4 m-6'>
                    <div className='p-10'><div className='text-pink-700 font-bold text-6xl lg:text-8xl px-4'>Entrorphosis.</div>
                        <p className='text-white font-bold text-xl lg:text-[20px] p-6'>9:30 AM | 30th Nov to 1st Dec | Venue - EEE Seminar Hall</p>

                        <p className='text-white px-6 mb-1 md:mb-10'>ENTRORPHOSIS is a dynamic event
                            designed to ignite entrepreneurial thinking and enhance problem-solving skills.
                            It guides participants through five key stages: ideation, prototyping, pitching
                            , advertisement creation, and enterprise launching.</p>
                        <p className='text-white px-6'>This process fosters
                            creativity and cultivates a strong entrepreneurial mindset, equipping
                            individuals to effectively tackle real-world business
                            challenges and drive innovation in their endeavors</p>

                        <button className='bg-white my-10 mx-4 px-10 py-4 hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSdjdAPrkFGG9JHI2xwwNyeOgGoV-5-QhYqAV47V6RsHHe5Wbg/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
                        <button className='bg-white mx-4 px-10 py-4' onClick={goBack}>Go Back</button>

                    </div>

                    <div className='mt-20 md:mt-6 mx-auto m-2 order-first md:order-last'>
                        <div className='bg-white border-4 md:border-8 rounded-[20px]'>
                            <img src="entrorphosis.jpg" alt="" className='h-[30vh] md:h-[70vh] rounded-[20px]' />
                        </div>
                    </div>






                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Entrorphosis
