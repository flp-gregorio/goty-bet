import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Nominees from "../pages/Nominees";
import Winners from "../pages/Winners";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title="Home"/>,
  },
  {
    path: "nominees",
    element: <Nominees title="Nominees"/>,
  },
  {
    path: "login",
    element: <Login title="Login"/>,
  },
  {
    path: "register",
    element: <Register title="Register"/>,
  },
  {
    path: "winners",
    element: <Winners title="Winners"/>,
  }
]);

export default router;
