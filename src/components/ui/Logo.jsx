import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
    return (
        <div className='flex justify-items-start rounded-xl my-4'>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100095066721188" target="_blank" rel="noopener noreferrer">
                    <img src="facebook.png" alt="Facebook" className='h-10 mr-12' />
                </a>
            </div>

            <div>
                <a href="https://www.linkedin.com/company/meriisefoundation/" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" className='h-10 mr-12' />
                </a>
            </div>

            <div>
                <a href="https://whatsapp.com/channel/0029VaiYmez9sBI88HYcLr47" target="_blank" rel="noopener noreferrer">
                    <img src="whatsapp.png" alt="WhatsApp" className='h-10 mr-12' />
                </a>
            </div>

            <div>
                <a href="https://www.instagram.com/me_riise?igsh=NmxiNW1lbjRnODQym" target="_blank" rel="noopener noreferrer">
                    <img src="Instagram.png" alt="Instagram" className='h-10 mr-12' />
                </a>
            </div>
        </div>
    )
}

export default Logo