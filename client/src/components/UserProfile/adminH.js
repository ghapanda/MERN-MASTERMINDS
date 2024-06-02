import { Link } from "react-router-dom";
import Navbar from "../dashboard";

import "./profile.css";
import "../dashboard.css";

const AdminH = () => {
  return (
    <div className="header">
      <h1 className="headerT">OFFBEAT SESSIONS</h1>
      <Navbar />
    </div>
  );
};

export default AdminH;
