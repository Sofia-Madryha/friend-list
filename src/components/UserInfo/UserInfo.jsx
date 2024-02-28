const UserInfo = ({ userInfo: { name, username, email } }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserInfo;
