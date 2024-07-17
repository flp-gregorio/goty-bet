interface Props {
  text: string;
}
const ButtonComponent = (props: Props) => {
  return (
    <button
      className="bg-orange-600  text-white font-bold py-2 px-4 relative overflow-hidden "
      style={{
        clipPath:
          "polygon(0px 0px, calc(100% - 18px) 0px, 100% 18px, 100% 100%, 18px 100%, 0px calc(100% - 18px))",
        padding: "9px 32px 9px 39px",
      }}
    >
      {props.text}
    </button>
  );
};

export default ButtonComponent;
