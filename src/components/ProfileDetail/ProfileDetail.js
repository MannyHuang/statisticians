import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";
// import { persons } from '../../actions';

const ProfileDetail = props => {
  const match = props.match;
  const personId = +match.params.id;
  // const profileData = persons.find(item => item.id === personId);
  const profileData = {
    name: 1,
    imgUrl: 1,
    profile: 1
  };
  const { name, imgUrl, profile } = profileData;

  return (
    <div className="iitem-header">
      <img className="image" src={imgUrl} alt={name} />
      <div className="item-footer">
        <span className="name">{name}</span>
        <span className="profile">{profile}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { person: state.selectedPerson };
};

export default connect(mapStateToProps)(ProfileDetail);
