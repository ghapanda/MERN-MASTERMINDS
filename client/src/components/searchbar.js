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
                                <img src={result.portrait} />
                                <div>
                                    <p>Display Name: {result.displayName}</p>
                                    <p>Username: {result.username}</p>
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


