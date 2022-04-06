import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
