import { useState } from "react";
import { Category } from "../@types/NomineeType";

const Dropdown = ({ categories, onCategorySelect }: { categories: Category[]; onCategorySelect: (category: Category | null) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    onCategorySelect(category);
  };

  const handleNewCategoryClick = () => {
    setSelectedCategory(null); // Reset selection for new category
    setIsOpen(false);
    onCategorySelect(null); // Notify parent about new category
  };
  

  return (
    <div className="relative inline-block text-left mt-6 font-montserrat w-full">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 uppercase">
        Select a Category
      </label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full border border-gray-200 px-4 py-2 mt-2 bg-zinc-950 text-sm text-gray-700 dark:text-gray-300 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring-opacity-40"
      >
        {selectedCategory ? selectedCategory.title : "Select a category"}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707A1 1 0 015.293 7.293l4-4A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-2 w-full bg-zinc-950 border border-gray-200 max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              {category.title}
            </li>
          ))}
            <li 
            key={categories.length + 1}
            onClick={() => handleNewCategoryClick()}
            className="cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"> 
              New Entry
            </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
