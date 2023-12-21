import React, { useState } from "react";
import Layout from "../components/Layout";
import "../index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
} from "firebase/database";
import { uid } from "uid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const notify = () => toast("Wow so easy!");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  let name, value;
  const pstUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    console.log(userData);
    if (userData.email === "" || userData.password === "") {
      alert("fill all the required fields");
      return;
    }
    const { userName, email } = userData;
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((data) => {
        toast.success("Signup success");
        console.log("User ID :- ", data.user.uid);
        const userId = data.user.uid;
        const db = getDatabase();

        set(ref(db, "users/" + userId), {
          username: userData.email,
          uuid: userId,
        }).then(() => {
          console.log("user id :: " + userId)
        }); 
      })
      .catch((err) => {
        toast.warning("Already Registered with Us !");
        console.log("already signed up|||" + err)
      });

    const db = getDatabase();
    navigate("/login");
  };
  return (
    <Layout>
      <div className="flex justify-center p-10">
        <form className=" bg-slate-300 flex-col space-y-4 shadow-xl p-20">
          <div className="">
            {/* <label htmlFor="name">first Name:</label> */}
            <input
              className="border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-control h-10"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userData.email}
              onChange={pstUserData}
            />
          </div>
          <div className="">
            {/* <label htmlFor="name">first Name:</label> */}
            <input
              className="border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-control h-10"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={pstUserData}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={submitData}
          >
            {" "}
            SignUp{" "}
          </button>
          {/* <div className="btn" className='bg-blue-500 hover:bg-blue-700' text-white></div> */}
        </form>

        <div className="contact-info">
          {/* <p>Or text me at:</p> */}
          {/* <a  w-96href="mailto:YOUR_EMAIL_ADDRESS">YOUR_EMAIL_ADDRESS</a> w-fit */}
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default SignUp;
