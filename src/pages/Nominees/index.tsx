import { useState } from "react";
import { Category, NomineeData } from "../../@types/NomineeType";
import jsonData from "../../assets/data.json";
import CardComponent from "../../components/CardComponent";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import NavigationComponent from "../../components/NavigationComponent";

const Nominees = () => {
  const categories = Object.keys(jsonData);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [activeNominee, setActiveNominee] = useState<string | null>(null);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setActiveNominee(null);
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
    setActiveNominee(null);
  };

  const currentCategoryKey = categories[currentCategoryIndex];
  const currentCategory: Category = jsonData[currentCategoryKey];
  const cardsData: NomineeData[] = currentCategory.nominees;
  const numCards = cardsData ? Math.min(cardsData.length, 6) : 0;

  const handleSetActiveCard = (nominee: string) => {
    setActiveNominee(nominee === activeNominee ? null : nominee); // Toggle active state
  };

  return (
    <LayoutSystemComponent>
      <div className="flex flex-col items-center w-full">
        <NavigationComponent
          onPrevious={handlePreviousCategory}
          onNext={handleNextCategory}
          headerText={currentCategoryKey}
        />
        <p className="my-4 text-neutral-50 font-barlow tracking-wider max-w-screen-xl max-w-lg text-center">{currentCategory.description}</p>
        <div className="grid gap-6 grid-cols-3 grid-rows-1">
          {cardsData.slice(0, 3).map((nomineeData, index) => (
            <CardComponent
              key={index}
              nominee={nomineeData.Nominee}
              aux={nomineeData.Publisher}
              genre={nomineeData.Genre}
              active={nomineeData.Nominee === activeNominee}
              setActiveCard={handleSetActiveCard} // Pass down setActiveCard function
            />
          ))}
        </div>
        <div className="col-span-3 flex justify-center mt-6">
          <div className={`grid grid-cols-${numCards % 3 == 0 ? 3 : 2} gap-6`}>
            {cardsData.slice(3, numCards).map((nomineeData, index) => (
              <CardComponent
                key={index}
                nominee={nomineeData.Nominee}
                aux={nomineeData.Publisher}
                genre={nomineeData.Genre}
                active={nomineeData.Nominee === activeNominee}
                setActiveCard={handleSetActiveCard} // Pass down setActiveCard function
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default Nominees;
