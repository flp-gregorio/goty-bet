import React, { useState, useEffect } from 'react';
import NomineeInputComponent from './NomineeInputComponent';
import ButtonComponent from './ButtonComponent';
import api from '../lib/api';

interface Nominee {
  id: number;
  name: string;
  description: string;
  developer: string;
  genre: string;
}

interface Category {
  id: number;
  title: string;
  description: string;
  weight: number;
  nominees: Nominee[];
}

interface EditNomineeProps {
  category: Category | null;
}

const EditNominee: React.FC<EditNomineeProps> = ({ category }) => {
  const [nominees, setNominees] = useState<Nominee[]>([]);
  const [newNominee, setNewNominee] = useState<Nominee>({
    id: 0,
    name: '',
    description: '',
    developer: '',
    genre: '',
  });

  useEffect(() => {
    if (category && category.nominees) {
      setNominees(category.nominees);
    }
  }, [category]);

  const handleNomineeChange = (id: number, field: keyof Nominee, value: string) => {
    setNominees((prevNominees) =>
      prevNominees.map((nominee) =>
        nominee.id === id ? { ...nominee, [field]: value } : nominee
      )
    );
  };

  const handleNewNomineeChange = (field: keyof Nominee, value: string) => {
    setNewNominee({ ...newNominee, [field]: value });
  };

  const handleSaveNominee = async (nominee: Nominee) => {
    try {
      await api.put(`categories/${category?.id}/nominees/${nominee.id}`, nominee);
      setNominees((prevNominees) =>
        prevNominees.map((n) => (n.id === nominee.id ? nominee : n))
      );
    } catch (error) {
      console.error('Error saving nominee:', error);
    }
  };

  const handleAddNominee = async () => {
    if (!category) return;

    try {
      const response = await api.post(`/categories/${category.id}/nominees`, newNominee);
      setNominees([...nominees, response.data]);
      setNewNominee({
        id: 0,
        name: '',
        description: '',
        developer: '',
        genre: '',
      });
    } catch (error) {
      console.error('Error adding nominee:', error);
    }
  };

  return (
    <div className="mt-4">
      {nominees.map((nominee) => (
        <div key={nominee.id} className="flex flex-col items-center">
          <NomineeInputComponent
            label="Nominee Name"
            placeholder="Nominee Name"
            value={nominee.name}
            onChange={(e) => handleNomineeChange(nominee.id, 'name', e.target.value)}
          />
          <NomineeInputComponent
            label="Nominee Description"
            placeholder="Nominee Description"
            value={nominee.description}
            onChange={(e) => handleNomineeChange(nominee.id, 'description', e.target.value)}
          />
          <NomineeInputComponent
            label="Developer"
            placeholder="Developer"
            value={nominee.developer}
            onChange={(e) => handleNomineeChange(nominee.id, 'developer', e.target.value)}
          />
          <NomineeInputComponent
            label="Genre"
            placeholder="Genre"
            value={nominee.genre}
            onChange={(e) => handleNomineeChange(nominee.id, 'genre', e.target.value)}
          />
          <ButtonComponent onClick={() => handleSaveNominee(nominee)} text="Save Nominee" />
        </div>
      ))}
      <div className="mt-4 flex flex-col items-center">
        <NomineeInputComponent
          label="Nominee Name"
          placeholder="Nominee Name"
          value={newNominee.name}
          onChange={(e) => handleNewNomineeChange('name', e.target.value)}
        />
        <NomineeInputComponent
          label="Nominee Description"
          placeholder="Nominee Description"
          value={newNominee.description}
          onChange={(e) => handleNewNomineeChange('description', e.target.value)}
        />
        <NomineeInputComponent
          label="Developer"
          placeholder="Developer"
          value={newNominee.developer}
          onChange={(e) => handleNewNomineeChange('developer', e.target.value)}
        />
        <NomineeInputComponent
          label="Genre"
          placeholder="Genre"
          value={newNominee.genre}
          onChange={(e) => handleNewNomineeChange('genre', e.target.value)}
        />
        <ButtonComponent onClick={handleAddNominee} text="Add Nominee" />
      </div>
    </div>
  );
};

export default EditNominee;
