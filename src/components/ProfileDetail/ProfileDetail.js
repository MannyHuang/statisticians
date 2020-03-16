import React from "react";
import "./collectionOverview.scss";
import { data } from "../../data/data";

const ProfileDetail = props => {
  const  match = props.match;
  const personId = +match.params.id;
  const profileData = data.find(item => item.id === personId);
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

export default ProfileDetail;
