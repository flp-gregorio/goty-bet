import React from 'react';

interface CardComponentProps {
  nominee?: string;
  aux?: string;
  genre?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ nominee = "NULL", aux = "NULL", genre = "" }) => {
  return (
    <div className="relative flex flex-col justify-start items-start text-left bg-white h-48 w-48 p-4 text-black font-roboto-mono group overflow-hidden">
      <h1 className="relative font-bold text-lg tracking-tight">{nominee}</h1>
      <h2 className="text-sm  font-semibold opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-opacity duration-300 ease-in-out transition-transform duration-300 ease-in-out">{aux}</h2>
      <h3 className="text-xs font-normal opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-opacity duration-300 ease-in-out transition-transform duration-300 ease-in-out">{genre ?? ''}</h3>
    </div>
  );
};

export default CardComponent;
