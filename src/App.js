import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SharedLayout from './components/Shared/SharedLayout';
import CoachLogin from './components/CoachLogin/CoachLogin';
import CoachSignup from './components/CoachSignup/CoachSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route path="/home" index element={<Home/>}/>
            <Route path="/coachsignup" index element={<CoachSignup/>}/>
            <Route path="/coachlogin" index element={<CoachLogin/>}/>          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
