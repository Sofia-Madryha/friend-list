import { useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { Users } from "../widgets";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const usersData = await fetchUsers();
      const users = usersData.data;

      setUsers([...users]);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.length > 0 && <Users users={users} />}
      {error && <p>Something went wrong! Try later!</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
