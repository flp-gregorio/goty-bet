const CardComponent = () => {
    return (
      <div className="flex gap-10 font-inter mt-10 justify-center">
        <div className="bg-white shadow-2xl " style={{ width: "300px" }}>
          <div className="relative hover:grayscale transition-all duration-500">
            <img
              src="https://cdn.thegameawards.com/1/2023/11/baldurs_gate_3.jpg"
              alt="game image"
              className="block w-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-4">
              <h2 className="text-2xl uppercase font-bold">Game Name</h2>
              <h3 className="text-lg uppercase font-thin">Game dev</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardComponent;