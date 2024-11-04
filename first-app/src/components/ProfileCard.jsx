// ProfileCard.js
import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, title, avatar }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-title">{title}</p>
    </div>
  );
}

export default ProfileCard;
