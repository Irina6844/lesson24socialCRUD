import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import { UsersList } from "../../organisms/UsersList/UsersList";
import { userThunkCreator } from "../../../store/reducers/usersReducer";

export const Users = () => {
  const dispatch = useDispatch();
  const { users, currentPage, isLoading } = useSelector(
    (state) => state.usersData
  );

  useEffect(() => {
    dispatch(userThunkCreator());
  }, []);

  return (
    <Box>{isLoading ? <h1>Loading...</h1> : <UsersList users={users} />}</Box>
  );
};
