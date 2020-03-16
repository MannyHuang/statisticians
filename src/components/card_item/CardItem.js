import React from 'react';
import { withRouter } from 'react-router-dom';
import './CardItem.scss';

const CardItem = (props) => {
  const { name, achivement, imgUrl, history, id, research } = props;
  return (
    <div className='card-item' onClick={() => history.push(`/people/${id}`)}>
      <img className='image' alt={name} src={imgUrl} />
      <div className='content'>
        <h1 className='title'>{name}</h1>
        <span className='subtitle'>Achivement: {achivement}</span>
        <span className='subtitle'>Research: {research}</span>
      </div>
    </div>
    ); 
}

export default withRouter(CardItem);
