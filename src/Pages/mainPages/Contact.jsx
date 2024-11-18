import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar />

            <div className='main'>
                <motion.div className="bg-black text-center text-6xl md:text-8xl font-bold p-4 text-white"
                ><motion.p initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2
                    }}>Contact Us.</motion.p></motion.div>

                <div className="h-[100vh] bg-black grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="bg-black">
                        <div className="bg-white m-32 h-[20vh] md:h-[30vh] rounded-xl grid grid-rows-2">

                            <div>
                                <div className="bg-pink-600 text-center m-4 rounded-xl p-10 text-white text-4xl">Anagha</div>
                            </div>
                            <p className='text-center text-2xl m-12'><span>Ph No : </span>7019622295</p>
                        </div>
                    </div>
                    <div className="bg-black">
                        <div className="bg-white m-32 h-[20vh] md:h-[30vh] rounded-xl grid grid-rows-2">

                            <div>
                                <div className="bg-pink-600 text-center m-4 rounded-xl p-10 text-white text-4xl">Fahad</div>
                            </div>
                            <p className='text-center text-2xl m-12'><span>Ph No : </span>7019726877</p>
                        </div>
                    </div>



                    <div className='text-white bg-black px-4 text-center col-span-1 lg:col-span-3'>
                        <div className='bg-pink-700 my-6 p-4 rounded-xl text-xl font-bold hover:bg-white hover:text-black'><a href="RuleBook/Rulebook.pdf" target='_blank'>Download Official Pragyatha Rulebook 2k24</a></div>
                        <div className='bg-pink-700 my-6 p-4 rounded-xl text-xl font-bold  hover:bg-white hover:text-black'><a href="http://meriise.org/">Contact Us through ME-RIISE Official Website</a></div>
                        {/* <div className='bg-pink-700 my-6 p-4 rounded-xl text-xl font-bold'>Malnad College of Engineering - Hassan</div>  */}
                    </div>

                </div>
                <div className='text-white bg-black p-2 text-center col-span-1 lg:col-span-3'>
                    <div className='bg-white w-full h-2 rounded-2xl'></div>
                    <Footer />
                </div>



            </div>





        </div>
    )
}

export default Contact
