import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LogIn  = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
   const navigate = useNavigate();

  const logIn = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setUsername("");
    setPassword("");

    const data = await res.json();
    setInfo(data.message || data.error);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    navigate("/homepage", { state: { username } });
  };

  return (
    <>
      <h1 className="title">Вход</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="username"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
        required
      />
      <button onClick={logIn}>Вход</button>
      <p>{info}</p>
      <p>
        Нет аккаунта?<Link to="/signUp">Создать </Link>
      </p>
    </>
  );
};
