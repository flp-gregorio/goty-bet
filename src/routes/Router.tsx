import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Nominees from "../pages/Nominees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "nominees",
    element: <Nominees />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
