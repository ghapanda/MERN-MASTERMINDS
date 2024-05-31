import { Link } from "react-router-dom";
import Navbar from "../dashboard";

import "./profile.css" 

const AdminH =()=>{
    return (
      <div className="header">
        <h1 className="headerT">ucla offbeat</h1>
            <Navbar />
            <button className="button"><Link to="/dashboard" className="linkh"> Dashboard</Link></button>
            <button className="button"><Link to="/memberSchedulePage" className="linkh">Schedule</Link></button>
           {/* <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
        </div>
    )
}

export default AdminH