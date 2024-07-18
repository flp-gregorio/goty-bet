import { useState } from "react";
import { Category } from "../../@types/NomineeType";
import jsonData from "../../assets/data.json";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import NavigationComponent from "../../components/NavigationComponent";
import WinnerComponent from "../../components/WinnerComponent";

const Winners = () => {
    const categories: string[] = Object.keys(jsonData);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex(
            (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
        );
    };

    const currentCategoryKey = categories[currentCategoryIndex];
    const currentCategory: Category = jsonData[currentCategoryKey];

    return (
        <LayoutSystemComponent>
            <NavigationComponent
                onPrevious={handlePreviousCategory}
                onNext={handleNextCategory}
                headerText={currentCategoryKey}
            />
            <div className="flex justify-center w-screen">
                <WinnerComponent
                    category={currentCategory.description}
                    data={currentCategory.nominees}
                />
            </div>
        </LayoutSystemComponent>
    );
};

export default Winners;
