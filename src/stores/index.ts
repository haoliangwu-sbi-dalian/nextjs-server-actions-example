import fs from "node:fs/promises";
import path from "node:path";

interface User {
  username: string;
}

class UserStore {
  private db = path.resolve(process.cwd(), `src/stores/users.json`);

  async login(user: User) {
    const users = await this.listUsers();

    if (!users.find((u) => u.username === user.username)) {
      users.push(user);
      await fs.writeFile(this.db, JSON.stringify(users), "utf-8");
    } else {
      throw new Error("duplicated user");
    }
  }

  async listUsers(): Promise<User[]> {
    const rawUsers = await fs.readFile(this.db, "utf-8");

    return JSON.parse(rawUsers);
  }
}

export const userStore = new UserStore();
