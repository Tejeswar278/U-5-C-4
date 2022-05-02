import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtextedRoute";

function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        <Route path="/orders" element={<ProtectedRoute><Orders></Orders></ProtectedRoute>}/>
        <Route path="/neworder" element={<ProtectedRoute><NewOrder></NewOrder></ProtectedRoute>}/>
        <Route path="/Protectedroute" element={<ProtectedRoute></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
