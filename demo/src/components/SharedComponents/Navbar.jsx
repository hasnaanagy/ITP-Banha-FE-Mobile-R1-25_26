import React from 'react'
import  navBarStyle from '../../styles/navbar.module.css'
export default function Navbar() {
  return (
    <div className={navBarStyle.nav} >
        <ul>
            <li>Learn</li>
             <li>Refrence</li>
            <li>Community</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}
