import React, { Component } from "react";
import { connect } from 'react-redux';
import CardItem from "../card_item/CardItem";
import "./CardList.scss";
import { selectPerson } from '../../actions';

class CardList extends Component {
  renderList() {
    return (
      this.props.persons.map(({ id, ...otherSectionProps }) => (
        <CardItem key={id} id={id} {...otherSectionProps} />
      ))
    );
  }

  render() {
    return <div className="cardlist">{this.renderList()}</div>
  }
}
  
const mapStateToProps = state => {
  return { persons: state.persons };
};

export default connect(
  mapStateToProps,
  { selectPerson }
)(CardList);
