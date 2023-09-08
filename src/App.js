import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Ourorganics from "./Components/Ourorganics";
import Profile from "./Pages/Profile";
import Invest from "./Pages/Invest";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <header>
          <div class="logo"><a> Agriculture App 👨‍🌾🚜</a>
          </div>
            <div class="menu">
              <a>
                <ion-icon name="close" class="close"></ion-icon>
              </a>
            </div>
            <div class="search">
              <a href=""><input type="text" placeholder="search products" id="input1"></input>
                <ion-icon class="s" name="search"></ion-icon>
              </a>
            </div>
            <div class="heading">
                  <ul>
                    <li><a class="under">
                      <Link to="/" > Home </Link></a>
                    </li>
                    <li><a href="#section2" class="under">Shop</a></li>
                    <li><a href="#section2" class="under">
                      <Link to="/ourorganics" > Our Organics </Link></a>
                    </li>
                    <li><a href="#footer" class="under">
                      <Link to="/cart">🌿🛒</Link></a>
                    </li>
                    <li><a href="footer" class="under">
                      <Link to="/login" >Login </Link></a></li>
                  </ul>
            </div>
          <div class="heading1">
            <ion-icon name="menu" class="ham"></ion-icon>
          </div>
        </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/ourorganics" element={<Ourorganics />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
    </Router>
  );
}
export default App;
