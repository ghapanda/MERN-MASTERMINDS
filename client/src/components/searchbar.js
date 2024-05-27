import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search"
                onChange={search}
                value={query}
            />
            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result._id}>
                            <div>
                                <p>Profile Picture: <img src={result.portrait}/></p>
                                <p>Display Name: {result.displayName}</p>
                                <p>Username: {result.username}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;


