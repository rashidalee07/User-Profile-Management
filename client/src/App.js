import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import UserProfile from "./../src/userprofile/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
