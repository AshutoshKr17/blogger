import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router,Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {auth} from './firebase-config'
import {signOut} from 'firebase/auth'

import './App.css';

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
  

  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    })
  }

  return <Router>
    <nav>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <Link to="/login">Login</Link> 
      ) : (
        <>
          <Link class = "createPost" to="/createpost">Create Post</Link>
          <button className="button-45" onClick={signUserOut}>Log Out</button>
        </>
      )}
    </nav>
    <Routes>
      <Route path='/' element ={<Home isAuth={isAuth}/>} />
      <Route path='/createpost' element ={<CreatePost isAuth={isAuth}/>} />
      <Route path='/login' element ={<Login setIsAuth={setIsAuth}/>} />
    </Routes>
  </Router>
}

export default App;
