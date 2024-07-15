import React, { useState } from 'react';
import LayoutComponent from "../../components/Layouts/LayoutComponent";
import WinnerComponent from "../../components/WinnerComponent";
import jsonData from "../assets/data.json";
import { CategoriesData } from '../../@types/NomineeType';

const Winners: React.FC<{ title: string }> = ({ title }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);

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
            <WinnerComponent 
                category={categories[currentCategoryIndex]} 
                data={jsonData[categories[currentCategoryIndex] as keyof CategoriesData]} 
            />
            <div>
                <button onClick={handlePreviousCategory}>Previous</button>
                <button onClick={handleNextCategory}>Next</button>
            </div>
        </LayoutComponent>
    );
}

export default Winners;
