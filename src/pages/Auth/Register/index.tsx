import { Link } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import InputComponent from "../../../components/InputComponent";
import LayoutAuthComponent from "../../../components/Layouts/LayoutAuthComponent";

const Register = () => {
  return (
    <LayoutAuthComponent
      src="https://4kwallpapers.com/images/wallpapers/destiny-2-the-final-3840x2160-12751.jpeg"
      title="Register"
      description="Create an account"
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
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <div className="mt-6"></div>
        <InputComponent
          label="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <div className="mt-6"></div>
        <InputComponent
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        <div className="mt-6 w-40 mx-auto">
          <ButtonComponent text="Sign in" to="/nominees" />
        </div>
      </form>
      <p className="mt-6 text-sm text-center text-gray-400">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="text-orange-500 focus:outline-none focus:underline hover:underline"
        >
          Sign in
        </Link>
        .
      </p>
    </LayoutAuthComponent>
  );
};

export default Register;
