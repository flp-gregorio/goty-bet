import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="text-gray-600 antialiased bg-zinc-950 font-montserrat font-bold text-xl md:text-1xl w-full tracking-tight">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
        <nav className="lg:flex lg:items-center mx-auto grid grid-cols-1 ">
          <div className="flex justify-between md:flex-row md:order-1 order-2">
            <Link
              to="/nominees"
              className="md:mx-5 mr-5 text-white hover:text-orange-600 transition-all duration-500"
            >
              NOMINEES
            </Link>
            <Link
              to="/winners"
              className="md:mx-5 text-white hover:text-orange-600 transition-all duration-500"
            >
              WINNERS
            </Link>
          </div>
          <Link to="/" className="group order-1 md:order-2 m-auto">
            <svg
              className="w-16 h-16 text-black py-1 transition duration-300 ease-in-out filter hover:drop-shadow-[0_0_10px_rgba(234,88,12,0.3)]"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 80 80"
            >
              <path
                className="group-hover:fill-orange-600 transition duration-300"
                fill="#fff"
                fillRule="evenodd"
                d="m16.585 21.058 1.83 4.15s-.57 4.072 0 8.145c.54 3.863 1.68 6.89 2.782 9.815.235.624.468 1.244.693 1.865 4.208 6.224 6.952 8.607 6.952 8.607l2.378 9.912 3.841 4.457v1.383h-1.83v1.537H31.22V77h17.56v-6.07h-2.012v-1.538h-1.83V68.01l3.842-4.457 2.378-9.912s2.744-2.383 6.952-8.607c.225-.622.458-1.241.693-1.865 1.101-2.924 2.241-5.952 2.782-9.815.57-4.073 0-8.145 0-8.145l1.83-4.15-8.781-2.766-3.476 2.305 1.28-4.226L40 3 27.56 16.37l1.28 4.227-3.475-2.305-8.78 2.766Zm-.64 5.533v3.227s-2.927 1.768-2.652 4.688c0 3.458 2.652 5.917 2.652 5.917v-3.074h2.927l.915 2.766h-.366v.308c-.203.386 1.59 5.373 2.835 7.607 2.012 2.613 5.671 5.61 5.671 5.61v2.843s-4.76-1.921-7.043-4.918c-1.463-1.921-2.378-3.92-3.475-6.532-4.705-2.438-7.433-5.751-7.409-10.527.01-2.097.242-3.208 1.464-5.226 1.006-1.306 4.481-2.69 4.481-2.69Zm48.11 3.227v-3.227s3.475 1.383 4.481 2.69c1.222 2.017 1.453 3.128 1.464 5.225.024 4.776-2.704 8.09-7.409 10.527-1.097 2.613-2.012 4.61-3.475 6.532-2.283 2.997-7.043 4.918-7.043 4.918V53.64s3.659-2.997 5.67-5.61c1.246-2.234 3.039-7.221 2.836-7.607v-.308h-.366l.915-2.766h2.927v3.074s2.652-2.46 2.652-5.917c.275-2.92-2.652-4.688-2.652-4.688Zm-14.48 8.71-2.561 2.465-.008 2.41 1.285-1.205 1.285-3.67Zm1.101-3.69 1.062-3.47-7.456 7.168v2.316l6.394-6.015Zm2.262-7.369L54 24 41.543 35.977v2.3L52.938 27.47ZM44.474 52 30.463 38.536l1.316 3.699 1.646 1.554-.838.806.661 1.657 1.393-1.324 1.516 1.442-2.07 1.976.661 1.642 2.609-2.479 1.44 1.37L35.548 52h2.516l2.008-1.916L42.081 52h2.393Zm2.986-7.39L26 24l1.062 3.47 11.711 11.17v2.3l1.215-1.153 1.57 1.494v2.19l1.17-1.08 1.6 1.523v2.094l1.108-1.05 1.362 1.294.662-1.642Zm-1.57 3.81L28.31 31.478l1.061 3.47 6.663 6.332v2.286l1.201-1.14 1.539 1.458v2.249l1.2-1.125 1.6 1.524v2.116l1.124-1.05 2.531 2.463.663-1.643Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <div className="flex justify-between md:flex-row md:order-3 order-3">
            <Link
              to="/leaderboard"
              className="md:mx-5 mr-5 text-white hover:text-orange-600 transition-all duration-500"
            >
              LEADERBOARD
            </Link>
            <Link
              to="/profile"
              className="md:mx-5 text-white hover:text-orange-600 transition-all duration-500"
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
