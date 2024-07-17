import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import InputComponent from "../../../components/InputComponent";
import LayoutAuthComponent from "../../../components/Layouts/LayoutAuthComponent";

const Login = () => {
  return (
    <LayoutAuthComponent
      src="https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg"
      title="Login"
      description="Sign in to access your account"
    >
      <form className="font-montserrat">
        <InputComponent
          label="Username"
          type="text"
          name="username"
          id="username"
          placeholder="Your Username"
        />
        <div className="mt-6"></div>
        <InputComponent
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <div className="mt-6 w-40 mx-auto">
          <ButtonComponent text="Login" to="/nominees" />
        </div>
      </form>
      <p className="mt-6 text-sm text-center text-gray-400">
        Don&#x27;t have an account yet?{" "}
        <Link
          to={"/register"}
          className="text-orange-500 focus:outline-none focus:underline hover:underline"
        >
          Sign up
        </Link>
        .
      </p>
      <p className="text-sm text-center text-gray-400">
        <Link
          to={"/forgot-password"}
          className="text-orange-500 focus:outline-none focus:underline hover:underline"
        >
          Forgot your password?
        </Link>
      </p>
    </LayoutAuthComponent>
  );
};

export default Login;
