import React from "react";
import { Box, Pagination } from "@mui/material";
import UserCard from "../../molecules/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { changePageAC } from "../../../store/reducers/usersReducer";

export const UsersList = ({ users }) => {
  const dispatch = useDispatch();
  const { totalUsersCount, currentPage } = useSelector((state) => state.usersData);

  let pageCount = Math.ceil(totalUsersCount / 100);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const changePage = (e, newPage) => {
    dispatch(changePageAC(newPage))
  }

  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: '30px'
      }}>




       
        

        <Pagination onChange={changePage} defaultPage={currentPage} count={pageCount} color="secondary" />

      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Box>
    </Box>
  );
};
