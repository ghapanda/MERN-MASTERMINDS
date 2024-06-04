import { Link } from "react-router-dom";
import Navbar from "../dashboard";

import "./profile.css";
const NotAdminH = () => {
  return (
    <>
      <div className="header">
        <h1 className="headerT">Offbeat Sessions</h1>
        <div>
          <Navbar />
        </div>
        {/*  <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
      </div>
    </>
  );
};

export default NotAdminH;
