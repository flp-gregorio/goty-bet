import { Link } from "react-router-dom";
import ImageAuthComponent from "../../../components/Auth/ImageAuthComponent";
import InputComponent from "../../../components/InputComponent";

const Login = () => {
  return (
    <div className="bg-zinc-950">
      <div className="flex justify-center h-screen">
        <ImageAuthComponent src="https://media.wired.com/photos/6516df152a96d14834d98190/master/w_1920,c_limit/EA-FC-Is-Just-FIFA-Culture.jpg" />
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-zinc-950">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                Login
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>
            <div className="mt-8">
              <form>
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
                <div className="mt-6">
                  <Link to={"/nominees"}>
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in
                    </button>
                  </Link>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
              <p className="text-sm text-center text-gray-400">
                <Link
                  to={"/forgot-password"}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
