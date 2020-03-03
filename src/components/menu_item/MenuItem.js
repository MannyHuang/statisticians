import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = (props) => {
  const { title, imgUrl, size, history, linkUrl, match } = props;
  return (<div style={{
    backgroundImage: `url(${imgUrl})`
  }} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>); 
}

export default withRouter(MenuItem);
