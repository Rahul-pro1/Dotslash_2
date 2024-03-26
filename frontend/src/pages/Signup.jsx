import { React, useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      console.log("Contents successfully sent");
    } catch (err) {
      console.log("There has been an error", err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex justify-center items-center">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Signup</h2>
          <form onSubmit={registerUser}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 block w-full rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input mt-1 block w-full rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Re Type Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input mt-1 block w-full rounded-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
