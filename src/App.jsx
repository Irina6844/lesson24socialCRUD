import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocialAPI } from "./api/api";

import "./App.css";

function App() {
  const dispatch= useDispatch()
  const {users} = useSelector((state) => state.usersData);

  useEffect(() => {
    SocialAPI.getUsers(dispatch)
  }, []);

  return <></>;
}

export default App;
