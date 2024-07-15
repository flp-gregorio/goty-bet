import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="text-gray-600 body-font bg-zinc-950">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <nav className="flex flex-wrap items-center text-base justify-center left-auto right-0">
          <a className="mx-5 text-2xl text-orange-700 hover:text-orange-500 transition-all duration-500">
            BETS
          </a>
          <a className="mx-5 text-2xl text-orange-700 hover:text-orange-500 transition-all duration-500">
            WINNERS
          </a>
        </nav>
        <Link className="flex order-first lg:order-none lg:w-auto title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 justify-center mx-7" to="/">
          <svg
            viewBox="0.22 0.55 398.78999999999996 414.45"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
          >
            <path
              d="M299.51 252.07L336 215.6l-18.3 54.31-18.3 17.85zm67.28-142.46l-15.12 51.35-91.07 89.03v-34.28zM399.01.55L383.89 51.9l-162.3 159.98v-34.05zM63.78 215.71L263.34 415h-34.08l-28.6-28.36L172.05 415h-35.83l46.25-46.21-20.5-20.26-37.15 36.69-9.42-24.31 29.48-29.24-21.59-21.35-19.84 19.6-9.42-24.53 11.94-11.93-23.45-23zM.22.55l305.64 305.06-9.42 24.31-19.4-19.16-15.78 15.55v-30.99l-22.79-22.56-16.66 15.99v-32.41l-22.36-22.12-17.31 17.08v-34.05L15.34 51.9zm32.88 110.7L283.51 362l-9.43 24.31-36.05-36.46-16 15.55v-31.32l-22.8-22.56-17.09 16.65v-33.29l-21.92-21.57-17.1 16.86v-33.83l-94.9-93.73z"
              fill="#e8341d"
            />
          </svg>
        </Link>
        <div className="flex flex-wrap items-center text-base justify-center left-auto right-0">
          <nav className="flex flex-wrap items-center text-base justify-center">
            <a className="mx-5 text-2xl text-orange-700 hover:text-orange-500 transition-all duration-500">
              ABOUT
            </a>
            <a className="mx-5 text-2xl text-orange-700 hover:text-orange-500 transition-all duration-500">
              USER
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
