import React from 'react'
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
const Crackathon = () => {
    const nav = useNavigate();
    const goBack = () => {
        nav(-1);
    }
    return (

        <div className='bg-black'>
            <Navbar />
            <div className='h-[100vh]'>
                <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[90vh] md:h-[70vh] lg:h-[95vh] p-4 m-6'>
                    <div className='p-10'><div className='text-pink-700 font-bold text-4xl lg:text-8xl px-4'>Crackathon.</div>
                        <p className='text-white font-bold text-xl lg:text-[20px] p-6'>9:30 AM | 30th Nov to 1st Dec  | Training and Placement block</p>

                        <p className='text-white px-6 mb-1 md:mb-10 text-lg'>Crackathon is an exciting, fast-paced


                            event where tech enthusiasts, engineers, and problem-solvers compete
                            to create innovative solutions. This high-energy competition challenges
                            participants to think quickly and creatively under intense pressure, demanding
                            determination and collaboration. As they race against the clock, participants
                            push their limits, developing bold and groundbreaking
                            ideas that showcase their skills and ingenuity in technology.</p>


                        <button className='bg-white my-10 mx-4 px-10 py-4  hover:bg-pink-600 hover:text-white'><a href="https://forms.gle/PdDoePjnhUqDykQHA">Register Now</a></button>
                        <button className='bg-white mx-4 px-10 py-4' onClick={goBack}>Go Back</button>

                    </div>

                    <div className='mt-20 md:mt-4 mx-auto m-2 pt-4 md:pt-10 order-first md:order-last'>
                        <div className='bg-white border-4 md:border-8 rounded-[20px]'>
                            <img src="Crackathon.jpg" alt="" className='h-[30vh] md:h-[70vh] rounded-[20px]' />
                        </div>
                    </div>






                </div>

                <Footer />

            </div>
        </div>

    )
}

export default Crackathon
