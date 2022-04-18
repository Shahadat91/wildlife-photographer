import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <footer className='footer d-flex justify-content-center align-items-center mt-5'>
           <p><small>Copyright &copy; {year} Wild Photographer All Rights Reserved</small></p>
       </footer>
    );
};

export default Footer;