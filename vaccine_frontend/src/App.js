import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import ForgotPassword from './pages/Auth/ForgotPassword';
import CheckEmail from './pages/Auth/CheckEmail';
import NewPassword from './pages/Auth/NewPassword';
import ResetMessage from './pages/Auth/ResetMessage';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Vaccine from './pages/Vaccine/Vaccine';
import Vaccines from './pages/Vaccine/Vaccines';
import Account from './pages/Account/Account';
import Policy from './pages/TermsAndPolicy/Policy';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/reset-message" element={<ResetMessage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/vaccine" element={<Vaccine />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/account" element={<Account />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
