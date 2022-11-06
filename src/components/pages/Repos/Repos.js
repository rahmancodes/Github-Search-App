import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Repos.css";
import { MyContextApi } from "../../../App";

const Repos = () => {
  const {repository, setRepository} = useContext(MyContextApi)
  const [loading, setLoading] = useState(false);

  const getRepository = async () => {
    try {
      setLoading(true);
      const repos = await axios.get(
        "https://api.github.com/users/rahmancodes/repos"
      );
      setRepository(repos.data);
      setLoading(false);
      console.log("my repos", repos.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRepository();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <div className="user-repos">
          {repository?.map((Repos) => (
            <div className="card" key={Repos.id}>
              <h2>{Repos.name}</h2>
              <p>Language {Repos.language || "no language"}</p>
              <p>Forks {Repos.forks}</p>
              <p>Watchers {Repos.watchers}</p>
              <p>
                <a href={Repos.html_url}>the project link</a>
              </p>
              <p>
                <Link to={`/repos/${Repos.id}`}>See More</Link>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Repos;
