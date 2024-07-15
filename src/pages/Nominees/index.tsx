import React, { useState } from 'react';
import LayoutComponent from "../../components/Layouts/LayoutComponent";
import CardComponent from '../../components/CardComponent'; // Assuming you import your CardComponent
import jsonData from "../../assets/data.json";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CategoriesData, NomineeData } from '../../@types/NomineeType';

const Nominees = () => {
  const categories = Object.keys(jsonData);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const cardsData: NomineeData[] = jsonData[categories[currentCategoryIndex]];
  const numCards = cardsData ? Math.min(cardsData.length, 6) : 0;

  return (
    <LayoutComponent>
      <div className='flex flex-col items-center text-center text-white uppercase font-roboto-mono w-full mt-4'>
        <h1 className='font-bold text-3xl'>{categories[currentCategoryIndex]}</h1>
        <div className='flex justify-evenly font-bold text-2xl w-full'>
          <button className='uppercase' onClick={handlePreviousCategory}><FaArrowLeft /> </button>
          <button className='uppercase' onClick={handleNextCategory}><FaArrowRight /></button>
        </div>
        <div className='w-2/3 mt-10'>
          <div className="w-8/12 grid grid-cols-3 gap-3 mx-auto">
            {Array.from({ length: numCards }).map((_, index) => (
              <CardComponent
                key={index}
                nominee={cardsData[index]?.Nominee}
                aux={cardsData[index]?.Publisher}
                genre={cardsData[index]?.Genre}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}

export default Nominees;
