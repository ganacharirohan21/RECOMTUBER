import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-center text-md-left">
                            <p>&copy; 2023 Rohan Ganachari. All Rights Reserved.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-center text-md-right">
                            <a href="https://www.linkedin.com/in/rohan-ganachari-28293623a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
                            <a href="https://www.instagram.com/web.app_devguide/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;