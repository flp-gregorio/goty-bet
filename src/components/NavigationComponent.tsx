import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type NavHeaderProps = {
  onPrevious: () => void;
  onNext: () => void;
  headerText: string;
};

const NavigationComponent = (props: NavHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-center text-center text-white font-montserrat uppercase font-bold text-xs h-full w-full max-w-xs py-2 bg-neutral-950 flex-row md:max-w-screen-sm justify-around mx-auto">
        <button className="uppercase text-xl order-2" onClick={props.onPrevious}>
          <FaArrowLeft className="" />
        </button>
        <h1 className="font-bold md:min-w-[24rem] text-base order-1 order-2 mx-2 w-48">{props.headerText}</h1>
        <button className="uppercase text-xl order-3" onClick={props.onNext}>
          <FaArrowRight className="" />
        </button>
      </div>
    </>
  );
};

export default NavigationComponent;
