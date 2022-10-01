import './App.css';
import Checkout from './Components/Checkout/Checkout';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import MainPage from './Components/HomePage/MainPage';
import Navbar from './Components/NavBar/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes> 
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/Display" element={<DisplayContent/>}/>
        <Route exact path="/Order" element={<PlaceOrder/>}/>
        <Route exact path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
