import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = () => {
    // Add functionality to change email
  };

  const handleChangeUsername = () => {
    // Add functionality to change username
  };

  const handleChangePassword = () => {
    // Add functionality to change password
  };

  const handleConfirmChanges = () => {
    // Add functionality to confirm changes
  }

  return (
    <LayoutSystemComponent>
      <div className="container flex align-middle content-center justify-center mx-auto">
        <form className="font-montserrat">
          <InputComponent
            label="Email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          <div className="mt-6"></div>
          <InputComponent
            label="Username"
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your Username"
          />
          <div className="mt-6"></div>
          <InputComponent
            label="New Password"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your New Password"
          />
          <div className="mt-6"></div>
          <InputComponent
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Your Password"
          />
          <div className="mt-6 w-40 mx-auto">
            <ButtonComponent text="Confirm Changes" onClick={handleConfirmChanges} />
          </div>
        </form>
      </div>
    </LayoutSystemComponent>
  );
};

export default Profile;
