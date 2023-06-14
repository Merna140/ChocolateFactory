import logo from './logo.svg';
import './App.css';
import SignUp from './modules/home/signUp';
import Login from './modules/home/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './modules/home/userLayout';
import Main from './modules/home/main';
import ProducerLayout from './modules/home/producerLayout';
import Layout from './modules/home/layout';
import {HashRouter as Router} from “react-router-dom”

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/userMain' element={<UserLayout />}>
            <Route path='user' element={<Layout />}></Route>
            <Route path='producer' element={<ProducerLayout />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
