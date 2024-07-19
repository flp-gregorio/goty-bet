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
      <div key={nominee.Nominee} className="flex mb-3 md:h-10 h-fit ">
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
    <div className="bg-transparent md:px-10 flex flex-col w-3/4 mx-auto">
      <div className="flex justify-end my-4 ">
        <h1 className="text-white uppercase font-barlow text-2xl font-bold">
          {props.data[winnerIndex].Description}
        </h1>
      </div>
      {props.data.map((nominee, index) =>
        renderProgressBar(nominee, maxVotes, index === winnerIndex)
      )}
    </div>
  );
};

export default WinnerComponent;
