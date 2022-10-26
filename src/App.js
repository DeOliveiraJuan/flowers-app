import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/misc/Navbar/Navbar'
//import { useAuthContext } from "./contexts/AuthContext";
import HomeScreen from "./screens/Home/HomeScreen";
import Login from './screens/Login/Login';
import Signup from "./screens/Signup/Signup";

function App() {
 // const { isAuthFetched } = useAuthContext()

  return (
    <div className="App">
     <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
