import { Link } from "react-router-dom";
import Navbar from "../dashboardNotAdmin";

import "./profile.css";
const NotAdminH = () => {
  return (
    <div className="header">
      <h1 className="headerT">OFFBEAT SESSIONS</h1>
      <Navbar />
    </div>
  );
};

export default NotAdminH;
