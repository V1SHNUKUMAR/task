import React, { useContext } from "react";
import UserComp from "./UserComp";
import MyContext from "../context/MyContext";

const Dashboard = () => {
  const context = useContext(MyContext);
  const { usersList, setIsFormOpen } = context;

  return (
    <div className="mt-10 mx-4 md:mt-7 md:m-10 max-w-7xl space-y-10 xl:mx-auto">
      <div className="flex justify-between items-center">
        <h1 className=" text-3xl font-extrabold md:text-5xl">List of Users</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-3 font-bold rounded-full bg-blue-500 shadow-xl shadow-blue-400 text-white duration-300 hover:scale-90 active:scale-75 scale-90 md:scale-100 md:px-5 md:py-4"
        >
          <i className="fa-solid fa-plus"></i> Add User
        </button>
      </div>
      <div className="border-b-2 border-dashed"></div>
      {usersList.length !== 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 md:gap-20">
          {usersList.map((currUser, index) => (
            <UserComp key={index} user={currUser} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-xl mx-auto my-52 font-semibold">
            No users to display
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
