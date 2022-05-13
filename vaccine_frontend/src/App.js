import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import ForgotPassword from './pages/Auth/ForgotPassword';
import CheckEmail from './pages/Auth/CheckEmail';
import NewPassword from './pages/Auth/NewPassword';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
