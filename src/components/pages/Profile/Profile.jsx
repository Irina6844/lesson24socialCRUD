import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfileThunk } from '../../../store/reducers/profileReducer'

export const Profile = () => {
const {id} = useParams()
const {profile} =useSelector((state) =>  state.profileData)
const dispatch = useDispatch()


useEffect(() => {
dispatch(getProfileThunk(id))
}, [id])

  return (
    <div>
         <h2>{profile?.userId}</h2>
      <h1>{profile?.fullName}</h1>
    </div>
  )
}


