import { useState, useEffect } from "react";
import "./App.css";
import { LogIn } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Homepage } from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/logIn">Войти/Зарегаться</Link>
      </nav>

      <Routes>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
