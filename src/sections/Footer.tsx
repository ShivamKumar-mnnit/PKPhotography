'use client';
import logo from '@/assets/logo.webp'
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import Btn from '@/components/EncrptButton/Btn'

export const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="relative font-custom text-footer">
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden bg-[#eae8e4] text-center">
              
                <div className="grid lg:grid-cols-5 gap-5 sm:grid-cols-1 p-20 bg-[#eae8e4] text-black">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-blue-800 ">PK Photography</h2>
                        <p>Capturing Life’s Moments with Passion and Precision</p>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-800 py-2 uppercase text-center">
                            Services
                        </li>
                        <li className="my-4 list-none  hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/corporate-headshots/" target="_blank" rel="noopener noreferrer">Headshots</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/portrait-gallery/" target="_blank" rel="noopener noreferrer">Portrait</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/gallery/" target="_blank" rel="noopener noreferrer">Wedding & Events</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/portfolio-gallery/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/interior-design/" target="_blank" rel="noopener noreferrer">Interior</a>
                        </li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-800 py-2 uppercase text-center">
                            Videography
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/wedding/" target="_blank" rel="noopener noreferrer">Wedding & Events</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">Live Streaming</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">Corporate Ads</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">Product Ads</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">Influencer Videos</a>
                        </li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-blue-800 py-2 uppercase text-center">
                            Useful Links
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="/sign-up">Sign-Up</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/career/" target="_blank" rel="noopener noreferrer">Careers</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/faqs/" target="_blank" rel="noopener noreferrer">FAQs</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="#" target="_blank" rel="noopener noreferrer">Pricing</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/book-session/" target="_blank" rel="noopener noreferrer">Booking</a>
                        </li>
                        <li className="my-4 list-none hover:text-pink-500 transform hover:scale-105 transition-all duration-150 ease-in-out text-center cursor-pointer">
                            <a href="https://pkphotography.in/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </li>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-blue-800 py-2 uppercase text-center">Contact</h2>
                        <p className="text-footer my-4">Email:</p>
                        <p className="text-xl my-4">prabhakar@photography.com</p>
                        <p className="text-footer my-4">Phone: </p>
                        <p className="text-xl my-4">+91 8888766739</p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/pkfashionphotography" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/itspkphotography.in/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out">
                               <FaInstagram />
                            </a>
                            <a href="https://x.com/pkphotographym" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/pkphotography/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out">
                            <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <h6 className="text-center text-black">Copyright &copy; {Year} PKPhotography. All rights reserved.</h6>
            </div>
        </footer>
  );
};