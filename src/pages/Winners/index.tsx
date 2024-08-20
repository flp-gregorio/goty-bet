import { useState, useEffect } from "react";
import { Category } from "../../@types/NomineeType";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import NavigationComponent from "../../components/NavigationComponent";
import WinnerComponent from "../../components/WinnerComponent";
import api from "../../lib/api";

const Winners = () => {
    const [categories, setCategories] = useState ([]);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data);
                console.log("Categories:", categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex(
            (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
        );
    };

    const currentCategoryKey = categories[currentCategoryIndex];
    const currentCategory: Category = categories[currentCategoryKey];

    return (
        <LayoutSystemComponent>
            <NavigationComponent
                onPrevious={handlePreviousCategory}
                onNext={handleNextCategory}
                headerText={currentCategoryKey}
            />
            <div className="flex justify-center w-full">
                <WinnerComponent
                    category={currentCategory.description}
                    data={currentCategory.nominees}
                />
            </div>
        </LayoutSystemComponent>
    );
};

export default Winners;
