import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_iocn from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsup_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
         <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
         </div>
         <ul className="footer-link">
             <li>Company</li>
             <li>Product</li>
             <li>Ofices</li>
             <li>About</li>
             <li>Contect</li>
         </ul>
         <div className="footer-social-iocn">
            <div className="footer-icons-container">
                <img src={instagram_iocn} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsup_icon} alt="" />
            </div>  
         </div>
            <div className="footer-copyright">
                <hr/ >
                <p>Copyright© 2021 SHOPPER. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer