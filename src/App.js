import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AudioBooks from './Pages/AudioBooks/audiobook';
import NavBar from './Components/NavBar';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import Library from './Pages/Library/library';
import Genres from './Pages/Genres/genres';
import Login from './Pages/Login/login';
import SignUp from './Pages/SignUp/signup';
import Authors from './Pages/Authors/authors';
import Comedy from './Pages/Genres/Comedy';
import Action from './Pages/Genres/Action';
import Biography from './Pages/Genres/Biography';
import Horror from './Pages/Genres/Horror';
import Sport from './Pages/Genres/Sport';
import Mystery from './Pages/Genres/Mystery';
import Drama from './Pages/Genres/Drama';
import Musical from './Pages/Genres/Musical';
import Splash from './SplashScreen/splash';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='layout'>
      {isLoaded ? (
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route index element= {<Home/>}/>
              <Route path='/genres' element= {<Genres/>}>
                <Route index element={<Comedy/>}></Route>
                <Route path='/genres/Action' element={<Action/>}></Route>
                <Route path='/genres/Biography' element={<Biography/>}></Route>
                <Route path='/genres/Horror' element={<Horror/>}></Route>
                <Route path='/genres/Sport' element={<Sport/>}></Route>
                <Route path='/genres/Mystery' element={<Mystery/>}></Route>
                <Route path='/genres/Drama' element={<Drama/>}></Route>
                <Route path='/genres/Musical' element={<Musical/>}></Route>
              </Route>

              <Route path='Library' element= {<Library/>}/>
              <Route path='Contact' element= {<Contact/>}/>
              <Route path='Login' element= {<Login/>}/>
              <Route path='SignUp' element= {<SignUp/>}/>
              <Route path='AudioBook' element={<AudioBooks/>}/>
              <Route path='Authors' element ={<Authors/>}/>
            </Routes>
          </BrowserRouter>
      ):(<Splash/>)}
    </div>
  );
}

export default App;
