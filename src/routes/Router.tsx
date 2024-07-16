import { createBrowserRouter } from "react-router-dom";
import PageTitleComponent from "../components/PageTitleComponent";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Nominees from "../pages/Nominees";
import Winners from "../pages/Winners";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <PageTitleComponent title="Home" />
      </>
    ),
  },
  {
    path: "nominees",
    element: (
      <>
        <Nominees />
        <PageTitleComponent title="Nominees" />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Login />
        <PageTitleComponent title="Login" />
      </>
    ),
  },
  {
    path: "register",
    element: (
      <>
        <Register />
        <PageTitleComponent title="Register" />
      </>
    ),
  },
  {
    path: "winners",
    element: (
      <>
        <Winners />
        <PageTitleComponent title="Winners" />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <About />
        <PageTitleComponent title="About" />
      </>
    ),
  },
]);

export default router;
