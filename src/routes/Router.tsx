import { createBrowserRouter, Navigate } from "react-router-dom";
import PageTitleComponent from "../components/PageTitleComponent";
import About from "../pages/About";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Leaderboard from "../pages/Leaderboard";
import Nominees from "../pages/Nominees";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Winners from "../pages/Winners";
import Admin from "../pages/Admin";

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
  {
    path: "leaderboard",
    element: (
      <>
        <Leaderboard />
        <PageTitleComponent title="Leaderboard" />
      </>
    ),
  },
  {
    path: "admin",
    element: (
      <>
        <Admin />
        <PageTitleComponent title="Admin" />
      </>
    ),
  },
  {
    path: "404",
    element: (
      <>
        <NotFound />
        <PageTitleComponent title="404" />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"404"} />,
  },
]);

export default router;
