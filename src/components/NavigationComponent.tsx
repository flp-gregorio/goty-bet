import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type NavHeaderProps = {
  onPrevious: () => void;
  onNext: () => void;
  headerText: string;
};

const NavigationComponent = (props: NavHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white font-montserrat uppercase font-bold text-xl h-full w-full py-2 bg-neutral-950 md:flex-row md:justify-center md:items-center">
      <button className="uppercase text-xl" onClick={props.onPrevious}>
        <FaArrowLeft className="md:mr-0 mb-2" />
      </button>
      <h1 className="font-bold min-w-[24rem] text-xl">{props.headerText}</h1>
      <button className="uppercase text-xl" onClick={props.onNext}>
        <FaArrowRight className="md:ml-0 mt-2" />
      </button>
    </div>
  );
};

export default NavigationComponent;
