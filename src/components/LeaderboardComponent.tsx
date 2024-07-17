import { useState } from 'react';
import WhiteButtonComponent from './WhiteButtonComponent';

interface User {
    name: string;
    points: number;
}

interface LeaderboardComponentProps {
    users: User[];
}

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

const LeaderboardComponent = (props: LeaderboardComponentProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const users = props.users || UsersTestData.sort((a, b) => b.points - a.points);
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
        <div className="container mx-auto px-20 py-8 text-center antialiased">
            <h1 className="text-3xl font-bold text-white mb-4 font-montserrat uppercase">Leaderboard</h1>
            <ul className="font-montserrat uppercase">
            {currentUsers.map((user, index) => {
                    const overallIndex = indexOfFirstUser + index + 1;
                    return (
                        <li key={overallIndex} className={`font-barlow flex items-center justify-between mb-2 py-2 ${overallIndex % 2 === 0 ? 'bg-orange-700 ' : 'bg-orange-800'} `}>
                            <div>
                                <span className="text-white pl-4 text-lg">{overallIndex}</span>
                                <span className="text-white pl-4 text-lg">{user.name}</span>
                            </div>
                            <div className="text-left">
                                <span className="text-white pr-4 text-base">Points: {user.points}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="mt-4 flex flex-row justify-evenly">
                <WhiteButtonComponent text="Previous" type={true} click={() => handlePageChange(currentPage - 1)} />
                <WhiteButtonComponent text="Next" type={false} click={() => handlePageChange(currentPage + 1)} />
            </div>
        </div>
    );
};

export default LeaderboardComponent;