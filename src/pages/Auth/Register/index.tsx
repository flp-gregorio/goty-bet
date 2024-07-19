import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../../components/ButtonComponent";
import InputComponent from "../../../components/InputComponent";
import LayoutAuthComponent from "../../../components/Layouts/LayoutAuthComponent";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    nav("/nominees");
  };

  return (
    <LayoutAuthComponent
      src="https://4kwallpapers.com/images/wallpapers/destiny-2-the-final-3840x2160-12751.jpeg"
      title="Register"
      description="Create an account"
    >
      <form className="font-montserrat" onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Username"
          type="text"
          placeholder="Your Username"
          {...register("username")}
        />
        <div className="mt-6"></div>
        <InputComponent label="Email" type="email" placeholder="Your Email" />
        <div className="mt-6"></div>
        <InputComponent
          label="Password"
          type="password"
          placeholder="Your Password"
          {...register("password")}
        />
        <div className="mt-6"></div>
        <InputComponent
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <div className="mt-6 w-40 mx-auto">
          <ButtonComponent text="Sign in" type="submit" />
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
