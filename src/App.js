import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import ImageUpload from './components/ImageUpload'
import Posts from './components/Posts';
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom"
import Login from './Login'
import {auth} from './Firebase'
import { useStateValue } from './components/StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
     auth.onAuthStateChanged((authUser)=>{

      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

   
  }, [])

  return (

    <div className="App">
      <Router>
        <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='/'>
          <Header/>
          <Posts currentUser={user}/>
          {user ? <ImageUpload username={user}/> : <></> }
        </Route>
  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
