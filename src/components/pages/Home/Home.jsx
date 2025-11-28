import React, { useState } from "react";
import { loginThunk } from "../../../store/reducers/authReducer";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = { email, password };
    dispatch(loginThunk({email:"", password:'' }));
  };

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
