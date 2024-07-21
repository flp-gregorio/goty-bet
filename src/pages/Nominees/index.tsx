import { useState } from "react";
import { Category, NomineeData } from "../../@types/NomineeType";
import jsonData from "../../assets/data.json";
import CardComponent from "../../components/CardComponent";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import NavigationComponent from "../../components/NavigationComponent";

const Nominees = () => {
  const categories = Object.keys(jsonData);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [activeNominees, setActiveNominees] = useState<{ [key: string]: string | null }>({});

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
  const cardsData: NomineeData[] = currentCategory.nominees;
  const numCards = cardsData ? Math.min(cardsData.length, 6) : 0;
  const activeNominee = activeNominees[currentCategoryKey] || null;

  const handleSetActiveCard = (nominee: string) => {
    setActiveNominees((prevActiveNominees) => ({
      ...prevActiveNominees,
      [currentCategoryKey]: nominee === activeNominee ? null : nominee,
    }));
    console.log(activeNominees);
  };

  return (
    <LayoutSystemComponent>
      <div className="flex flex-col items-center w-full">
        <NavigationComponent
          onPrevious={handlePreviousCategory}
          onNext={handleNextCategory}
          headerText={currentCategoryKey}
        />
        <p className="my-4 text-neutral-50 font-barlow tracking-wider md:max-w-2xl text-center mx-2">{currentCategory.description}</p>
        <div className="hidden lg:flex flex-col">
          <div className="grid gap-6 grid-cols-3 grid-rows-1">
            {cardsData.slice(0, 3).map((nomineeData, index) => (
              <CardComponent
                key={index}
                nominee={nomineeData.Nominee}
                aux={nomineeData.Publisher}
                genre={nomineeData.Genre}
                background={nomineeData.Image}
                active={nomineeData.Nominee === activeNominee}
                setActiveCard={handleSetActiveCard}
              />
            ))}
          </div>
          <div className="col-span-3 flex justify-center mt-6 flex-row">
            <div className={`grid gap-6 ${numCards % 3 === 0 ? 'grid-cols-3' : 'grid-cols-2'} grid-rows-1`}>
              {cardsData.slice(3, numCards).map((nomineeData, index) => (
                <CardComponent
                  key={index}
                  nominee={nomineeData.Nominee}
                  aux={nomineeData.Publisher}
                  genre={nomineeData.Genre}
                  background={nomineeData.Image}
                  active={nomineeData.Nominee === activeNominee}
                  setActiveCard={handleSetActiveCard}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:hidden grid gap-6 grid-cols-1 pb-12">
          {cardsData.map((nomineeData, index) => (
            <CardComponent
              key={index}
              nominee={nomineeData.Nominee}
              aux={nomineeData.Publisher}
              genre={nomineeData.Genre}
              background={nomineeData.Image}
              active={nomineeData.Nominee === activeNominee}
              setActiveCard={handleSetActiveCard}
            />
          ))}
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default Nominees;
