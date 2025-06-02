import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../features/users/userSlice';
import UserCard from '../UserCard/UserCard';
import './UserListing.scss';


function UserListing() {
  const users = useSelector(getAllUsers);
  let renderUsers = '';

  renderUsers = users.items?.length !== 0 ? (
    users.items?.map((user, index) => {
     return <UserCard key={index} data = {user} />;
    })
  ) : (<div className='users-error'>
    <h3>{users.Error}</h3>
  </div>);

  return (
    <div className='UserListing_user-wrapper'>
      <div className='UserListing_user-list'>
        {users.items?.length && <h2>Github Users</h2>}
        <div className='UserListing_user-container'>{renderUsers}</div>
      </div>
    </div>
  );
};

export default UserListing