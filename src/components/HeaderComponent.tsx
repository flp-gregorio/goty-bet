import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="text-gray-600 body-font bg-zinc-950 font-montserrat font-bold text-1xl w-full tracking-wide">
      <div className="container mx-auto flex items-center justify-between p-3">
        <nav className="flex flex-grow justify-center items-center mx-auto">
          <div className="w-1/4 text-right">
            <Link
              to="/nominees"
              className="mx-5 text-orange-700 hover:text-orange-500 transition-all duration-500"
            >
              NOMINEES
            </Link>
            <Link
              to="/winners"
              className="mx-5 text-orange-700 hover:text-orange-500 transition-all duration-500"
            >
              WINNERS
            </Link>
          </div>
          <Link to="/" className="flex-shrink-0 mx-10 group">
            <svg
              viewBox="0.22 0.55 398.78999999999996 414.45"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className="h-10 w-10"
            >
              <path className="group-hover:fill-orange-500 transition-all duration-500"
                d="M299.51 252.07L336 215.6l-18.3 54.31-18.3 17.85zm67.28-142.46l-15.12 51.35-91.07 89.03v-34.28zM399.01.55L383.89 51.9l-162.3 159.98v-34.05zM63.78 215.71L263.34 415h-34.08l-28.6-28.36L172.05 415h-35.83l46.25-46.21-20.5-20.26-37.15 36.69-9.42-24.31 29.48-29.24-21.59-21.35-19.84 19.6-9.42-24.53 11.94-11.93-23.45-23zM.22.55l305.64 305.06-9.42 24.31-19.4-19.16-15.78 15.55v-30.99l-22.79-22.56-16.66 15.99v-32.41l-22.36-22.12-17.31 17.08v-34.05L15.34 51.9zm32.88 110.7L283.51 362l-9.43 24.31-36.05-36.46-16 15.55v-31.32l-22.8-22.56-17.09 16.65v-33.29l-21.92-21.57-17.1 16.86v-33.83l-94.9-93.73z"
                fill="#e8341d"
              />
            </svg>
          </Link>
          <div className="w-1/4 text-left">
            <Link
              to="/leaderboard"
              className="mx-5 text-orange-700 hover:text-orange-500 transition-all duration-500"
            >
              LEADERBOARD
            </Link>
            <Link
              to="/profile"
              className="mx-5 text-orange-700 hover:text-orange-500 transition-all duration-500"
            >
              PROFILE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
