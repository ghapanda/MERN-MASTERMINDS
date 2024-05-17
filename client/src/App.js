import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js"
import Login from "./components/login.js";
<<<<<<< HEAD
import SignUp from "./components/singup.js";

import AdminPage from "./components/admin-page.js"
import UserPage from "./components/users-page.js"

=======
import SignUp from "./components/signup.js";
>>>>>>> d66ade24168a205808e5dfe629e15419cbcacbb7

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userspage" element={<UserPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/userpage" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//If you would like to test your work, you can temporarily add <Route> with the path to your work (e.g: <AdminPage/>)

export default App;


