import { createBrowserRouter } from "react-router-dom";
import PageTitleComponent from "../components/PageTitleComponent";
import About from "../pages/About";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Nominees from "../pages/Nominees";
import Profile from "../pages/Profile";
import Winners from "../pages/Winners";

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
  {
    path: "profile",
    element: (
      <>
        <Profile />
        <PageTitleComponent title="Profile" />
      </>
    ),
  },
]);

export default router;
