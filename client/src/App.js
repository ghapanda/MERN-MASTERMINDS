import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home.js";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";

import AdminPage from "./components/admin-page.js";
import UsersPage from "./components/users-page.js";

import Profile from "./components/UserProfile/profile.js";

import AboutUs from "./components/aboutus.js";

import Dashboard from "./components/dashboard.js";
import UpdateSchedule from "./components/update-schedule.js";
import MemberSchedulePage from "./components/memberSchedulePage.js";
import ProtectedRoute from "./authentication/protectedRoutes.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

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
        {/*<Route path="/adminSchedulePage" element={<AdminSchedulePage />} />*/}
        <Route path="/memberSchedulePage" element={<MemberSchedulePage />} />
        {/*<Route path="/homeSchedule" element={<MainSchedulePage />} /> */}
        <Route
          path="/update-schedule"
          element={
            <ProtectedRoute>
              <UpdateSchedule />
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

      </Routes>
    </BrowserRouter>
  );
}

//If you would like to test your work, you can temporarily add <Route> with the path to your work (e.g: <AdminPage/>)

export default App;
