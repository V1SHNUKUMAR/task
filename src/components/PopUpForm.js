import React, { useContext, useRef } from "react";
import MyContext from "../context/MyContext";

const PopUpForm = () => {
  const context = useContext(MyContext);
  const {
    addUser,
    setIsFormOpen,
    userData,
    setUserData,
    isViewMode,
    setIsViewMode,
  } = context;

  const foodOptions = ["Pizza", "Burger", "Pasta"];

  const errorDiv = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.age &&
      userData.DOB &&
      userData.gender &&
      userData.food &&
      userData.hobbies
    ) {
      addUser(userData);
      setIsFormOpen(false);
      setUserData({
        name: "",
        age: "",
        DOB: "",
        gender: "",
        food: "",
        hobbies: "",
      });
    } else {
      errorDiv.current.style.transform = "translateY(0%)";
      //   errorDiv.current.style.border = "2px solid red";
    }
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

  return (
    <div className="rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-[95vw] max-w-4xl space-y-8 px-3 py-5 sm:p-5">
      <h1 className="text-2xl font-semibold">Add User</h1>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-x-10 place-items-center">
        {/* Name */}
        <div id="name" className="w-full flex flex-col items-start gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            disabled={isViewMode}
            className="w-full rounded-md p-2 border border-black outline-none bg-transparent focus:bg-white"
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData.name}
          />
        </div>
        {/* age */}
        <div id="age" className="w-full flex flex-col items-start gap-1">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            disabled={isViewMode}
            className="w-full rounded-md p-2 border border-black outline-none bg-transparent focus:bg-white"
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            value={userData.age}
          />
        </div>
        {/* DOB */}
        <div id="age" className="w-full flex flex-col items-start gap-1">
          <label htmlFor="age">DOB</label>
          <input
            type="date"
            name="age"
            id="age"
            disabled={isViewMode}
            className="w-full rounded-md p-2 border border-black outline-none bg-transparent focus:bg-white"
            onChange={(e) => setUserData({ ...userData, DOB: e.target.value })}
            value={userData.DOB}
          />
        </div>
        {/* gender */}
        <div
          id="gender"
          className="w-full flex flex-col justify-center items-start gap-1"
        >
          <label htmlFor="gender">Gender</label>
          <div id="gender" className="space-x-4 flex">
            <div className="space-x-2">
              <input
                type="radio"
                htmlFor="male"
                id="male"
                name="gender"
                disabled={isViewMode}
                value="Male"
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="space-x-2">
              <input
                type="radio"
                htmlFor="female"
                id="female"
                name="gender"
                disabled={isViewMode}
                value="Female"
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        {/* food */}
        <div id="food" className="w-full flex flex-col items-start gap-1">
          <label htmlFor="food">Favorite Food</label>
          <select
            className="border bg-transparent border-black rounded-lg w-full p-2"
            value={userData.food}
            disabled={isViewMode}
            onChange={(e) => setUserData({ ...userData, food: e.target.value })}
          >
            {foodOptions.map((food, index) => (
              <option key={index} value={food}>
                {food}
              </option>
            ))}
          </select>
        </div>
        {/* hobbies */}
        <div id="hobbies" className="w-full flex flex-col items-start gap-1">
          <label htmlFor="hobbies">Hobbies</label>
          <textarea
            name="hobbies"
            id="hobbies"
            disabled={isViewMode}
            className="w-full rounded-md p-2 border border-black outline-none bg-transparent focus:bg-white"
            onChange={(e) =>
              setUserData({ ...userData, hobbies: e.target.value })
            }
            value={userData.hobbies}
            rows={3}
          />
        </div>
      </form>
      <div className="overflow-hidden">
        <h1
          ref={errorDiv}
          className="text-red-500 font-bold translate-y-full duration-300"
        >
          Please fill all the details
        </h1>
      </div>
      <div
        id="buttons"
        className="flex justify-end items-center gap-4 text-white font-semibold"
      >
        <button
          onClick={handleCancel}
          className="rounded-md bg-red-400 shadow-lg shadow-red-400 px-3 py-1.5 hover:scale-90 active:scale-75 duration-100"
        >
          Cancel
        </button>
        <button
          style={{ display: `${isViewMode ? "none" : "block"}` }}
          onClick={handleSubmit}
          type="submit"
          className="rounded-md bg-blue-500 shadow-lg shadow-blue-400 px-3 py-1.5 hover:scale-90 active:scale-75 duration-100"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PopUpForm;
