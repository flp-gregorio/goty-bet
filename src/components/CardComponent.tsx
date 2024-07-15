interface CardComponentProps {
    nominee?: string;
    aux?: string;
    src?: string;
  }
  
  const CardComponent = (props: CardComponentProps) => {
    return (
      <div className="w-full h-full">
        <div className="relative hover:grayscale transition-all duration-500 w-full h-full">
          <img
            src={props.src ?? "https://i.pinimg.com/736x/fd/0a/78/fd0a7888a1165a085fabf22a1ac3fd41.jpg"}
            alt="game image"
            className="block w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-4">
            <h2 className="text-2xl uppercase font-bold">{props.nominee ?? "NULL"}</h2>
            <h3 className="text-lg uppercase font-thin">{props.aux ?? "NULL"}</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardComponent;  