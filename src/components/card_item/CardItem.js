import React from 'react';
import { withRouter } from 'react-router-dom';
import './CardItem.scss';
import { selectPerson } from '../../actions';
import { connect } from 'react-redux';


const CardItem = (props) => {
  const { name, achivement, imgUrl, history, id, research } = props;
  return (
    <div className='card-item' onClick={() => history.push(`/people/${id}`)}>
      <div className='image-container'>
        <img alt={name} src={imgUrl} />
      </div>
      <div className='content'>
        <h1 className='title'>{name}</h1>
        <span className='subtitle'>Achivement: {achivement}</span>
        <span className='subtitle'>Research: {research}</span>
      </div>
    </div>
    ); 
}

const mapStateToProps = state => {
  return { persons: state.persons };
};

export default connect(
  mapStateToProps,
  { selectPerson }
)(withRouter(CardItem));
