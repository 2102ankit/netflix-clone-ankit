import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))

      }
      else {
        dispatch(logout());
      }
    })

    return unsubsribe;

  }, [dispatch])


  return (
    <div className="app">

      <Router>
        {!user ? <LoginScreen /> :
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/profile' element={<ProfileScreen />} />
          </Routes>
        }
      </Router>



    </div>
  );
}

export default App;
