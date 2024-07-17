interface Props {
    text: string;
    type: boolean;
    click: () => void;
  }
  
const WhiteButtonComponent = (props: Props) => {
    const clipPath = props.type
        ? "polygon(0px 0px, calc(100% - 18px) 0px, 100% 18px, 100% 100%, 18px 100%, 0px calc(100% - 18px))"
        : "polygon(18px 0px, 100% 0px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0px 100%, 0px 18px)";
  
    return (
        <button
            onClick={props.click}
            className="bg-white min-w-32 px-4 py-1 mb-6 uppercase font-bold hover:bg-orange-800 hover:text-white transition-all duration-300"
            style={{ clipPath }}
        >
            {props.text}
        </button>
    );
  };
  
export default WhiteButtonComponent;  