import { Link } from "react-router-dom";
interface Props {
  text: string;
  to: string;
}

const ButtonComponent = (props: Props) => {
  return (
    <Link to={props.to}>
      <button
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
