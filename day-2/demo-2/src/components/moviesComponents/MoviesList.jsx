import React from 'react'
import MovieCard from './MovieCard'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/download (11).jpeg'
import img4 from '../../assets/download (3).jpeg'
import img5 from '../../assets/download (4).jpeg'
import img6 from '../../assets/download.jpeg'

export default function MoviesList() {

    const moviesList=[
        {title:'Dunkirk',rate:7,cover:img1,topRated:true},
        {title:'Titanic',rate:6,cover:img2},
        {title:'Jaws',rate:4,cover:img3},
        {title:'Harry Potter',rate:10,cover:img4},
        {title:'Us',rate:8,cover:img5},
        {title:'Us',rate:5,cover:img6},
    ]

  return (
      <div className='row mt-5' >        
  {moviesList.map((movie, index) => (
           <div className='col-md-4 d-flex justify-content-center mb-5' key={index} >
             <MovieCard movieData={movie}>
                 <p>sddsdw</p>
             </MovieCard>
           </div>))}
      </div>
  )
}

