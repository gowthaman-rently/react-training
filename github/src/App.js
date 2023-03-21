import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/homePage';
import UserPage from './components/userPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/:userid' element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
