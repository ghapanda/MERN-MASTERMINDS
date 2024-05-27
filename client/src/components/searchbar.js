import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {

    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    // event handler for search bar to reflect user input
    function search(e) {
        setQuery(e.target.value)
    }

    // // Function to fetch search results from the backend
    // async function fetchSearchResults() {
    //     try {
    //         const response = await axios.get(`http://localhost:3002/search?q=${query}`);
    //         setSearchResults(response.data);
    //     } catch (error) {
    //         console.error("Error fetching search results:", error);
    //     }
    // }

    // // useEffect hook to fetch search results when query state changes
    // useEffect(() => {
    //     if (query) {
    //         fetchSearchResults();
    //     } else {
    //         setSearchResults([]);
    //     }
    // }, [query]);


    console.log(sessionStorage.getItem("token"));

    useEffect(() => { // Runs while rendering
        axios
            .get(`http://localhost:3002/api/search`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            })
            .then((response) => {
                setSearchResults(response.data);
            })
            .catch((error) => {
                console.error("Error fetching search results", error);
            });
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
                                <img src={result.portrait} alt={result.displayName} />
                                <h3>{result.displayName}</h3>
                                <p>{result.username}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button className="bg-white p-4">🔍</button>
        </div>
    );
};

export default SearchBar;


