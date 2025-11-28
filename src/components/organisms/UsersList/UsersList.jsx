import React from "react";
import { Box } from "@mui/material";
import UserCard from "../../molecules/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { changePageAC } from "../../../store/reducers/usersReducer";

export const UsersList = ({ users }) => {
  const dispatch = useDispatch();
  const { totalUsersCount } = useSelector((state) => state.usersData);

  let pageCount = Math.ceil(totalUsersCount / 100);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <Box>
      {pages.map((p) => (
        <button onClick={() => dispatch(changePageAC(p))}
         style={{ padding: "5px", borderRadius: "10px" }}>{p}</button>))}

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
