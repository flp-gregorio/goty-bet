import { createBrowserRouter } from "react-router-dom";
import Bet from "../pages/Bet";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bet",
    element: <Bet />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
