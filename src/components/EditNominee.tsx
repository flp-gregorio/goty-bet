import { useEffect, useState } from "react";
import NomineeInputComponent from "./NomineeInputComponent";
import ButtonComponent from "./ButtonComponent";
import api from "../lib/api";
import { Nominee } from "../@types/NomineeType";

interface EditNomineeProps {
  categoryID: number;
  nominee: Nominee | null;
  onSave: () => void;
}

const EditNominee = ({ categoryID, nominee, onSave }: EditNomineeProps) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    developer: "",
    genre: "",
  });

  useEffect(() => {
    if (nominee) {
      setFormData({
        name: nominee.name || "",
        description: nominee.description || "",
        developer: nominee.developer || "",
        genre: nominee.genre || "",
      });
    }
  }, [nominee]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveNominee = async () => {
    try {
      if (nominee) {
        await api.put(
          `categories/${categoryID}/nominees/${nominee.id}`,
          formData
        );
        onSave();
      }
    } catch (error) {
      console.error("Error saving nominee:", error);
    }
  };

  const handleDeleteNominee = async () => {
    try {
      if (nominee) {
        await api.delete(`categories/${categoryID}/nominees/${nominee.id}`);
        onSave();
      }
    } catch (error) {
      console.error("Error deleting nominee:", error);
    }
  };

  if (!nominee) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col items-center">
        <NomineeInputComponent
          label="Nominee Name"
          placeholder="Nominee Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <NomineeInputComponent
          label="Nominee Description"
          placeholder="Nominee Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <NomineeInputComponent
          label="Developer"
          placeholder="Developer"
          name="developer"
          value={formData.developer}
          onChange={handleChange}
        />
        <NomineeInputComponent
          label="Genre"
          placeholder="Genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <div className="grid grid-flow-col gap-5">
          <ButtonComponent onClick={handleSaveNominee} text="Save Nominee" />
          <ButtonComponent
            onClick={handleDeleteNominee}
            text="Delete Nominee"
          />
        </div>
      </div>
    </div>
  );
};

export default EditNominee;