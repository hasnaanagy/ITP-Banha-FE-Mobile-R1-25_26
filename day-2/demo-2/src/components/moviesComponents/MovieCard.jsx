import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function MovieCard({movieData}) {
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieData.cover} />
      <Card.Body>
        <Card.Title>name: {movieData.title}</Card.Title>
        <Card.Text>
          Rate: {movieData.rate} / 10
        </Card.Text>
        {movieData.topRated&&<p>TopRated</p>}
      </Card.Body>
    </Card>
  )
}
