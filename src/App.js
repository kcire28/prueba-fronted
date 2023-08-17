import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderList from './components/OrderList';
import Report from './components/Report';
import OrderDetail from './components/OrderDetail';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<OrderList />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/order/:id" element={<OrderDetail/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
