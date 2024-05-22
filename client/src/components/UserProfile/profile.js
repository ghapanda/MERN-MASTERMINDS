import {React , useState, useEffect} from 'react';

import {useParams} from "react-router-dom";

import { Link } from "react-router-dom";

import axios from "axios";

import "./profile.css";

import DisplayProfile from "./display.js"

import EditableProfile from "./edit.js"

const Profile = () =>{
    console.log(useParams());
    const {id}=useParams();


    // using this id and get the user information using API

    // temp use user infor as following

    const info= {
            id: id,
            name: "first last",
            style: "temp hop",
            image: "",
        }
    




    // if edit or not

    const [editMode, setEditMode] = useState(false);
    const [name,setName] = useState(info.name);
    const [style, setStyle] = useState(info.style);
    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setName(result.name);
            setStyle(result.style);
        }        
        setEditMode(false);
    }


    return (
        <div className="container">
            <div className="header">
            <h1 className="headerT">ucla offbeat</h1>
                <button className="button"><Link to="/" className="linkh"> HOME</Link></button>
                <button className="button"><Link to="/memberSchedulePage" className="linkh">schedule</Link></button>
                <button className="button"><Link to="/userspage" className="linkh">users</Link></button>
            </div>
            <div className="Profile">                 
                {
                    
                    editMode
                        ? <>
                            <h1>Edit Profile</h1>
                            <EditableProfile
                                    info={info}
                                    editComplete={handleEditComplete}                            
                            />
                        </>
                        :<>
                            <h1 style={{textAlign: 'center'}}>Profile</h1>
                            <DisplayProfile
                                    info={info}
                                    startEdit={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
};

export default Profile;



