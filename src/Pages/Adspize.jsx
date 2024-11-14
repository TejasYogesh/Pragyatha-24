import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Adspize = () => {
    const nav = useNavigate();
    const goBack = () => {

        nav(-1)
    }
    return (
        <div className='bg-black'>
            <Navbar />
            <div className='h-[100vh]'>
                <div className='border-4 lg:border-8 rounded-[30px] grid grid-cols-1 md:grid-cols-2 bg-black h-[85vh] md:h-[70vh] lg:h-[85vh] p-4 m-6'>
                    <div className='p-10'><div className='text-pink-700 font-bold text-6xl lg:text-6xl px-4'>Adspize.</div>
                        <p className='text-white font-bold text-xl lg:text-[20px] p-6 mb-1 md:mb-10'>29th November | 5:00PM | Venue - Basketball Court</p>

                        <p className='text-white text-md md:text-md px-6'>ADSPIZE is an inter-branch advertising competition where participants create captivating ads that
                            blend creativity with effective product promotion. Teams are challenged to develop innovative campaigns that resonate with audiences through storytelling
                            and strategic media.
                        </p>
                        <p className='text-white text-md px-6 my-1 md:my-4'>
                            This experience helps participants gain practical skills in branding, consumer psychology, and marketing while
                            aiming to leave a lasting impression on their target audience.
                        </p>



                        <button className='bg-white mx-4 px-10 py-4 my-10  hover:bg-pink-600 hover:text-white' onClick={goBack}>Go Back</button>

                    </div>

                    <div className='mt-20 md:mt-4 mx-auto m-2 order-first md:order-last'>
                        <div className='bg-white border-4 md:border-8 rounded-[20px]'>
                            <img src="testing.jpg" alt="" className='h-[30vh] md:h-[70vh] rounded-[20px]' />
                        </div>
                    </div>






                </div>

                <Footer />

            </div>
        </div>
    )
}

export default Adspize
