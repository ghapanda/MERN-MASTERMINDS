import React, { useState, useEffect } from "react";
import axios from "axios";
import "./searchbar.css"

const SearchBar = () => {

    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);

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
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                onChange={search}
                value={query}
            />
            {searchResults.length > 0 && (
                <ul className="search-results">
                    {searchResults.map((result) => (
                        <li key={result._id}>
                            <div className="search-result-item">
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
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default SearchBar;


