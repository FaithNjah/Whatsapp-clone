import React from 'react'
import './Main.css'
import NavBar from '../Navbar/NavBar'
import Body from '../Body/Body'

const Main = () => {
  return (
    <div class = 'main'>
      <div class = 'navbar'>
      <NavBar />
      </div>

      <div class = 'body'>
      <Body/>
      </div>
      
     
    </div>
  )
}

export default Main
