import { MdOutlineFavoriteBorder } from "react-icons/md";

const UserInfo = ({ userInfo: { name, username, email } }) => {
  console.log(name);
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
 
        <MdOutlineFavoriteBorder />
      
    </div>
  );
};

export default UserInfo;
