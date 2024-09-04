import { useState, useEffect } from "react";
import { Category, Nominee } from "../../@types/NomineeType";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import NavigationComponent from "../../components/NavigationComponent";
import api from "../../lib/api";

const Winners = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [winners, setWinners] = useState<{ [key: number]: number }>({});
  const [votes, setVotes] = useState<{ [key: number]: number[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await api.get("/categories");
        setCategories(categoryResponse.data);

        // Fetch winners
        const winnersResponse = await api.get("/winners");
        const winnersMap = winnersResponse.data.reduce(
          (
            map: { [key: number]: number },
            winner: { categoryid: number; nomineeid: number }
          ) => {
            map[winner.categoryid] = winner.nomineeid;
            return map;
          },
          {}
        );
        setWinners(winnersMap);

        // Fetch votes
        const votesResponse = await api.get("/votes");
        const votesMap = votesResponse.data.reduce(
          (
            map: { [key: number]: number[] },
            vote: { categoryid: number; nomineeid: number }
          ) => {
            if (!map[vote.categoryid]) {
              map[vote.categoryid] = [];
            }
            map[vote.categoryid][vote.nomineeid] =
              (map[vote.categoryid][vote.nomineeid] || 0) + 1;
            return map;
          },
          {}
        );
        setVotes(votesMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  const renderProgressBar = (
    nominee: Nominee,
    voteCount: number,
    isWinner: boolean
  ) => {
    const maxVotes = Math.max(...(votes[currentCategory?.id] || []), 1);
    const now = (voteCount / maxVotes) * 100;
    const labelName = isWinner
      ? `${nominee.name.toUpperCase()} • WINNER`
      : nominee.name.toUpperCase();
    const labelVotes = `${voteCount}`;
    const progressBarBg = isWinner ? "bg-red-600" : "bg-orange-600";

    return (
      <div key={nominee.id} className="flex mb-3 md:h-10 h-fit">
        <div className="w-full font-barlow">
          <div className="w-full bg-zinc-900 pb-2 md:pb-0">
            <div
              className={`min-h-10 ${progressBarBg} flex text-white font-bold`}
              style={{ width: `${now}%` }}
            >
              <div className="flex justify-between w-full px-4 items-center">
                <div className="flex-grow md:text-nowrap text-white font-bold uppercase tracking-wider antialiased md:overflow-clip">
                  {labelName}
                </div>
                <div className={`${voteCount === 0 ? "hidden" : "shown"}`}>
                  {labelVotes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentCategory: Category = categories[currentCategoryIndex];
  const currentVotes = votes[currentCategory?.id] || [];

  if (categories.length === 0 || !currentCategory) {
    return (
      <LayoutSystemComponent>
        <div className="flex justify-center w-full">
          <div className="bg-transparent md:px-10 flex flex-col w-3/4 mx-auto">
            <div className="flex justify-center my-4">
              <h1 className="text-white uppercase font-barlow text-2xl font-bold">
                Category not available
              </h1>
            </div>
          </div>
        </div>
      </LayoutSystemComponent>
    );
  }

  const winnerId = winners[currentCategory.id];

  return (
    <LayoutSystemComponent>
      <NavigationComponent
        onPrevious={handlePreviousCategory}
        onNext={handleNextCategory}
        headerText={currentCategory.title || "Category"}
      />
      <div className="flex justify-center w-full">
        <div className="bg-transparent md:px-10 flex flex-col w-3/4 mx-auto">
          <div className="flex justify-end my-4">
            <h1 className="text-white uppercase font-barlow text-2xl font-bold">
              {currentCategory.description}
            </h1>
          </div>
          {currentCategory &&
          currentCategory.nominees &&
          currentCategory.nominees.length > 0 ? (
            currentCategory.nominees.map((nominee) =>
              renderProgressBar(
                nominee,
                currentVotes[nominee.id] || 0,
                nominee.id === winnerId
              )
            )
          ) : (
            <div className="text-white text-center uppercase font-barlow text-1xl">
              No nominees available for this category.
            </div>
          )}
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default Winners;
