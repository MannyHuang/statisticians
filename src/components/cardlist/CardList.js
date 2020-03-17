import React, { Component } from "react";
import CardItem from "../card_item/CardItem";
import "./CardList.scss";

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

export default CardList;