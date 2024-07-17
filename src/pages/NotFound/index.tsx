import ButtonComponent from "../../components/ButtonComponent";

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center font-montserrat uppercase bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ButtonComponent text="go back to home" to="/" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
