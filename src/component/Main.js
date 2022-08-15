import React, { useState } from "react";
import DisplayGround from "./DisplayGround";



function Main() {
  const[userData, setUserData] = useState([])
  const[user, setUser] = useState("");
  const[repositories, setRepositories] = useState([]);
  


  const handleSubmit = async (e) => {
      e.preventDefault();

      const profile = await fetch(`https://api.github.com/users/${user}`);
      const profileJson = await profile.json();
      console.log(profileJson);

      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      // console.log(repoJson);


      if (profileJson){
        setUserData(profileJson);
        setRepositories(repoJson)
      }
  
};
  
  return (
    <>
      <div className="ui search" style={{ padding: 20}}>
        <div className="ui icon input">
          <i className="search icon">

          </i>
          <input className="prompt"
           type="text" 
           placeholder="Search user  here..." 
           value={user} 
           onChange={(e) => setUser(e.target.value)} />
        </div>
        <button className="ui primary button" 
        type="submit" 
        onClick={handleSubmit}>
          <i className="github icon"></i>
          Search
        </button>
        <DisplayGround userData={userData}
         repositories={repositories}

         />
      </div>
          
       
    </>
  );
};
  

export default Main;
