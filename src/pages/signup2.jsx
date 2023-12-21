import React, { useState } from 'react';
// import '../index.css';
import Layout from '../components/Layout';
// import emailjs from 'emailjs-com';
import '../index.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';

function ContactMe() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        password: "",
    });

    let name, value;
    const pstUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const submitData = async (event) => {
        console.log(userData);
        if (!userData.firstName || !userData.lastName || !userData.email || !userData.phone) {
            alert("fill all the required fields");
            return;
        }
        const { firstName, lastName, phone, email, address, message } = userData;
        event.preventDefault();

        // createUserWithEmailAndPassword(auth, value.email, value.pass).then
            const res = fetch('https://portfolio-461fe-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },

                body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                address,
                message,
                })
                });
        
        if (res) alert("data stored");
        else alert("plz fill the data");
    }
    return (
        <Layout>
            <div className="contact-me bg-yellow-gradient">
                <form className=''>
                    <div className='text-center w-3/4  '>
                        <div className=''>
                            {/* <label htmlFor="name">first Name:</label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-control h-10'
                                type="text"
                                id=""
                                name="firstName"
                                // className="form-control"
                                placeholder="Enter your first name"
                                value={userData.firstName}
                                onChange={pstUserData}
                            />
                        </div>
                        <div >
                            {/* <label htmlFor="name">Last Name:</label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-con h-10'
                                type="text"
                                id=""
                                name="lastName"
                                // className="form-control"
                                placeholder="Enter your last name"
                                value={userData.lastName}
                                onChange={pstUserData}
                            />
                        </div>
                        <div >
                            {/* <label htmlFor="name">Phone: </label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-con h-10'
                                type="text"
                                id=""
                                name="phone"
                                // className="form-control"
                                placeholder="Enter your Phone no."
                                value={userData.phone}
                                onChange={pstUserData}
                            />
                        </div>
                        <div >
                            {/* <label htmlFor="Email">Email: </label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-con h-10'
                                type="text"
                                id=""
                                name="email"
                                // className="form-control"
                                placeholder="Enter your email"
                                value={userData.email}
                                onChange={pstUserData}
                            />
                        </div>
                        <div >
                            {/* <label htmlFor="name">Address: </label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-con h-10'
                                type="text"
                                id=""
                                name="address"
                                // className="form-control"
                                placeholder="Enter your address"
                                value={userData.address}
                                onChange={pstUserData}
                            />
                        </div>
                        <div >
                            {/* <label htmlFor="name">Message:</label> */}
                            <input
                                className='border-green-800 border-2 rounded p-3 hover:scale-105 ease-out  duration-100   shadow-2xl form-con h-10'
                                type="text"
                                id=""
                                name="message"
                                // className="form-control"
                                placeholder="Enter your message"
                                value={userData.message}
                                onChange={pstUserData}
                            />
                        </div>

                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={submitData}> Send </button>
                        {/* <div className="btn" className='bg-blue-500 hover:bg-blue-700' text-white></div> */}
                    </div>
                </form>

                <div className="contact-info">
                    {/* <p>Or text me at:</p> */}
                    {/* <a  w-96href="mailto:YOUR_EMAIL_ADDRESS">YOUR_EMAIL_ADDRESS</a> w-fit */}
                </div>
            </div>
        </Layout>
    );
}

export default ContactMe;