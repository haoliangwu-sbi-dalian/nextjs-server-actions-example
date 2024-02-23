import { userStore } from "@/stores";

const OnlineUsers = async () => {
  const users = await userStore.listUsers();

  return users.length > 0 ? (
    <div>
      Online Users:
      <ul>
        {users.map((u) => (
          <li key={u.username}>{u.username}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Online Users</div>
  );
};

export default OnlineUsers;
