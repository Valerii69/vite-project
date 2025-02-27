import { useActionState, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { InputComponent } from "./InputComponent";

export function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [error, submitAction, ] = useActionState(
    async (_: unknown, formData: FormData) => {
      setIsLoggedIn(false);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
          expiresInMins: 30, // optional, defaults to 60
        }),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      if (!response.ok) {
        return "Login failed. Please try again";
      }

      const result = await response.json();
          console.log(result);
          setIsLoggedIn(true);
    },
    null
  );

  return (
    <form action={submitAction}>
      <div className="mb-12">
        <label htmlFor="username" className="pr-12">
          Username:{" "}
        </label>
        <input type="text" name="username" required id="username" />
      </div>
      <div className="mb-12">
        <label htmlFor="password" className="pr-12">
          Password:{" "}
        </label>
        <input type="password" name="password" required id="password" />
      </div>
      {/* <button type="submit" className="button" disabled={isPending}>
       {isPending ? "Loading..." : "Login"}
      </button> */}
      <InputComponent />
      <SubmitButton />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoggedIn && <p style={{ color: "green" }}>Logged in successfully!</p>}
    </form>
  );
}

// valid login and password

/*   username: "emilys",
    password: "emilyspass", */
