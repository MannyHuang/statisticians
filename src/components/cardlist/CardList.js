import React from 'react';
import CardItem from '../card_item/CardItem';
import './CardList.scss';

const CardList = (props) => (
  <div className='cardlist'>
    {props.persons.map(({id, ...otherSectionProps}) => <CardItem key={id} {...otherSectionProps}  />)}
  </div>
)

export default CardList;