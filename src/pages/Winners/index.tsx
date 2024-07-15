import React, { useState } from 'react';
import LayoutComponent from "../../components/Layouts/LayoutComponent";
import WinnerComponent from "../../components/WinnerComponent";
import jsonData from "../../assets/data.json";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CategoriesData } from '../../@types/NomineeType';

const Winners = () => {
    const categories = Object.keys(jsonData);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    return (
        <LayoutComponent>
            <div className='flex flex-col items-center text-center text-white uppercase font-roboto-mono w-full mt-4'>
                <h1 className='font-bold text-3xl'>{categories[currentCategoryIndex]}</h1>
                <div className='flex justify-evenly font-bold text-2xl w-full'>
                    <button className='uppercase' onClick={handlePreviousCategory}><FaArrowLeft/> </button>
                    <button className='uppercase' onClick={handleNextCategory}><FaArrowRight/></button>
                </div>
                <div className='w-2/3 mt-4'>
                    <WinnerComponent category={categories[currentCategoryIndex]} data={jsonData[categories[currentCategoryIndex]]} />
                </div>
            </div>
        </LayoutComponent>
    );
}

export default Winners;
