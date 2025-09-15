import React from 'react'
import logo from '../assets/img/logo.png'; // Assuming you have a logo image
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className='bg-[#F7F7F7] p-10 w-full min-h-[60vh]'>
                <div className=' flex flex-wrap  md:justify-around justify-between md:gap-4 gap-8'>
                    <div className='w-full md:max-w-xs space-y-4'>
                        <img src={logo} alt="logo" loading='lazy' className='w-28' />
                        <p className='text-justify text-gray-800'>
                            Established in 2012, ERCON Industries (Pvt.) Limited is an associated company of the ERCON Group located in UAE and KSA, an industry leader in power distribution and switchgear solutions since 2002. As part of the Group’s strategic expansion in Pakistan, ERCON Industries specializes in the manufacturing of LV/MV switchgear, power distribution systems, and sheet metal fabrication.
                        </p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-xl text-[#FF5C3F]'>Quick Links</h1>
                        <ul className='flex flex-col items-start gap-4'>
                            <li onClick={()=>navigate('/')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer text-duration-200'>Home</li>
                            <li onClick={()=>navigate('/about')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>About</li>
                            <li onClick={()=>navigate('/products')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Products</li>
                            <li onClick={()=>navigate('/clientele')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer text-duration-200'>Clientele</li>
                            <li onClick={()=>navigate('/accreditations')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Accreditations</li>
                            <li onClick={()=>navigate('/exhibition')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Exhibition</li>
                            <li onClick={()=>navigate('/gallery')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Gallery</li>
                            <li onClick={()=>navigate('/contact')} className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-xl text-[#FF5C3F]'>Products</h1>
                        <ul className='flex flex-col items-start gap-4'>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer text-duration-200'>MV Type Tested switchgear</li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Medium voltage switchgear</li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Automation</li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Solar System</li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Cable Managemant System </li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Busway </li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Electrical cabinets </li>
                            <li className='text-gray-800 hover:text-[#FF5C3F] cursor-pointer duration-200'>Sheet Metal Fabrication</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-xl text-[#FF5C3F]'>Follow us</h1>
                        <div className='flex flex-col items-start gap-4'>
                            <div className='flex items-center gap-1 '>
                                <FaFacebook size={24} className='text-[#FF5C3F]' />
                                Facebook
                            </div>
                            <div className='flex items-center gap-1 '>
                                <FaInstagramSquare size={24} className='text-[#FF5C3F]' />
                                Instagram
                            </div>
                            <div className='flex items-center gap-1 '>
                                <FaXTwitter size={24} className='text-[#FF5C3F]' />
                                Twiiter
                            </div>
                            <div className='flex items-center gap-1 '>
                                <FaFacebook size={24} className='text-[#FF5C3F]' />
                                Facebook
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between md:px-14 mt-16'>
                    <h1 className='md:text-base text-xs text-gray-800'>2025 Ecron. All rights reserved.</h1>
                    <p className='md:text-base text-xs text-gray-800'>Terms & Conditions | Privacy Policy</p>
                </div>
            </div>
        </>
    )
}

export default Footer