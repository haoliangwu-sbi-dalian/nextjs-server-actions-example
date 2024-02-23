import Image from "next/image";

import LoginForm from "@/components/LoginForm";
import OnlineUsers from "@/components/OnlineUsers";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <OnlineUsers />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <LoginForm />
      </div>
    </main>
  );
}
