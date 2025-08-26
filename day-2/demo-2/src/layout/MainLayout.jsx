import React, { useState } from 'react'
import NavbarComponent from '../components/sharedComponents/NavbarComponent'
import Movies from '../pages/Movies'
import Counter from '../components/classComponents/Counter'

export default function MainLayout() {
  const [isVisible,setIsVisible] = useState(true)
  
  return (
    <>
         {isVisible&&<Counter/>}
       <button onClick={()=>setIsVisible(!isVisible)} style={{color:isVisible?"blue":"red",display:'block',margin:'6px'}} >{isVisible?"hide":"show"}</button>
      {/* <NavbarComponent/> */}
      {/* <Movies/> */}
    </>
  
  )
}
