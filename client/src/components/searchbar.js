import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchbar.css";

import NavbarNotAdmin from "./dashboardNotAdmin";
import Navbar from "./dashboard";
import SERVERPORT from "./portConfig";

function ResultButton({ result, setProfile, setQuery }) {
  const showProfile = () => {
    setProfile(result);
    setQuery("");
  };

  return (
    <li key={result._id}>
      <button className="search-result-item" onClick={showProfile}>
        <div style={{ flexShrink: 0 }}>
          <img
            style={{ width: "90px", borderRadius: "90px" }}
            src={
              result.portrait !== "null"
                ? `http://localhost:${SERVERPORT}${result.portrait}`
                : "https://img.icons8.com/ios-glyphs/90/user--v1.png"
            }
            alt={`${result.displayName} profile`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://img.icons8.com/ios-glyphs/90/user--v1.png";
            }}
          />
        </div>
        <div style={{ marginLeft: "20px", textAlign: "left" }}>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          >
            Screen Name: {result.displayName}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          >
            User Name: {result.username}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          >
            Dance Style: {result.danceStyle}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "'Poetsen One', sans-serif",
              color: "#323232",
            }}
          >
            Bio: {result.bio}
          </p>
        </div>
      </button>
    </li>
  );
}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [profile, setProfile] = useState(null); //the profile component state should be in the parent component because this manages state
  const isAdmin = sessionStorage.getItem("isAdmin") == "true" ? true : false;

  // event handler for search bar to reflect user input
  function search(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    if (query.trim() !== "") {
      // Check if the query is not empty
      axios
        .get(`http://localhost:${SERVERPORT}/api/search?q=${query}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          alert("Error fetching search results");
        });
    } else {
      setSearchResults([]); // Clear search results if query is empty
    }
  }, [query]);

  return (
    <div>
      {isAdmin ? <Navbar /> : <NavbarNotAdmin />}
      <div
        className="Container"
        style={{ backgroundColor: "lightgrey", padding: "20px" }}
      >
        <div className="search-container">
          <div className="search-bar">
            <h1
              className="Title"
              style={{
                fontFamily: "'Poetsen One', sans-serif",
                color: "#323232",
                fontWeight: "900",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Explore Profiles
            </h1>
            <input
              type="text"
              placeholder="Search"
              onChange={search}
              value={query}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "2px solid #323232",
                boxShadow: "4px 4px #323232",
                fontSize: "18px",
                fontFamily: "'Poetsen One', sans-serif",
                color: "#323232",
              }}
            />
            {searchResults.length > 0 && (
              <ul
                className="search-results"
                style={{ listStyleType: "none", padding: 0 }}
              >
                {searchResults.map((result) => (
                  <ResultButton
                    key={result._id}
                    result={result}
                    setProfile={setProfile}
                    setQuery={setQuery}
                  />
                ))}
              </ul>
            )}
          </div>
          <div>
            {profile && (
              <div className="vh-100">
                <div
                  style={{
                    maxWidth: "500px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "2px solid #323232",
                    padding: "20px",
                    fontWeight: "600",
                    boxShadow: "4px 4px #323232",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      backgroundColor: "white",
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>
                      <img
                        style={{ width: "90px", borderRadius: "90px" }}
                        src={
                          profile.portrait !== "null"
                            ? `http://localhost:${SERVERPORT}${profile.portrait}`
                            : "https://img.icons8.com/ios-glyphs/90/user--v1.png"
                        }
                        alt={`${profile.displayName} profile`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.icons8.com/ios-glyphs/90/user--v1.png";
                        }}
                      />
                    </div>
                    <div
                      className="ProfileBoxInner"
                      style={{
                        flexGrow: 1,
                        marginLeft: "20px",
                        color: "#323232",
                        backgroundColor: "#fff",
                        fontFamily: "'Poetsen One', sans-serif",
                      }}
                    >
                      <h2 style={{ fontSize: "20px" }}>
                        {profile.displayName}
                      </h2>
                      <i>{profile.bio}</i>
                      <p style={{ fontSize: "18px" }}>
                        Dance Style: {profile.danceStyle}
                      </p>
                      <div>
                        {profile.listSessions.map((event, index) => (
                          <div
                            key={index}
                            style={{
                              border: "2px solid #323232",
                              borderRadius: "5px",
                              padding: "10px",
                              marginBottom: "10px",
                              backgroundColor: "#D3D3D3",
                              boxShadow: "4px 4px #323232",
                            }}
                          >
                            <h2 style={{ color: "#323232", fontSize: "18px" }}>
                              {event[0]}
                            </h2>
                            <p
                              style={{
                                color: "#323232",
                                fontWeight: "bold",
                                fontSize: "18px",
                              }}
                            >
                              Date: {event[1]}
                            </p>
                            <p
                              style={{
                                color: "#323232",
                                fontWeight: "bold",
                                fontSize: "18px",
                              }}
                            >
                              Location: {event[2]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
