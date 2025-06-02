import React, { useEffect } from "react";
import UserListing from "../UserListing/UserListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncUsers, getAllUsers } from "../../features/users/userSlice";
import search from "../../search.json";
import Lottie from "lottie-react";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers)
  useEffect(
    (term) => {
      dispatch(fetchAsyncUsers(term));
    },
    [dispatch]
  );

  return (
    <div className="home_wrapper">
      {Object.keys(users).length !== 0 ? (
        <div className="banner-img">
          <UserListing />
        </div>
      ) : (
        <div className="home_container">
          <div className="home_animation">
            <Lottie loop={true} animationData={search} />
          </div>
          <div className="home_subClass">
            <p className="home_first">
              Another Great Day to explore different Github User...😊
            </p>
            <p className="home_second">
              Why not input a Username and let's get started...🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
