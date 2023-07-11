import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/misc/Navbar/Navbar'
import { useAuthContext } from "./contexts/AuthContext";
import HomeScreen from "./screens/Home/HomeScreen";
import Signup from "./screens/Signup/SignupScreen";
import Login from './screens/Login/LoginScreen';
import Flowers from "./screens/Products/Flowers/FlowersScreen"
import Plants from "./screens/Products/Plants/PlantsScreen";
import UsersDetail from "./screens/Users/UserDetailScreen.jsx"
import UsersList from "./screens/Users/UsersListScreen"
import NewProduct from "./screens/Products/CreateProductScreen.jsx"
import ProductDetailScreen from "./screens/Products/ProductDetailScreen";
import UnprotectedRoute from './components/misc/UnprotectedRoute'
import ProtectedRoute from "./components/misc/ProtectedRoute";
import Footer from "./components/misc/Footer/Footer";
import ForgotPassword from "./screens/Login/ForgotPasswordScreen";
import AddressForm from "./screens/Address/AddressScreen";
import ShoppingCartDetail from "./screens/ShoppingCart/ShoppingCartDetail";
import ContactForm from "./screens/Contact/ContactScreen.jsx"

function App() {
const { isAuthFetched } = useAuthContext()

  return (
    <div className="App">
    <NavBar />
    {isAuthFetched ? (
      <Routes>
      
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<UnprotectedRoute><Login /></UnprotectedRoute>} />
        <Route path="/forgotpassword" element={<UnprotectedRoute><ForgotPassword /></UnprotectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UsersDetail /></ProtectedRoute>} />
        <Route path="/users/:id" element={<UsersDetail />} />
        <Route path="/userslist" element={<ProtectedRoute onlyAdmin><UsersList /></ProtectedRoute>} />
        <Route path="/users/addresses" element={<ProtectedRoute><AddressForm /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute onlyAdmin><NewProduct /></ProtectedRoute>} />
        <Route path="/products/:id" element={<ProductDetailScreen />} />
        <Route path="/products/flowers" element={<Flowers />} />
        <Route path="/products/plants" element={<Plants />} />
        <Route path="/users/cart" element={<ShoppingCartDetail />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    ) : (
      <h3>Cargando</h3>
    )}
    <Footer />
    </div>
  );
}

export default App;
