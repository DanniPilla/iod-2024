"use client";
import { UserProvider } from "@/Context/UserContext";
import { LoginForm } from "@/Components/LoginForm";

function Page() {
  return (
    <div>
      <h1>Login</h1>
      <UserProvider>
        <LoginForm />
      </UserProvider>
    </div>
  );
}

export default Page;
