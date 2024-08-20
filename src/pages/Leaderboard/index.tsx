import { useEffect, useState } from "react";
import LayoutSystemComponent from "../../components/Layouts/LayoutSystemComponent";
import LeaderboardComponent from "../../components/LeaderboardComponent";
import api from "../../lib/api";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
        console.log("Users:", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <LayoutSystemComponent>
      <LeaderboardComponent users={users} />
    </LayoutSystemComponent>
  );
};

export default Leaderboard;
