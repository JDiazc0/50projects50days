import React, { useState } from "react";

import "./GithubProfile.css";
import FloatingButton from "../../FloatingButton";

export default function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [errorCard, setErrorCard] = useState(null);
  const [searchProfile, setSearchProfile] = useState("");

  const APIURL = "https://api.github.com/users/";

  const getUser = async (username) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await fetch(APIURL + username, config);
      const data = await res.json();
      setProfile(data);
      getRepos(data.login);
    } catch (err) {
      if (err.response.status === 404) {
        setErrorCard("No profile with this username");
      }
    }
  };

  const getRepos = async (username) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    try {
      const res = await fetch(
        APIURL + username + "/repos?sort=created",
        config
      );
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      setProfile({ error: "Problem fetching repos" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchProfile) {
      getUser(searchProfile);
    }
  };

  return (
    <section id="28" className="section-GithubProfile">
      <FloatingButton
        day="28"
        url="https://github.com/JDiazc0/50projects50days/tree/master/src/components/days/day28"
        position="left"
      />
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-profile"
          placeholder="Search Github User"
          value={searchProfile}
          onChange={(e) => setSearchProfile(e.target.value)}
        />
      </form>
      <div className="profile-content">
        {profile ? (
          profile.message ? (
            <p>
              Profile {profile.message}
              {errorCard}
            </p>
          ) : (
            <div className="card-day28">
              <div>
                <img
                  className="avatar"
                  src={profile.avatar_url}
                  alt={profile.name}
                />
              </div>
              <div className="user-info-day28">
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
                <ul>
                  <li>
                    {profile.followers} <strong>Followers</strong>
                  </li>
                  <li>
                    {profile.following} <strong>Following</strong>
                  </li>
                  <li>
                    {profile.public_repos} <strong>Repos</strong>
                  </li>
                </ul>
                <div className="repo">
                  {repos.slice(0, 5).map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
