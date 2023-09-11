import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Earphones from './pages/Earphones'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='headphones' element={<Headphones/>} />
        <Route path='speakers' element={<Speakers/>} />
        <Route path='earphones' element={<Earphones/>} />
      </Routes>
    </Router>
  );
}

export default App;
