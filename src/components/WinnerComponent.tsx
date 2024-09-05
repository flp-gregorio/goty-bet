import { Nominee } from "../@types/NomineeType";

type WinnerComponentProps = {
  category: string;
  data: Nominee[];
};

const WinnerComponent = (props: WinnerComponentProps) => {
  const getMaxVotes = () => {
    return Math.max(
      ...props.data.map((nominee) => nominee.Votes.length) // Counting votes by length
    );
  };

  const renderProgressBar = (
    nominee: Nominee,
    maxVotes: number,
    isWinner: boolean
  ) => {
    const voteCount = nominee.Votes.length; // Assuming you count the votes
    const now = (voteCount / maxVotes) * 100;
    const labelName = isWinner
      ? `${nominee.name.toUpperCase()} • winner`
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

  const maxVotes = getMaxVotes();
  const winnerIndex = props.data.findIndex(
    (nominee) => nominee.Votes.length === maxVotes
  );

  if (winnerIndex === -1) {
    return <p className="text-white">No data available</p>;
  }

  return (
    <div className="bg-transparent md:px-10 flex flex-col w-3/4 mx-auto">
      <div className="flex justify-end my-4 ">
        <h1 className="text-white uppercase font-barlow text-2xl font-bold">
          {props.category} - {props.data[winnerIndex]?.description || "No description available"}
        </h1>
      </div>
      {props.data.map((nominee, index) =>
        renderProgressBar(nominee, maxVotes, index === winnerIndex)
      )}
    </div>
  );
};

export default WinnerComponent;
