import React from 'react'
import { motion } from 'framer-motion'
import Rating from '@/components/Rating'
import '../cssFiles/Events.css'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom'
const Events = () => {
  return (

    <div>

      <div className='bg-black'>
        <div className='text-[50px] lg:text-[120px] text-center font-bold text-white p-20'><p>Events.</p></div>

        <div>



          <section className="education" id="education">

            <div className="timeline-items">




              <div className="timeline-item">
                <div className="timeline-dot"> </div>
                <div className="timeline-date">01</div>
                <div className="timeline-content">
                  <h3 className='font-bold'>Adspize</h3>
                  <p>Adspize is an advertising competition where participants create impactful advertisements blending creativity and
                    product promotion.
                  </p>
                  <div className='my-8'>
                    <Link to="/adspize" className='know bg-white p-4 my-4 rounded-xl hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>


              </div>


              {/* <!-------------------------------------------------------- Timeline - item2 -------------------------------------------------------------> */}

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">02</div>
                <div className="timeline-content">
                  <h3 className='font-bold'>UI/UX Hackathon</h3>
                  <p>This 24-Hour UI/UX hackathon fosters innovation,collaboration,showcases skill,exploring new design frontiers</p>
                  <div className='my-8'>
                    <Link to="/Uiux" className='bg-white p-4 my-4 rounded-xl  hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>

              </div>



              {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">03</div>
                <div className="timeline-content">
                  <h3 className='font-bold'>Crackathon</h3>
                  <p>A Crackathon is a competition for tech enthusiasts solving complex puzzles through debugging and reverse engineering.</p>
                  <div className='my-8'>
                    <Link to="/crackathon" className='bg-white p-4 my-4 rounded-xl  hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>

              </div>


              {/* <!-------------------------------------------------------- Timeline - item3 -------------------------------------------------------------> */}

              <div className="timeline-item">
                <div className="timeline-dot"> </div>
                <div className="timeline-date">04</div>
                <div className="timeline-content">
                  <h3 className='entror font-bold'>Entrorphosis</h3>
                  <p>Entrorphosis ignites entrepreneurial insights, sharpens skills, and
                    fosters innovation, cultivating a growth-focused mindset.
                  </p>
                  <div className='my-8'>
                    <Link to="/entrorphosis" className='bg-white p-4 my-4 rounded-xl  hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>

              </div>


              {/* <!-------------------------------------------------------- Timeline - item4 -------------------------------------------------------------> */}


              <div className="timeline-item">
                <div className="timeline-dot"> </div>
                <div className="timeline-date">05</div>
                <div className="timeline-content">
                  <h3 className='font-bold'>GitHub Workshop</h3>
                  <p>Git & GitHub Workshop unites developers to solve challenges, learn, collaborate,and innovate in technology.</p>
                  <div className='my-8'>
                    <Link to="/git" className='bg-white p-4 my-4 rounded-xl  hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>

              </div>


              {/* <!-------------------------------------------------------- Timeline - item5 -------------------------------------------------------------> */}

              <div className="timeline-item">
                <div className="timeline-dot"> </div>
                <div className="timeline-date">06</div>
                <div className="timeline-content">
                  <h3 className='font-bold'>Cyber Security && Ethical Hacking </h3>
                  <p>Cyber Security and Ethical Hacking , This Workshop enhances cybersecurity skills, covering
                    threats, defenses , and ethical hacking techniques for protection.
                  </p>
                  <div className='my-8'>
                    <Link to="/cyber" className='bg-white p-4 my-4 rounded-xl  hover:bg-pink-600 hover:text-white'>Know more</Link>
                  </div>
                </div>

              </div>







            </div>
          </section>

          <div className='whats text-white'>
            <p className='text-[50px] lg:text-[100px] font-bold p-10'>What's <span className='text-pink-700'>New:</span></p>
            <div className='newEvents px-10'>
              <p className='text-[40px] lg:text-[90px] font-bold text-pink-700'>01.</p>
              <p className='text-[30px] lg:text-[50px] font-bold'>CRACKATHON</p>
              <p className='text-[10px] lg:text-[30px] font-bold'>9:30 AM | 30th Nov to 1st Dec | Venue - Training and Placement block</p>
              <p className='justify-center'>Crackathon is an exciting, fast-paced


                event where tech enthusiasts, engineers, and problem-solvers compete
                to create innovative solutions. This high-energy competition challenges
                participants to think quickly and creatively under intense pressure, demanding
                determination and collaboration. As they race against the clock, participants
                push their limits, developing bold and groundbreaking
                ideas that showcase their skills and ingenuity in technology.</p>
              <button className='my-10 p-5 bg-white text-black  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSfrHAzxqx66082mvVCorpkf8WQYBX5HvxdPZjxaiKLZ1Jl3DQ/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
            </div>

            <br />
            <div>
              <div className='bg-white w-full h-2'></div>
            </div>
            {/* <div className='w-[99vw] h-[10px] bg-pink-700 text-center items-center'></div> */}


            <div className='newEvents2 px-10'>
              <p className='text-[40px] lg:text-[90px] font-bold text-pink-700'>02.</p>
              <p className='text-[30px] lg:text-[50px] font-bold'>GIT && GITHUB WORKSHOP</p>
              <p className='text-[10px] lg:text-[30px] font-bold'>9:30 AM | 30th Nov to 1st Dec | Venue - Civil CAED Lab</p>
              <p className='justify-center'>The Git & GitHub Workshop unites

                visionary developers and creative designers to address real-world challenges
                . Participants engage in immersive, hands-on sessions to master Git for
                effective version control and GitHub for seamless collaboration. This
                dynamic platform fosters creativity, nurtures teamwork, and empowers
                innovators to transform bold ideas into
                groundbreaking solutions that can shape the future of the tech industry.</p>
              <button className='my-10 p-5 bg-white text-black  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5n7rqZ_kdztm4ZUDWLybPtchLIFLn__vsPZCMcx5_RwgaZA/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
            </div>


            <div>
              <div className='bg-white w-full h-2'></div>
            </div>



            {/* <div>
            <Rating />
          </div> */}



          </div>

          {/* <Rating/> */}



        </div>

      </div>


    </div>
  )
}

export default Events
