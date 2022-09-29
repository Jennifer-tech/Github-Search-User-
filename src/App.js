import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import UserDetail from './component/UserDetail/UserDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className='app_container'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='userDetail/:login' element={<UserDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  )
}

export default App

