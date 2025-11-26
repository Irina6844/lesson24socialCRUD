import React from "react";
import { Box } from "@mui/material";
import UserCard from "../../molecules/UserCard/UserCard";
import { useDispatch } from "react-redux";
import { changePageAC } from "../../../store/reducers/usersReducer";

export const UsersList = ({ users }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Box>
        <button onClick={() => dispatch(changePageAC())}>1</button>
        <button onClick={() => dispatch(changePageAC(2))}>2</button>
        <button onClick={() => dispatch(changePageAC(3))}>3</button>

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
    </div>
  );
};
