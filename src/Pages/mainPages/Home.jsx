import React from 'react'
import Timer from '@/components/ui/Timer'
import Logo from '@/components/ui/Logo'
import EventHome from './EventHome'
import Footer from '@/components/Footer'
import Scroll from '@/components/ui/Scroll'
import '../cssFiles/font.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TypewriterComponent from 'typewriter-effect'
import Navbar from '@/components/Navbar'
const Home = () => {
    return (
        <div>
            <Scroll />
            <Navbar />


            {/* -------------------------------Main Screen-------------------------------------------- */}
            <div className='frontPage bg-black py-[50%] md:py-32 px-10 h-[90vh]'>
                <div className='w-[90vw] md:w-[50vw]'>
                    <p className='text-white leading-[5px] mx-1'>ME-RIISE FOUNDATION Presents</p>
                    <p className='text-white text-[40px] md:text-[60px] lg:text-[120px] font-bold  leading-tight shadow-text-2xl'> <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Pragyatha'24")
                                .pauseFor(1000)

                                .start();
                        }}
                    /></p>
                    <p className='text-white leading-tight text-right'>Proclaim Your Potential</p>
                    <Logo />
                </div>
                <div className='text-center text-white mt-64 md:mt-32 font-bold text-[25px]'>
                    <Timer />
                </div>
            </div>
            {/* -------------------------------Main Screen--------------------------------------------- */}

            <div>
                <EventHome />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home
