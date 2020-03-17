import React from "react";
import "./collectionOverview.scss";
import { connect } from "react-redux";

const ProfileDetail = props => {
  const { match: {params} = {}, persons} = props;
  const personId = +params.id;
  const profileData = persons.find(item => item.id === personId);

  const { name, imgUrl, profile } = profileData;

  return (
    <div className="profile-container">
      <h1>{name}</h1>
      <div className="content">
        <div className="left-container">
          <img className="image" src={imgUrl} alt={name} />
        </div>        
        <div className="right-container">
          <p>{profile}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ 
  persons: state.persons
});

export default connect(mapStateToProps)(ProfileDetail);
