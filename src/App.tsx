import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/home/Main";
import Register from "./user/Register";
import Login from "./user/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
