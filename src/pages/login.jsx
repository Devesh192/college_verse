import React, { Component, useContext } from 'react'
import Layout from '../components/Layout'
import '../index.css';
import { useState, useEffect } from 'react';
import login from '../asset/images/login.png'
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Spinner from '../components/spinner';
import Community from '../pages/community'
import { redirect } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../App';

function Login() {

  const { state, dispatch } = useContext(UserContext);

  const data1 = state[0];
  const data2 = state[1];
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)
  const [loggedin, setLoggedin] = useState(false)

  let name, value;
  const pstUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault(); // This prevents the default form submission behavior.

    console.log("Logging In");
    setLoading("true");
    await signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCreditional) => {
        setLoading(false);
        setLoggedin(true);
        const user = userCreditional.user;
        console.log("succecfully logged in");
        dispatch({ type: "USER", payload: true , payload2: user.email})

      })
      .catch((error) => {
        const errorcode = error.code;
        console.log(errorcode)
        const errorMessage = error.message;
        console.error('Login failed', error);
        console.log(error);
        toast.error("Login failed ! New user please SignUp");
      })
      .finally(
        () => { setLoading(false); }
      )
  }
  if (loggedin) {
    return (
      <Suspense fallback={<Spinner />}>
        <Community />
      </Suspense>
    )
  } else {
    return (
      <Layout>
        <div className="flex justify-center p-10">
          <form className=' bg-slate-300 flex-col space-y-4 shadow-xl p-20'>
            <div>
              <img src={login} alt="" className='w-40 h-40 mx-auto' />
            </div>
            <div className=''>
              <input
                className=' bg-blend-color-burn w-full bg-slate- rounded hover:scale-105 ease-out duration-100 shadow-2xl form-control p-3'
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={userData.email}
                onChange={pstUserData}
              />
            </div>

            <div className=''>
              <input
                className=' bg-blend-color-burn w-full bg-slate- rounded hover:scale-105 ease-out duration-100 shadow-2xl form-control p-3 '
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={userData.message}
                onChange={pstUserData}
              />
            </div>
            <div className='text-center'>
              <button type="submit" className=' bg-yellow-600 hover:bg-yellow-700 text-white font-bold  rounded h-10 p-3' onClick={submitData}> Login </button>
            </div>
            <div>
              {loading ? (<Spinner />) : <></>}
            </div>
            <div className='text-center'>
              <p className='text-yellow-700 hover:text-yellow-700'>Forgot Password?</p>
            </div>
            <div className=' text-center'>
              <Link className=' text-yellow-700 hover:text-yellow-700' to={'/signup'}>New user click here</Link>
            </div>
          </form>
        </div>
        <ToastContainer />
      </Layout>
    )
  }
};
// }

export default Login;
