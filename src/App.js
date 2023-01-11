import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import SignIn from "./components/login/SignIn";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
      </Routes>
    </div>
  );
}

export default App;
