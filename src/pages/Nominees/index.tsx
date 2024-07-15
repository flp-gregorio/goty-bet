import React, { useState } from 'react';
import LayoutComponent from "../../components/Layouts/LayoutComponent";
import CardComponent from '../../components/CardComponent';
import NavHeaderComponent from '../../components/NavHeaderComponent';
import jsonData from "../../assets/data.json";
import { NomineeData, Category } from '../../@types/NomineeType';

const Nominees = () => {
  const categories = Object.keys(jsonData);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [activeNominee, setActiveNominee] = useState<string | null>(null);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setActiveNominee(null);
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    setActiveNominee(null);
  };

  const currentCategoryKey = categories[currentCategoryIndex];
  const currentCategory: Category = jsonData[currentCategoryKey];
  const cardsData: NomineeData[] = currentCategory.nominees;
  const numCards = cardsData ? Math.min(cardsData.length, 6) : 0;

  const handleSetActiveCard = (nominee: string) => {
    setActiveNominee(nominee === activeNominee ? null : nominee); // Toggle active state
  };

  return (
    <LayoutComponent>
      <div className='flex flex-col items-center text-center text-white uppercase font-roboto-mono w-full'>
        <NavHeaderComponent 
          onPrevious={handlePreviousCategory}
          onNext={handleNextCategory}
          headerText={currentCategoryKey}
        />
        <p className='my-4'>{currentCategory.description}</p>
        <div className="grid gap-3 grid-cols-3 grid-rows-2">
          {cardsData.slice(0, numCards).map((nomineeData, index) => (
            <CardComponent
              key={index}
              nominee={nomineeData.Nominee}
              aux={nomineeData.Publisher}
              genre={nomineeData.Genre}
              active={nomineeData.Nominee === activeNominee}
              setActiveCard={handleSetActiveCard} // Pass down setActiveCard function
            />
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
}

export default Nominees;
