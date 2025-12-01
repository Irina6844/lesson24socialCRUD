import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import userImg from "../../../assets/user.jpg";
import { NavLink } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: "4px 4px 13px black" }}>
      <CardMedia
        sx={{ height: 290 }}
        image={user.photos.large ? user.photos.large : userImg}
        title="profile picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Follow
        </Button>
        <Button component={NavLink} to={`/users/profile/${user.id}`} variant="contained" size="small">
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}
