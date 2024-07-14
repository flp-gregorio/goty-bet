import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
]);

export default router;
