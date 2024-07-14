import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
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
