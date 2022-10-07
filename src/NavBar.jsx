import React from 'react'

function NavBar({location}) {
  return (
    <nav className='nav'>
      <div>Yanex<sup>{(location)}</sup></div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Portfolio</li>
        <li>Blogs</li>
      </ul>
    </nav>
    
  )
}

export default NavBar