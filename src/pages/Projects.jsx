import React from 'react'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
    <>
        <Navbar/>
        <div className="page2">
        <div className="Heading-Page2">
            <h1>My Projects</h1>
        </div>
        <div className="projects">
            <a className='projects-cards' href='https://movie-library-app-self.vercel.app/'>
            <img src="./FilmLibraryApp.png" alt="Film Library App Screenshot" />
                <h3>Film Library App</h3>
                <p>A modern React + Vite Movie Library application — browse, search, and view movies with a smooth UI powered by React and a movie data API (like TMDB or OMDb). Built with performance and best practices in mind using Vite as the build tool.</p>
            </a>
            <a className='projects-cards' href='https://weather-app-gilt-three-31.vercel.app/'>
            <img src="./WeatherApp.png" alt="Weather App Screenshot" />
                <h3>Weather App</h3>
                <p>A simple React weather application that fetches and displays current weather information for any city using the OpenWeatherMap API.</p>
            </a>
            <a className='projects-cards' href='https://todolist-app-bay-eight.vercel.app/'>
            <img src="./TodoListApp.png" alt="To Do List App Screenshot" />
                <h3>To Do List App</h3>
                <p>A simple and responsive Todo List web application built using React.js that allows users to manage daily tasks efficiently. The app supports adding, editing, deleting tasks and persists data using browser Local Storage.</p>
            </a>
        </div>
        <NavLink to="/"><div className='button1'>Back to home</div></NavLink>
        </div>
    </>
  )
}

export default Projects
