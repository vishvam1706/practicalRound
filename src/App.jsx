import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./container/Login";
import Registration from "./container/Registration";
import Home from "./container/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
