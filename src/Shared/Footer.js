import React from 'react';
import './Footer.css';
import { GrFacebook } from 'react-icons/gr';
import { FiTwitter } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { TiSocialYoutube, TiSocialLinkedin } from 'react-icons/ti';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className="footer-section mt-5">
            <div className=" ">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-10 py-10 mt-5 mb-12">
                        <div className="">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Special Review</h3>
                                </div>
                                <div className="footer-text">
                                    <p> So surprised when Emmy reached out to me regarding my review of order number 56666637.
                                        It was a very small inconvenience, but I understand that for people who aren't internet savvy, it's important to give them easy instructions! Your customer service ROCKS! Thank you again for the nice gesture she extended to me. Very grateful anytime I get excellent service these days.</p>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a className='btn btn-link'>Home</a></li>
                                    <li><a className='btn btn-link'>about</a></li>
                                    <li><a className='btn btn-link'>services</a></li>
                                    <li><a className='btn btn-link'>portfolio</a></li>
                                    <li><a className='btn btn-link'>Contact</a></li>
                                    <li><a className='btn btn-link'>About us</a></li>
                                    <li><a className='btn btn-link'>Our Services</a></li>
                                    <li><a className='btn btn-link'>Expert Team</a></li>
                                    <li><a className='btn btn-link'>Contact us</a></li>
                                    <li><a className='btn btn-link'>Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" ">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Dont miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>

                            </div>
                            <div className='mt-10 flex '>
                                <GrFacebook style={{ color: 'white', marginRight: '50px' }} /><FiTwitter style={{ color: 'white', marginRight: '50px' }} /> <SiInstagram style={{ color: 'white', marginRight: '50px' }} /> <TiSocialYoutube style={{ color: 'white', marginRight: '50px' }} /> <TiSocialLinkedin style={{ color: 'white', marginRight: '50px' }} /> <FaGoogle style={{ color: 'white', marginRight: '50px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="copyright-text text-center p-3">
                        <p>Copyright &copy; {year}, All Right Reserved</p>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;