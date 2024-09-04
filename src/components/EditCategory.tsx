import { useState, useEffect } from "react";
import NomineeInputComponent from "./NomineeInputComponent";
import ButtonComponent from "./ButtonComponent";
import api from "../lib/api";
import { Category } from "../@types/NomineeType";

interface EditCategoryProps {
  category: Category | null;
  onSave: () => void;
}

const EditCategory = ({ category, onSave }: EditCategoryProps) => {
  const [title, setTitle] = useState(category?.title || "");
  const [description, setDescription] = useState(category?.description || "");
  const [weight, setWeight] = useState(category?.weight.toString() || "");

  useEffect(() => {
    if (category) {
      setTitle(category.title);
      setDescription(category.description);
      setWeight(category.weight.toString());
    }
  }, [category]);

  const handleSaveCategory = async () => {
    if (title && description && weight) {
      try {
        if (category) {
          await api.put(`/categories/${category.id}`, {
            title,
            description,
            weight: Number(weight),
          });
        } else {
          console.log("Creating new category with title:", title);
          await api.post("/categories", {
            title,
            description,
            weight: Number(weight),
          });
        }
        onSave();
      } catch (error) {
        console.error(
          "Error saving category:",
          (error as any).response ? (error as any).response.data : (error as any).message
        );
      }
    }
  };

  const handleDeleteCategory = async () => {
    if (category) {
      try {
        await api.delete(`/categories/${category.id}`);
        onSave();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <NomineeInputComponent
        label="Category Title"
        placeholder="Category Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <NomineeInputComponent
        label="Category Description"
        placeholder="Category Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <NomineeInputComponent
        label="Category Weight"
        placeholder="Category Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div className="grid grid-flow-col gap-5">
        {category ? (
          <>
            <ButtonComponent
              onClick={handleSaveCategory}
              text="Update Category"
            />
            <ButtonComponent
              onClick={handleDeleteCategory}
              text="Delete Category"
            />
          </>
        ) : (
          <ButtonComponent onClick={handleSaveCategory} text="Create Category" />
        )}
      </div>
    </div>
  );
};

export default EditCategory;
