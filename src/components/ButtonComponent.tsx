import { Link } from "react-router-dom";
interface Props {
  text: string;
  to: string;
}

const ButtonComponent = (props: Props) => {
  return (
    <Link to={props.to}>
      <button
        className="uppercase font-montserrat w-full px-4 py-2 tracking-wider text-white transition-colors duration-200 transform bg-orange-700 hover:bg-orange-600 focus:outline-none focus:bg-orange-600 focus:ring focus:ring-orange-600 text-center focus:ring-opacity-50"
        style={{
          clipPath:
            "polygon(0px 0px, calc(100% - 18px) 0px, 100% 18px, 100% 100%, 18px 100%, 0px calc(100% - 18px))",
          padding: "9px 32px 9px 39px",
        }}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default ButtonComponent;
