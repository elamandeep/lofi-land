import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
