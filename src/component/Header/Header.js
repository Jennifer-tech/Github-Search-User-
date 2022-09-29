import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchAsyncUsers } from "../../features/users/userSlice";
import githubLogo2 from "../../images/githubLogo2.jpg";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUsers(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">Github User <p>Search</p></Link>
      </div>
      <div className="header_search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Users"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="header_github-image">
        <img src={githubLogo2} alt="github_image" />
      </div>
    </div>
  );
}

export default Header;
