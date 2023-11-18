import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Layouts/Login";
import Main from "./Layouts/Main";
// import axios from "axios";
import Register from "./Layouts/Register";

function App() {
  const [user, setUser] = useState(false);
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  // const checkUser = () => {
  // localStorage.getItem("user") ? setUser(true) : setUser(false);
  //   user && setRegister(false);
  //   user && setLogin(false);
  // };
  // const checkReg = () => {
  //   if (!user) {
  //     setRegister(true);
  //     setLogin(false);
  //   }
  // };
  // const checkLogin = () => {
  //   if (!user || !register) {
  //     setLogin(true);
  //   }
  // };
  useEffect(() => {
    localStorage.getItem("user") ? setUser(true) : setUser(false);
    if (user) {
      setRegister(false);
      setLogin(false);
    }
    if (register) {
      setLogin(false);
      setUser(false);
    }
    if (login) {
      setRegister(false);
      setUser(false);
    }
  }, [user, register, login]);
  return (
    <div className="App">
      {user ? (
        <Main />
      ) : register ? (
        <Register onClick={() => setLogin(true)} />
      ) : (
        <Login onClick={() => setRegister(true)} />
      )}
    </div>
  );
}

export default App;
