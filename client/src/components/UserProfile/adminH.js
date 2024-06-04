import { Link } from "react-router-dom";
import Navbar from "../dashboard";

import "./profile.css" 

const AdminH =()=>{
    return (
      <div className="header">
        <h1 className="headerT">ucla offbeat</h1>
            <Navbar />
           {/* <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
        </div>
    )
}

export default AdminH