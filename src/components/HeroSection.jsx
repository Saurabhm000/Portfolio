import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="page1">
        <div className="intro">
          <div className="intro-inner">
            <div>
              <h1>👋</h1>
              <h1><span id='hello'>Hello !</span> I'm Saurabh</h1><br />
            </div>
            <div id='productDesigner'>
              <hr />
              <h2>Web Developer ✨</h2>
            </div>
            <div>
              <p>Hello, I’m Saurabh Maurya, a passionate <strong>MERN stack web developer</strong> experienced in building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js.</p>
            </div>
            <div>
              <h3>✔️ Problem Solving Capabilty</h3>
              <h3>✔️ Best Practices Code</h3>
              <h3>✔️ Mern Developer </h3>
            </div>
            <div id='button'>
              <a className='button1' href="https://www.linkedin.com/in/saurabhm000" target='_blank'>Let's Talk</a>
              <a className='button1' href='./Saurabh_Resume.pdf' download>Download CV</a>
            </div>
          </div>
        </div>
        <div className="pic">
            <img src="./Saurabhpic.png" alt="Saurabh Pic" />
        </div>
      </div>
      <div className="strip">
        <h1>WEB DEVELOPMENT - FRONTEND - BACKEND - DATABASE</h1>
      </div>
    </>
  )
}

export default HeroSection;
