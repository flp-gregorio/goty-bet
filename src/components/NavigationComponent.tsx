import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type NavHeaderProps = {
  onPrevious: () => void;
  onNext: () => void;
  headerText: string;
};

const NavigationComponent = (props: NavHeaderProps) => {
  return (
    <div className="flex-row text-center text-white uppercase font-montserrat h-full w-full py-2 flex items-center justify-center font-bold text-3xl  bg-neutral-950">
      <button className="uppercase mr-2 text-xl" onClick={props.onPrevious}>
        <FaArrowLeft />
      </button>
      <h1 className="font-bold min-w-[36rem]">{props.headerText}</h1>
      <button className="uppercase ml-2 text-xl" onClick={props.onNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default NavigationComponent;
