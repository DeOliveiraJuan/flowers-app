import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/misc/Navbar/Navbar'
import FlowersScreen from "./screens/Flowers/FlowersScreen";
//import { useAuthContext } from "./contexts/AuthContext";
import HomeScreen from "./screens/Home/HomeScreen";
import Login from './screens/Login/LoginScreen';
import PlantsScreen from "./screens/Plants/PlantsScreen";
import Signup from "./screens/Signup/SignupScreen";
import UsersDetail from "./screens/Users/UsersDetailScreen";

function App() {
//const { isAuthFetched } = useAuthContext()

  return (
    <div className="App">
     <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants" element={<PlantsScreen />} />
        <Route path="/flowers" element={<FlowersScreen />} />
        <Route path="/userprofile" element={<UsersDetail />} />
      </Routes>
    </div>
  );
}

export default App;
