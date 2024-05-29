import { Link } from "react-router-dom";

import "./profile.css";
const NotAdminH = () => {
  return (
    <>
      <div className="header">
        <h1 className="headerT">UCLA offbeat</h1>
        <div>
          <button className="button">
            <Link to="/dashboard" className="linkh">
              {" "}
              Dashboard
            </Link>
          </button>
          <button className="button">
            <Link to="/" className="linkh">
              {" "}
              LOGOUT
            </Link>
          </button>
        </div>
        {/*  <button className="button"><Link to="/userspage" className="linkh">users</Link></button>*/}
      </div>
    </>
  );
};

export default NotAdminH;
