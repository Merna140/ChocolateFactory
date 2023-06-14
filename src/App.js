import logo from './logo.svg';
import './App.css';
import SignUp from './modules/home/signUp';
import Login from './modules/home/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './modules/home/userLayout';
import Main from './modules/home/main';
import ProducerLayout from './modules/home/producerLayout';
import Layout from './modules/home/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/userMain' element={<UserLayout />}>
            <Route path='user' element={<Layout />}></Route>
            <Route path='producer' element={<ProducerLayout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
