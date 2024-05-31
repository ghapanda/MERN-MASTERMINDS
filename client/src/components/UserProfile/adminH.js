import { Link } from "react-router-dom";

import "./profile.css" 

const AdminH =()=>{
    return (
      <div className="header">
        <h1 className="headerT">Offbeat Sessions</h1>
            <button className="button"><Link to="/dashboard" className="linkh"> Dashboard</Link></button>
            <button className="button"><Link to="/memberSchedulePage" className="linkh">Schedule</Link></button>
           {/* <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
        </div>
    )
}

export default AdminH