import React from 'react';
import { withRouter } from 'react-router-dom';
import './CardItem.scss';

const CardItem = (props) => {
  const { name, profile, imgUrl, history, linkUrl, match } = props;
  return (
  <div className='card-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <img className='image' alt={name} src={imgUrl} />
    <div className='content'>
      <h1 className='title'>{name}</h1>
      <span className='subtitle'>{profile}</span>
    </div>
  </div>); 
}

export default withRouter(CardItem);
