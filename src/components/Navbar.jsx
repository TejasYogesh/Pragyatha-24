import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/mainPages/Home';
import Pragyatha from '../Pages/mainPages/Pragyatha';
import Contact from '@/Pages/mainPages/Contact';
import Events from '@/Pages/mainPages/Events';
import Entrorphosis from '@/Pages/Entrorphosis';

const Navbar = () => {
    return (
        <>
            <div className='sticky top-0 z-50 bg-black'>
                <div className='flex justify-between'>
                    <div className='bg-black p-2'>
                        <Link to='/'>
                            <img src="PragyathaLogo.png" alt="" className='h-10 sm:h-8 md:h-12 lg:h-12 m-4' />
                        </Link>
                    </div>
                    <div>
                        <ul className='flex justify-end lg:justify-center m-10 text-white text-md'>
                            <li className='mx-4'><Link to='/'>Home</Link></li>
                            <li className='mx-4'><Link to='/pragyatha'>Pragyatha</Link></li>
                            <li className='mx-4'><Link to='/contact'>ContactUs</Link></li>
                            <li className='mx-4'><Link to='/events'>Events</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Uncomment the following Routes if needed */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pragyatha" element={<Pragyatha />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
                <Route path="/entror" element={<Entrorphosis />} />
            </Routes> */}
        </>
    );
}

export default Navbar;