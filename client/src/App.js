import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";

import AdminPage from "./components/admin-page.js";
import UsersPage from "./components/users-page.js";

import Profile from "./components/UserProfile/profile.js";
import SearchBar from "./components/searchbar.js"

import Loading from "./components/UserProfile/loading.js";

import AboutUs from "./components/aboutus.js";

import Dashboard from "./components/dashboard.js";
import Schedule from "./components/update-schedule.js";
import MemberSchedulePage from "./components/memberSchedulePage.js";
import ProtectedRoute from "./authentication/protectedRoutes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchbar" element={<SearchBar />} />

        <Route
          path="/userspage"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminpage"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          // path="/profile/:id"
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/aboutus" element={<AboutUs />} />

        <Route
          path="/update-schedule"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/memberSchedulePage"
          element={
            <ProtectedRoute>
              <MemberSchedulePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/loading"
          element={
            <ProtectedRoute>
              <Loading />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
