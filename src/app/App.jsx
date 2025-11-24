
import {  Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { store } from "../store/store";

import "./styles/App.css";

function App() {
  // const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.usersData);

  // useEffect(() => {
  //   SocialAPI.getUsers(dispatch);
  // }, []);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
