import { useState } from 'react';

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

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto px-20 py-8 text-center antialiased">
            <h1 className="text-3xl font-bold text-white mb-4 font-montserrat uppercase">Leaderboard</h1>
            <ul className="font-montserrat uppercase">
                {currentUsers.map((user, index) => (
                    <li key={index} className={`font-barlow flex items-center justify-between mb-2 py-2 ${index % 2 === 0 ? 'bg-orange-700 ' : 'bg-orange-800'} `}>
                        <div>
                            <span className="text-white pl-4 text-lg">{index + 1}</span>
                            <span className="text-white pl-4 text-lg">{user.name}</span>
                        </div>
                        <div className="text-left">
                            <span className="text-white pr-4 text-base">Points: {user.points}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex flex-row justify-evenly">
                <button className="w-40 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 hover:bg-orange-600 focus:outline-none focus:bg-orange-600 focus:ring focus:ring-orange-600 focus:ring-opacity-50"
                    style={{
                        clipPath: "polygon(0px 0px, calc(100% - 18px) 0px, 100% 18px, 100% 100%, 18px 100%, 0px calc(100% - 18px))",
                        padding: "9px 32px 9px 39px",
                    }}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <button
                    className="w-40 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 hover:bg-orange-600 focus:outline-none focus:bg-orange-600 focus:ring focus:ring-orange-600 focus:ring-opacity-50"
                    style={{
                        clipPath:
                            "polygon(0px 0px, calc(100% - 18px) 0px, 100% 18px, 100% 100%, 18px 100%, 0px calc(100% - 18px))",
                        padding: "9px 32px 9px 39px",
                    }}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LeaderboardComponent;