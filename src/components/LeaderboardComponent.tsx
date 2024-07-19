import { useState } from "react";
import WhiteButtonComponent from "./WhiteButtonComponent";

interface User {
  name: string;
  points: number;
}

interface LeaderboardComponentProps {
  users: User[];
}

const LeaderboardComponent = (props: LeaderboardComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const users = props.users.sort((a, b) => b.points - a.points);
  const maxPage = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1) {
      setCurrentPage(maxPage);
    } else if (pageNumber > maxPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
    console.log(pageNumber);
  };

  return (
    <div className="container mx-auto px-20 pt-4 text-center antialiased overflow-hidden">
      <h1 className="text-3xl font-bold text-white mb-4 font-montserrat uppercase">
        Leaderboard
      </h1>
      <ul className="font-montserrat uppercase">
        {currentUsers.map((user, index) => {
          const overallIndex = indexOfFirstUser + index + 1;
          return (
            <li
              key={overallIndex}
              className={`font-barlow font-bold uppercase tracking-wider flex items-center justify-between mb-2 py-2 ${overallIndex % 2 === 0 ? "bg-orange-700 " : "bg-orange-800"} hover:filter hover:brightness-125`}
            >
              <div>
                <span className="text-white pl-4">{overallIndex}</span>
                <span className="text-white pl-4 ">{user.name}</span>
              </div>
              <div className="text-left">
                <span className="text-white pr-4">Points: {user.points}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex flex-row justify-evenly">
        <WhiteButtonComponent
          text="Previous"
          type={true}
          click={() => handlePageChange(currentPage - 1)}
        />
        <WhiteButtonComponent
          text="Next"
          type={false}
          click={() => handlePageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
};

export default LeaderboardComponent;
