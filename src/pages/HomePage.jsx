import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { Users } from "../widgets";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const usersData = await fetchUsers();
      const users = usersData.data;

      setUsers([...users]);
    }

    getUsers();
  }, []);

  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default HomePage;
