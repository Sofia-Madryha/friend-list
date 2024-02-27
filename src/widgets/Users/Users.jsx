import { UserInfo } from "../../components";

const Users = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <UserInfo userInfo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
