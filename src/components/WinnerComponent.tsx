import { NomineeData } from "../@types/NomineeType";

type WinnerComponentProps = {
  category: string;
  data: NomineeData[];
};

const WinnerComponent = (props: WinnerComponentProps) => {
  const getMaxVotes = () => {
    return Math.max(...props.data.map((nominee) => nominee.Votes));
  };

  const renderProgressBar = (nominee: NomineeData, maxVotes: number, isWinner: boolean) => {
    const now = (nominee.Votes / maxVotes) * 100;
    const labelName = isWinner ? `${nominee.Nominee.toUpperCase()} • winner` : `${nominee.Nominee.toUpperCase()}`;
    const labelVotes = `${nominee.Votes}`;
    const progressBarBg = isWinner ? "bg-red-600" : "bg-orange-600";

    return (
      <div key={nominee.Nominee} className="flex mb-3">
        <div className="w-full font-barlow">
          <div className="w-full h-10 bg-neutral-950">
            <div
              className={`h-10 ${progressBarBg} flex items-center text-white font-bold`}
              style={{ width: `${now}%` }}
            >
              <div className="flex justify-between w-full px-4">
                <div className="flex-grow text-nowrap text-white font-bold uppercase tracking-wider antialiased overflow-clip">
                  {labelName}
                </div>
                <div className={`${nominee.Votes === 0 ? 'hidden' : 'shown'}`}>
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
  const winnerIndex = props.data.findIndex((nominee) => nominee.Votes === maxVotes);

  return (
    <div className="bg-transparent px-10 flex flex-col w-2/3 mx-auto">
      <div className="flex justify-end mb-4 ">
        <h1 className="text-white uppercase font-barlow text-2xl font-bold">
          {props.category}
        </h1>
      </div>
      {props.data.map((nominee, index) =>
        renderProgressBar(nominee, maxVotes, index === winnerIndex)
      )}
    </div>
  );
};

export default WinnerComponent;
