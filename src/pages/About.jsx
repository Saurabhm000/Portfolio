import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const Aboutme = () => {
  return (
    <>
      <Navbar/>
      <div className="page4">
        <h1>About Me</h1>
        <p>Hi, I’m <strong>Saurabh Maurya</strong>, a passionate and dedicated <strong>MERN Stack Developer</strong> with a strong interest in building modern, responsive, and user-focused web applications. I specialize in developing full-stack applications using <strong>MongoDB, Express.js, React.js, and Node.js,</strong> and I enjoy transforming ideas into scalable and efficient digital solutions. <br />

        My journey in web development started with a deep curiosity about how websites and applications work behind the scenes. Over time, I built a strong foundation in <strong>JavaScript</strong> and modern development practices, allowing me to create dynamic front-end interfaces and powerful back-end systems. I focus on writing clean, maintainable, and optimized code that delivers real value to users. <br />

        On the front end, I enjoy building interactive and responsive user interfaces using <strong>React.js</strong>. I pay attention to UI/UX principles to ensure that applications are not only functional but also visually appealing and easy to use. On the back end, I work with <strong>Node.js</strong> and <strong>Express.js</strong> to develop <strong>secure APIs</strong> and manage databases efficiently using <strong>MongoDB</strong>. <br />

        As a continuous learner, I am always improving my problem-solving skills and exploring new technologies to stay updated in the fast-growing tech industry. I believe in consistency, discipline, and constant growth — both personally and professionally. <br />

        My goal is to work on impactful projects, collaborate with talented teams, and contribute to building innovative web solutions that make a difference.    
        </p>
        <NavLink to="/"><div className='button1'>Back to home</div></NavLink>
      </div>
    </>
  )
}

export default Aboutme
