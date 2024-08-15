import React, { useState, useEffect } from 'react';
import NomineeInputComponent from './NomineeInputComponent';
import ButtonComponent from './ButtonComponent';
import api from '../lib/api';

interface EditCategoryProps {
  category: Category | null;
  onSave: () => void;
}

const EditCategory: React.FC<EditCategoryProps> = ({ category, onSave }) => {
  const [title, setTitle] = useState(category?.title || '');
  const [description, setDescription] = useState(category?.description || '');
  const [weight, setWeight] = useState(category?.weight.toString() || '');

  useEffect(() => {
    if (category) {
      setTitle(category.title);
      setDescription(category.description);
      setWeight(category.weight.toString());
    }
  }, [category]);

  const handleSaveCategory = async () => {
    if (title && description) {
      try {
        if (category) {
          await api.put(`/categories/${category.id}`, {
            title,
            description,
            weight: Number(weight),
          });
        } else {
          await api.post('/categories', {
            title,
            description,
            weight: Number(weight),
          });
        }
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
      <ButtonComponent onClick={handleSaveCategory} text="Save Category" />
    </div>
  );
};

export default EditCategory;
