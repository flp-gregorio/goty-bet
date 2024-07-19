//import ButtonComponent from "../../components/ButtonComponent";
//import InputComponent from "../../components/InputComponent";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

const Profile = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <LayoutSystemComponent>
      <div className="flex items-center justify-center min-h-[85vh]">
        <div className="bg-zinc-900 p-8 shadow-md max-w-xl w-full mx-auto my-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <InputComponent
                label="Username"
                type="text"
                placeholder="Your Username"
                {...register("username")}
              />
              <div>
                <InputComponent
                  label="Email"
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
              </div>
            </div>
            <p className="text-white text-3xl mt-8">Change Password</p>
            <div className="mt-4">
              <InputComponent
                label="CURRENT PASSWORD"
                type="password"
                placeholder=""
                {...register("password")}
              />
            </div>

            <div className="mt-4">
              <InputComponent
                label="NEW PASSWORD"
                type="password"
                placeholder=""
                {...register("newPassword")}
              />
            </div>
            <div className="mt-4">
              <InputComponent
                label="CONFIRM NEW PASSWORD"
                type="password"
                placeholder=""
                {...register("confirmPassword")}
              />
            </div>

            <div className="mt-6">
              <ButtonComponent text="SAVE CHANGES" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default Profile;
