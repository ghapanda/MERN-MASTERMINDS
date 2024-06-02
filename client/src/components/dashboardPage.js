import React from "react";
import Navbar from "./dashboard";
import NavbarNotAdmin from "./dashboardNotAdmin";

const dashboardPage = () => {
  const isAdmin = sessionStorage.getItem("isAdmin") == "true" ? true : false;

  return (
    <>
      {isAdmin ? <Navbar /> : <NavbarNotAdmin />}
      <div
        style={{
          backgroundColor: "lightgrey",

          height: "100vh",
          overflowY: "scroll",
          fontFamily: "sans-serif",
          border: "none",
          boxShadow: "4px 4px #323232",
          padding: "20px",
        }}
      ></div>
    </>
  );
};

export default dashboardPage;
