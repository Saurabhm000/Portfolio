import React from 'react'
import Navbar from '../components/Navbar'


const Contact = () => {
  return (
    <>
    <Navbar/>
   
    <div className='page5'>
         <h1>CONTACT ME</h1>
        <form action="#" id='form'>
          <label for="email">Email:</label>
          <input type="text" name="email" id="" placeholder='Enter Your Email' className='inputField'/>
          <label for="name">Name:</label>
          <input type="text" name="name" id="" placeholder='Enter Your Name' className='inputField' />
          <label for="comments">Message:</label>
          <textarea name="comments" rows="4"  className='inputField'>
          Write a message to Saurabh
          </textarea>
          <button className='button1'>Send Message</button>
        </form>
    </div>
      
    </>
  )
}

export default Contact
