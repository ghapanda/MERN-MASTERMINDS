import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";


import AdminPage from "./components/admin-page.js"
import UsersPage from "./components/users-page.js"

import Profile from "./components/UserProfile/profile.js"

import AboutUs from "./components/aboutus.js";



import Dashboard from "./components/dashboard.js";
import UpdateSchedule from "./components/update-schedule.js";
import MemberSchedulePage from "./components/memberSchedulePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/userspage" element={<UsersPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/profile/:id" element={<Profile/>}/>


        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/update-schedule" element={<UpdateSchedule />} />
        <Route path="/memberSchedulePage" element={<MemberSchedulePage />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

//If you would like to test your work, you can temporarily add <Route> with the path to your work (e.g: <AdminPage/>)

export default App;
