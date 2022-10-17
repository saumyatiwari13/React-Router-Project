import React from 'react'
import '../css/contact.css'
import cimg from '../assets/contact.svg'

export default function Contact() {
  return (
    <div id="contact-sec">
      <img className="conimg" src={cimg} alt='Contact'/>
      <div className='cdetails'>
      </div>
    </div>
  )
}
