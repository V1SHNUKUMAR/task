import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PopUpForm from "./components/PopUpForm";
import { useContext } from "react";
import MyContext from "./context/MyContext";

function App() {
  const context = useContext(MyContext);
  const { isFormOpen } = context;

  return (
    <div className="App">
      {/* to make the background dark on popup */}
      {isFormOpen ? (
        <div className="h-screen w-screen fixed z-20 bg-black/50"></div>
      ) : null}
      {/* Pop up form */}
      {isFormOpen ? <PopUpForm /> : null}
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
