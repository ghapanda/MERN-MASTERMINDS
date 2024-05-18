import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js"
import Login from "./components/login.js";
import SignUp from "./components/signup.js";

import AdminPage from "./components/admin-page.js"
import UsersPage from "./components/users-page.js"

import Profile from "./components/UserProfile/profile.js"

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
      </Routes>
    </BrowserRouter>
  );
}

//If you would like to test your work, you can temporarily add <Route> with the path to your work (e.g: <AdminPage/>)

export default App;


