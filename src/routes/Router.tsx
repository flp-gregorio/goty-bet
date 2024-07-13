import { createBrowserRouter } from "react-router-dom";
import Bet from "../pages/Bet";
import Login from "../pages/Login";

const router = createBrowserRouter([
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
