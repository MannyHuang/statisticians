import React from 'react';
import './Card.scss'

const Card = ({ name, profile, imageUrl }) => (
  <div className='card-header'>
    <div 
     className='image'
     style={{
       backgroundImage: `url(${imageUrl})`
     }}
    /> 
    <div className='card-footer'>
      <span className='name'>{name}</span>
    <span className='profile'>{profile}</span>
    </div>
  </div>
)

export default Card;