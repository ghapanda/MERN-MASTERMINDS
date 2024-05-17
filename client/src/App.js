import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import AboutUs from "./components/aboutus.js";
import AdminSchedulePage from "./components/adminSchedulePage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/adminSchedulePage" element={<AdminSchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

//If you would like to test your work, you can temporarily add <Route> with the path to your work (e.g: <AdminPage/>)

export default App;
