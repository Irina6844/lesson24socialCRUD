import React from 'react'
import { Box } from '@mui/material'
import UserCard from '../../molecules/UserCard/UserCard'

export const UsersList = ({users}) => {
  return (
    <div>
      <Box>
            {
                users?.map((user) => <UserCard/>)
            }
        </Box>
    </div>
  )
}


