import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import githubApi from "../../common/apis/githubApi";
import { FaUsers } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { GoBriefcase } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Repo from "./Repo";
import "./UserDetail.scss";

function UserDetail() {
  const { login } = useParams();

  const [userInfo, setUserInfo] = useState({});

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          githubApi.get(`/users/${login}`),
          githubApi.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInformation();
  }, [login]);
  
  return (
    <div className="UserDetail_container">
      <div className="UserDetail_user-information">
        <div className="UserDetail_image">
          <img src={userInfo?.avatar_url} alt={userInfo?.name} />
        </div>
        <div className="UserDetail_user-content">
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <div className="UserDetail_more-data">
            <p>
              <span>
                <FaUsers />
              </span>
              {userInfo?.followers} Followers. Following {userInfo?.following}
            </p>

            {userInfo?.location && (
              <p>
                <span>
                  <ImLocation2 />
                </span>
                {userInfo?.location}
              </p>
            )}

            {userInfo?.blog && (
              <p>
                <span>
                  <GoBriefcase />
                </span>
                {userInfo?.blog}
              </p>
            )}
            <p>
              <span>
                <FaGithub />
              </span>
              <a href={userInfo?.html_url}>View Github Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="UserDetail_user-repos">
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>This user has no Repo...</h2>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
