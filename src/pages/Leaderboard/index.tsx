import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import LeaderboardComponent from "../../components/LeaderboardComponent";

const UsersTestData: User[] = [
  { name: 'John Doe', points: 200 },
  { name: 'Jane Doe', points: 100 },
  { name: 'John Smith', points: 300 },
  { name: 'Jane Smith', points: 400 },
  { name: 'John Johnson', points: 500 },
  { name: 'Jane Johnson', points: 600 },
  { name: 'John Jackson', points: 700 },
  { name: 'Jane Jackson', points: 800 },
  { name: 'John Brown', points: 900 },
  { name: 'Jane Brown', points: 1000 },
  { name: 'John White', points: 1100 },
  { name: 'Jane White', points: 1200 },
  { name: 'John Black', points: 1300 },
  { name: 'Jane Black', points: 1400 },
  { name: 'John Green', points: 1500 },
  { name: 'Jane Green', points: 1600 },
  { name: 'John Blue', points: 1700 },
  { name: 'Jane Blue', points: 1800 },
  { name: 'John Red', points: 1900 },
  { name: 'Jane Red', points: 2000 },
];

const Leaderboard = () => {
  return (
    <LayoutSystemComponent>
      <LeaderboardComponent users={UsersTestData}/>
    </LayoutSystemComponent>
  );
};

export default Leaderboard;
