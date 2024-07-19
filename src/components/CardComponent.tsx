import React, { useState } from 'react';

interface CardComponentProps {
  nominee: string;
  aux?: string;
  genre?: string;
  active: boolean;
  setActiveCard: (nominee: string) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ nominee, aux = "NULL", genre = "", active, setActiveCard }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setActiveCard(nominee);
    setIsActive(!isActive);
  };

  return (
    <div
      className={`relative overflow-hidden aspect-square w-52 container text-left group hover:translate-x-3 hover:translate-y-3  transition-all duration-300 cursor-pointer 
        ${active ? 'bg-black text-white translate-x-3 translate-y-3' : 'bg-white text-black'}
      `}
      onClick={handleCardClick}
    >
      <div className="p-3 ">
        <h1 className="font-montserrat font-bold relative text-lg tracking-tight">{nominee}</h1>
        <h2 className={`font-barlow text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300  ${active ? 'opacity-100 ' : '-translate-x-10'}`}>{aux}</h2>
        <h3 className={`font-barlow text-xs font-normal opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300  ${active ? 'opacity-100 ' : '-translate-x-10'}`}>{genre}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
