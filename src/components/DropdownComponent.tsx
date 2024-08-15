import { useState, useEffect } from "react";
import NomineeInputComponent from "./NomineeInputComponent";
import ButtonComponent from "./ButtonComponent";
import api from "../lib/api";

type Category = {
  id: number;
  title: string;
  description: string;
  weight: number;
  nominees: [];
};

const Dropdown = ({ onCategorySelect }: { onCategorySelect: (category: Category | null) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [newCategoryWeight, setNewCategoryWeight] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get<Category[]>("/categories");
        setCategories(res.data || []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      onCategorySelect(selectedCategory); 
    } else {
      onCategorySelect(null); 
    }
  }, [selectedCategory, onCategorySelect]);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsAddingCategory(false);
    setIsOpen(false);
  };

  const handleAddCategory = async () => {
    if (newCategoryTitle && newCategoryDescription) {
      try {
        const response = await api.post("/categories", {
          title: newCategoryTitle,
          description: newCategoryDescription,
          weight: Number(newCategoryWeight),
        });
        const newCategory = response.data as Category;
        setCategories([...categories, newCategory]);
        setNewCategoryTitle("");
        setNewCategoryDescription("");
        setNewCategoryWeight("");
        setIsAddingCategory(false);
        setSelectedCategory(newCategory);
        onCategorySelect(newCategory); // Notify parent of new category
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mt-6 font-montserrat relative w-full">
      <button
        id="dropdownCategoriesButton"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 text-gray-700 placeholder-gray-400 bg-zinc-950 border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-orange-700"
        type="button"
      >
        <span>
          {selectedCategory ? selectedCategory.title : "Select Category"}
        </span>
        <svg
          className="w-auto h-2.5 inline-block float-right"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdownCategories"
          onMouseLeave={() => setIsOpen(false)}
          className="absolute z-10 bg-zinc-950 shadow w-full dark:bg-zinc-950"
        >
          <ul
            className="max-h-80 py-2 overflow-y-scroll text-gray-700 dark:text-gray-200 dark:border-orange-700"
            aria-labelledby="dropdownCategoriesButton"
          >
            {categories.length > 0 ? (
              categories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center justify-between"
                >
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="flex-grow items-center px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-zinc-600 dark:hover:text-white"
                  >
                    {category.title}
                  </button>
                  <button
                    id="deleteCategoryButton"
                    type="button"
                    className="text-red-500 dark:text-red-500 bg-transparent p-3 hover:bg-red-500 hover:text-white transition-all duration-75 mx-4"
                    onClick={async () => {
                      try {
                        await api.delete(`/categories/${category.id}`);
                        setCategories(
                          categories.filter((c) => c.id !== category.id)
                        );
                        if (selectedCategory?.id === category.id) {
                          setSelectedCategory(null);
                          onCategorySelect(null); // Notify parent of no category selection
                        }
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    <svg
                      className="w-2.5 h-2.5 inline-block float-right"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l8 8M9 1l-8 8"
                      />
                    </svg>
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-2">No categories available</li>
            )}
            <li>
              <button
                onClick={() => {
                  setIsAddingCategory(true);
                  setIsOpen(false);
                  setSelectedCategory(null);
                  onCategorySelect(null); // Notify parent of no category selection
                }}
                className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-zinc-600 dark:hover:text-white"
              >
                Add Category
              </button>
            </li>
          </ul>
        </div>
      )}
      {isAddingCategory && (
        <div className="mt-4 flex flex-col items-center">
          <NomineeInputComponent
            label="Category Title"
            placeholder="Category Title"
            value={newCategoryTitle}
            onChange={(e) => setNewCategoryTitle(e.target.value)}
          />
          <NomineeInputComponent
            label="Category Description"
            placeholder="Category Description"
            value={newCategoryDescription}
            onChange={(e) => setNewCategoryDescription(e.target.value)}
          />
          <NomineeInputComponent
            label="Weight"
            placeholder="Category Weight"
            value={newCategoryWeight}
            onChange={(e) => setNewCategoryWeight(e.target.value)}
          />
          <ButtonComponent
            text="Add Category"
            type="button"
            onClick={handleAddCategory}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
