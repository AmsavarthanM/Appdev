
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Reg from './components/Register';
import Home1 from './Home';
import Calorie1 from './components/calorie';
import Sleep from './components/sleep';
import PlansPage from './components/workout';
import Meals from './components/diet';
import userContext from './Context';
import { useState } from 'react';
import Track from './components/Trackers';
import Video1 from './components/video/Video1';
import ScrollToTop from './components/ScrollToTop';
import Video2 from './components/video/Video2';
import EditableUserProfile from './components/profile';
function App() {
  const [user1, setUser1] = useState(null);

  return (
    <div className="App">
      <userContext.Provider value={[user1, setUser1]}>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home1/>} />
          <Route path="/register" element={<Reg/>} />
          <Route path="/cal" element={<Calorie1/>} />
          <Route path="/sleep" element={<Sleep/>} />
          <Route path="/work" element={<PlansPage/>} />
          <Route path="/diet" element={<Meals/>} />
          <Route path="/tracker" element={<Track/>} />
          <Route path="/home/push" element={<Video1/>} />
          <Route path="/home/push2" element={<Video2/>} />
          <Route path="/profile" element={<EditableUserProfile/>} />
        </Routes>
      </Router>
      </userContext.Provider>

    </div>
  );
}

export default App;
