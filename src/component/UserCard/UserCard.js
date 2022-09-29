import React from 'react';
import './UserCard.scss';
import { Link } from "react-router-dom"

function UserCard(props) {
  const {data} = props;
  return (
   <div className='UserCard_card-item'>
   <Link to={`userDetail/${data.login}`}>
     <div className='UserCard_card-inner'>
       <div className='UserCard_card-top'>
         <img src={data.avatar_url} alt='users.login'/>
       </div>
       <div className='UserCard_card-bottom'>
         <div className='UserCard_card-info'>
           <h4>{data.login}</h4>
         </div>
       </div>
     </div>
     </Link>
   </div>
  )
}

export default UserCard