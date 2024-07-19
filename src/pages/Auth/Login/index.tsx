import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import InputComponent from "../../../components/InputComponent";
import LayoutAuthComponent from "../../../components/Layouts/LayoutAuthComponent";

interface IFormInput {
  username: string;
  password: string;
}

const Login = () => {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    nav("/nominees");
  };

  return (
    <LayoutAuthComponent
      src="https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg"
      title="Login"
      description="Sign in to access your account"
    >
      <form className="font-montserrat" onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Username"
          type="text"
          placeholder="Your Username"
          {...register("username")}
        />
        <div className="mt-6"></div>
        <InputComponent
          label="Password"
          type="password"
          placeholder="Your Password"
          {...register("password")}
        />
        <div className="mt-6 w-40 mx-auto">
          <ButtonComponent text="Login" type="submit" />
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
