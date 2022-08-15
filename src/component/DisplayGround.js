import React from 'react';

const DisplayGround = ({userData, repositories}) => {
  return (
    <table className="ui celled table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Avatar</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Repositories</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{userData.name}</td>
                <td>{!userData.avatar_url ? " " : (
                    <img className="ui small circular image" 
                    src={userData.avatar_url} 
                    alt={userData.avatar_url} />
                )}</td>
                <td>{userData.company}</td>
                <td>{userData.bio}</td>
                <td>{repositories.map(repo =>(
                    <div className="ui relaxed divided list" key={repo.name}>
                        <div className="item">
                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <a href={repo.html_url} 
                                    className="header" 
                                    target="_blank"
                                >{repo.name}</a>
                           
                            </div>
                        </div> 
                    </div>
                ))}</td>
                
                
            </tr>
        </tbody>
    </table>
  );
};

export default DisplayGround