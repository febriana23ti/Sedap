import { useState } from "react";
import userData from "../assets/users.json";
import PageHeader from "../components/PageHeader";

export default function Users() {
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (id) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <PageHeader title="Users" breadcrumb={["Users", "User Data"]}>
        <button
          onClick={() => window.location.href = "/formCust"}
          className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-4 text-l"
        >
          Add
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-lg mr-4 text-l">
          Export
        </button>
        <button
          onClick={() => window.location.href = "/"}
          className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-lg mr-1 text-l"
        >
          Back
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {userData.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">
              {item.firstName} {item.lastName}
            </h2>
            <p className="text-sm text-gray-600 capitalize">{item.gender}</p>
            <p className="text-sm text-gray-600">📧 {item.email}</p>
            <p className="text-sm text-gray-600">📞 {item.phone}</p>
            <p className="text-sm text-gray-600">🎂 {item.birthDate} ({item.age} years)</p>
            <p className="my-3"></p>
            <p className="text-sm text-gray-600 capitalize">Account:</p>
            <p className="text-sm text-gray-600 font-semibold">👤 {item.username}</p>

            <div className="flex items-center">
              <span className="text-sm text-gray-600">
                🔒 {showPassword[item.id] ? item.password : "••••••••"}
              </span>
              <button
                onClick={() => togglePassword(item.id)}
                className="ml-2 text-blue-600 hover:underline text-sm"
              >
                {showPassword[item.id] ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
