import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const UserComp = (props) => {
  const context = useContext(MyContext);
  const { deleteUser, setIsViewMode, setIsFormOpen, setUserData, userData } =
    context;

  const { name, age, gender, food, hobbies, key } = props.user;

  const handleViewMode = () => {
    setIsViewMode(true);
    setIsFormOpen(true);
    setUserData(props.user);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setUserData({
      name: "",
      age: "",
      DOB: "",
      gender: "",
      food: "",
      hobbies: "",
    });

    setIsViewMode(false);
  };

  const handleEditMode = () => {
    setIsFormOpen(true);
    setUserData(props.user);
  };

  return (
    <div className="border text-start p-3 space-y-3 shadow-xl rounded-2xl md:p-5 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">{name}</h1>
        <div
          style={{
            backgroundColor: `${
              age < 25 ? "green" : age > 25 && age < 50 ? "purple" : "orange"
            }`,
          }}
          className="rounded-full p-4 w-min"
        ></div>
      </div>
      <hr />
      <p>
        Age : <span className="font-bold">{age}</span>
      </p>
      <p>
        DOB : <span className="font-bold">27/03/2001</span>
      </p>
      <p>
        Gender : <span className="font-bold">{gender}</span>
      </p>
      <p>
        Food : <span className="font-bold">{food}</span>
      </p>
      <p>
        Hobbies : <span className="font-bold">{hobbies}</span>
      </p>
      <hr />
      <div
        id="buttons"
        className="flex justify-between items-center text-white font-semibold"
      >
        <button
          onClick={() => deleteUser(key)}
          className="min-w-[65px] rounded-md bg-red-400 shadow-lg shadow-red-400 px-3 py-1.5 hover:scale-90 active:scale-75 duration-100"
        >
          Delete
        </button>
        <button
          onClick={handleViewMode}
          className="min-w-[65px] rounded-md bg-blue-400 shadow-lg shadow-blue-400 px-3 py-1.5 hover:scale-90 active:scale-75 duration-100"
        >
          View
        </button>
        <button className="min-w-[65px] rounded-md bg-blue-400 shadow-lg shadow-blue-400 px-3 py-1.5 hover:scale-90 active:scale-75 duration-100">
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserComp;
