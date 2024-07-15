import React, { useState } from 'react';
import LayoutComponent from "../../components/Layouts/LayoutComponent";
import WinnerComponent from "../../components/WinnerComponent";
import NavHeaderComponent from '../../components/NavHeaderComponent';
import jsonData from "../../assets/data.json";
import { Category } from '../../@types/NomineeType';

const Winners = () => {
    const categories: string[] = Object.keys(jsonData);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    const currentCategoryKey = categories[currentCategoryIndex];
    const currentCategory: Category = jsonData[currentCategoryKey];

    return (
        <LayoutComponent>
            <div className='flex flex-col items-center text-center text-white uppercase font-roboto-mono w-full'>
                <NavHeaderComponent
                    onPrevious={handlePreviousCategory}
                    onNext={handleNextCategory}
                    headerText={currentCategoryKey}
                />
                <div className='w-2/3 mt-4'>
                    <WinnerComponent category={currentCategory.description} data={currentCategory.nominees} />
                </div>
            </div>
        </LayoutComponent>
    );
}

export default Winners;
