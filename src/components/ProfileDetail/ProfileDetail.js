import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";
// import { persons } from '../../actions';

const ProfileDetail = props => {
  const { match: {params} = {}, persons} = props;
  const personId = +params.id;
  const profileData = persons.find(item => item.id === personId);

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

const mapStateToProps = state => ({ 
  persons: state.persons
});

export default connect(mapStateToProps)(ProfileDetail);
