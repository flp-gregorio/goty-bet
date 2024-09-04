import { useState, useEffect } from "react";
import Dropdown from "../../components/DropdownComponent";
import TabSelector from "../../components/TabSelectorComponent";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import EditCategory from "../../components/EditCategory";
import EditNominee from "../../components/EditNominee";
import { Category, Nominee } from "../../@types/NomineeType";
import api from "../../lib/api";

const AdminDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedNomineeEdit, setNomineeEdit] = useState<Nominee | null>(null);
  const [selectedNominee, setSelectedNominee] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [nominees, setNominees] = useState<Nominee[]>([]);

  // Fetch categories on page load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get<Category[]>("/categories");
        setCategories(response.data || []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch nominees when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      const fetchNominees = async () => {
        try {
          const response = await api.get<Nominee[]>(
            `/categories/${selectedCategory.id}/nominees`
          );
          setNominees(response.data || []);
        } catch (error) {
          console.error("Failed to fetch nominees", error);
        }
      };

      fetchNominees();
    }
  }, [selectedCategory]);

  // Handle category selection
  const handleCategorySelect = (category: Category | null) => {
    if (category === null) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setNominees([]);
    }
  };

  // Handle nominee selection
  const handleNomineeSelect = (nomineeId: number) => {
    setSelectedNominee(nomineeId);
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get<Category[]>("/categories");
      setCategories(response.data || []);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  return (
    <LayoutSystemComponent>
      <div className="flex justify-center min-h-[85vh]">
        <div className="bg-zinc-900 p-8 shadow-md max-w-xl w-full mx-auto my-2 overflow-visible">
          <TabSelector
            tabs={[
              { id: 1, title: "Categories" },
              { id: 2, title: "Nominees" },
              { id: 3, title: "Winners" },
            ]}
          >
            <div className="mb-6">
              <Dropdown
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
              {selectedCategory === null ? (
                <EditCategory
                  category={null}
                  onSave={() => {
                    fetchCategories();
                    setSelectedCategory(null);
                  }}
                />
              ) : (
                selectedCategory && (
                  <EditCategory
                    category={selectedCategory}
                    onSave={() => {
                      fetchCategories();
                      setSelectedCategory(null);
                    }}
                  />
                )
              )}
            </div>
            <div className="mb-6">
              <Dropdown
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
              {selectedCategory && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-200 mb-4">
                    Nominees for {selectedCategory.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {nominees.map((nominee) => (
                      <button
                        key={nominee.id}
                        onClick={() => {
                          console.log("Selected nominee:", nominee); // Debugging
                          setNomineeEdit(nominee);
                        }}
                        className="text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                      >
                        {nominee.name}
                      </button>
                    ))}
                  </div>
                  {selectedNomineeEdit && (
                    <div className="mt-4">
                      <EditNominee
                        nominee={selectedNomineeEdit}
                        categoryID={selectedCategory.id}
                        onSave={() => {
                          setNomineeEdit(null);
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <Dropdown
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
              {selectedCategory && (
                <div className="mt-4 p-4 bg-zinc-950">
                  <h2 className="text-xl font-semibold text-gray-200 mb-4">
                    Select winner for {selectedCategory.title}
                  </h2>
                  <form>
                    {nominees.map((nominee) => (
                      <div key={nominee.id} className="flex items-center mb-4">
                        <div className="flex flex-shrink-0 justify-center items-center relative">
                          <input
                            aria-labelledby={`nominee-${nominee.id}`}
                            type="radio"
                            name="winner"
                            value={nominee.id}
                            checked={selectedNominee === nominee.id}
                            onChange={() => handleNomineeSelect(nominee.id)}
                            className="absolute opacity-0 peer"
                          />
                          <div
                            className={`w-4 h-4 rounded-full flex justify-center items-center ${
                              selectedNominee === nominee.id
                                ? "bg-orange-700"
                                : "bg-gray-400"
                            }`}
                          >
                            {selectedNominee === nominee.id && (
                              <div className="w-2 h-2 rounded-full bg-orange-700" />
                            )}
                          </div>
                        </div>
                        <label
                          id={`nominee-${nominee.id}`}
                          className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100"
                        >
                          {nominee.name}
                        </label>
                      </div>
                    ))}
                  </form>
                </div>
              )}
            </div>
          </TabSelector>
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default AdminDashboard;
