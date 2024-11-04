// ProfileList.js
import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList() {
  const profiles = [
    { name: 'Alice Johnson', title: 'Software Engineer', avatar: 'https://via.placeholder.com/100' },
    { name: 'Bob Smith', title: 'UI/UX Designer', avatar: 'https://via.placeholder.com/100' },
    { name: 'Charlie Brown', title: 'Product Manager', avatar: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index} 
          name={profile.name} 
          title={profile.title} 
          avatar={profile.avatar} 
        />
      ))}
    </div>
  );
}

export default ProfileList;
