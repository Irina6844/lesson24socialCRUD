import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocialAPI } from "../../../api/api";
import { Box } from "@mui/material";
import { UsersList } from "../../organisms/UsersList/UsersList";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersData);

  useEffect(() => {
    SocialAPI.getUsers(dispatch);
  }, []);

  return (
    <Box>
        <UsersList users={users}/>
    </Box>
  )
 
};
