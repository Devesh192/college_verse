import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Community from './pages/community';
import Signup from './pages/Signup';
import Pagenotfound from './pages/Pagenotfound';
import Footer from './components/Footer';
import Login from './pages/login';
import Signup2 from './pages/signup2';
import Crud from './pages/crud';
import Crud2 from './pages/crud2';
import UserProfile from './pages/userProfile';  
import React from 'react'
import { createContext, useReducer} from 'react';
import { initialState, reducer} from './reducer/reducer';
import { Mongocrud } from './pages/mongocrud';
import ChatBox from './chat/chaboxt';
import Message from './chat/message';
import SendMessage from './chat/sendmessage';
import Welcome from './chat/welcome';
import Chat from './chat/chat';
// import Communitypage from './pages/communitypage';


export const UserContext = createContext();
const Routing = () => {
  return (
    <div >
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup2" element={<Signup2 />}></Route>
          <Route path="/crud" element={<Crud />}></Route>
          <Route path="/crud2" element={<Crud2 />}></Route>
          <Route path="/userProfile" element={<UserProfile />}></Route>
          <Route path="/mongocrud" element={<Mongocrud />}></Route>
          <Route path="/chatbox" element={<ChatBox />}></Route>
          <Route path="/message" element={<Message/>}></Route>
          <Route path="/sendmessage" element={<SendMessage/>}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/chat" element={<Chat />}></Route>

        </Routes>
    </div>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <Routing />
        </UserContext.Provider>
    </>
  );
}

export default App;
