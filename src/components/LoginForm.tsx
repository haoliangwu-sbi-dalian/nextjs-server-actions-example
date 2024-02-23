"use client";

import { useFormState } from "react-dom";
import { login } from "@/actions";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction}>
      <label htmlFor="uname">Username:</label>
      <input type="text" id="uname" name="uname" />
      <label className="ml-4" htmlFor="pwd">
        Password:
      </label>
      <input type="password" id="pwd" name="pwd" />
      <br />
      <br />
      <button
        type="submit"
        className="border-2 border-solid border-gray-500 p-2 rounded-sm"
      >
        Submit
      </button>
      <span className="ml-4 text-red-500">{state?.msg}</span>
    </form>
  );
};

export default LoginForm;
