import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type NavHeaderProps = {
  onPrevious: () => void;
  onNext: () => void;
  headerText: string;
};

const NavigationComponent = (props: NavHeaderProps) => {
  return (
    <>
      <div className="md:flex flex-grid items-center justify-center text-center text-white font-montserrat uppercase font-bold text-xl h-full w-full py-2 bg-neutral-950 md:flex-row md:justify-center md:items-center hidden">
        <button className="uppercase text-xl order-2" onClick={props.onPrevious}>
          <FaArrowLeft className="md:mr-0 mb-2 md:order-1" />
        </button>
        <h1 className="font-bold min-w-[24rem] text-xl order-1 md:order-2">{props.headerText}</h1>
        <button className="uppercase text-xl order-3" onClick={props.onNext}>
          <FaArrowRight className="md:ml-0 mt-2" />
        </button>
      </div>
      <div className="md:hidden flex flex-col items-center justify-center text-center text-white font-montserrat uppercase font-bold text-xl h-full w-full py-2 bg-neutral-950">
        <h1 className="font-bold min-w-[24rem] text-xl">{props.headerText}</h1>
        <div className="flex min-w-[24rem] justify-evenly items-center">
          <button className="uppercase text-xl" onClick={props.onPrevious}>
            <FaArrowLeft />
          </button>
          <button className="uppercase text-xl" onClick={props.onNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationComponent;
