import { Link } from "react-router-dom";

import "./profile.css" 

const AdminH =()=>{
    return (
      <div className="header">
        <h1 className="headerT">ucla offbeat</h1>
            <button className="button"><Link to="/" className="linkh"> HOME</Link></button>
            <button className="button"><Link to="/memberSchedulePage" className="linkh">schedule</Link></button>
           {/* <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
        </div>
    )
}

export default AdminH