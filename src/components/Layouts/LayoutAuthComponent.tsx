import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  src: string;
  children: ReactNode;
}

const LayoutAuthComponent = (props: Props) => {
  return (
    <div className="bg-zinc-950">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(${props.src})`,
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"></div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-zinc-950">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                {props.title}
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                {props.description}
              </p>
            </div>
            <div className="mt-8">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuthComponent;
