import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchbar.css"

import Navbar from "./dashboard";
import { Show } from "@chakra-ui/react";

function ResultButton({result, setProfile}) {

    const showProfile = () => {
        setProfile(result);
    };

    return(

        <li key={result._id}>
        <button className="search-result-item" onClick={showProfile}>
            <div style={{ flexShrink: 0 }}>
                <img
                    style={{ width: "90px", borderRadius: "90px" }}
                    src={
                    result.portrait !== "null"
                        ? `http://localhost:3002${result.portrait}`
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
            {/* <img src= '/Users/srinjanasriram/Documents/Academics/CS/CS35L/Project/MERN-MASTERMINDS/uploads/1717025539960-img2.jpg' /> */}
            <div>
                <p>Username: {result.username}</p>
                <p>Dance Style: {result.danceStyle}</p>
                <p>Bio: {result.bio}</p>
            </div>
        </button>
    </li>

    );
};

const SearchBar = () => {

    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [profile, setProfile] = useState(null); //the profile component state should be in the parent component because this manages state

    // event handler for search bar to reflect user input
    function search(e) {
        setQuery(e.target.value)
    }

    useEffect(() => {
        if (query.trim() !== "") { // Check if the query is not empty
            axios
                .get(`http://localhost:3002/api/search?q=${query}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`
                    }
                })
                .then((response) => {
                    console.log(response.data);
                    setSearchResults(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching search results", error);
                });
        } else {
            setSearchResults([]); // Clear search results if query is empty
        }
    }, [query]);

    console.log(searchResults)


    return (
        <div>
        <div className="search-bar">
            <Navbar />
            <h1>Search Bar</h1>
            <input
                type="text"
                placeholder="Search"
                onChange={search}
                value={query}
            />
            {searchResults.length > 0 && (
                <ul className="search-results">
                    {searchResults.map((result) => (
                        <ResultButton 
                        result = {result}
                        setProfile = {setProfile}/>
   
                    ))}
                </ul>
            )}
        </div>
        <div>
        <div style={{ textAlign: "center" }}>Profile</div>
 
            {profile && (
            <div
            className="vh-100"
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                maxWidth: "500px",
                width: "100%",
                margin: "auto",
                borderRadius: "5px",
                border: "2px solid #323232",
                padding: "20px",
                fontWeight: "600",
                boxShadow: "4px 4px #323232"
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", textAlign: "left" }}
              >
                <div style={{ flexShrink: 0 }}>
                  <img
                    style={{ width: "90px", borderRadius: "90px" }}
                    src={
                      profile.portrait !== "null"
                        ? `http://localhost:3002${profile.portrait}`
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
                <div className="ProfileBoxInner" style={{ flexGrow: 1, marginLeft: "20px", color: '#323232', backgroundColor: '#fff' }}>
                  <h2>{profile.displayName}</h2>
                  <i>{profile.bio}</i>
                  <p>Dance Style: {profile.danceStyle}</p>
                  <ul style={{ listStyleType: "none", padding: 0, backgroundColor:"#D3D3D3", boxShadow: "4px 4px #323232", fontWeight: "600", color:"#323232" }}>
                    {profile.listSessions.map((event, index) => (
                      <li
                        key={index}
                        style={{
                          border: "2px solid #323232",
                          borderRadius: "2px",
                          padding: "10px",
                          marginBottom: "10px",
                          backgroundColor: "#D3D3D3",
                        }}
                      >
                        <h2 style={{ color: "#323232" }}>{event[0]}</h2>
                        <p style={{ color: "#323232", fontWeight: "bold" }}>
                          Date: {event[1]}
                        </p>
                        <p style={{ color: "#323232", fontWeight: "bold" }}>Location: {event[2]}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
        </div>


        
    
    );

};

export default SearchBar;


