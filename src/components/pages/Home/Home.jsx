import React, { use, useState } from "react";
import { loginThunk } from "../../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";


export const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userId = useLocalStorage()


  const handleSubmit = (e) => {
    e.preventDefault();
    let body = { email, password };

    dispatch(loginThunk({ email: "", password: "" }));
  };

  if (userId) {
    return <Navigate to={`/users/profile/${userId}`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="text"
      />
      <button>Log In</button>
    </form>
  );
};
