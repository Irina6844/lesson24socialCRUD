import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/templates/Layout/Layout";
import { Home } from "../../components/pages/Home/Home";
import { Users } from "../../components/pages/Users/Users";
import { Profile } from "../../components/pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path:"/users/profile/:id",
        element:<Profile/>
      }
    ],
  },
]);
