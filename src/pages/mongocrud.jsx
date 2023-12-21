import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';

export const Mongocrud = () => {
  const [name, setName] = useState("devesh");
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = fetch('http://localhost:3001/demo', {
      method : 'GET',
    })
    // const data = response.json();
    // console.log("data : ", data);
    // setUsers(data);
  }, [])

  const writeUserData = async (e) => {
    e.preventDefault();
    console.log("write User Data called");
    console.log("name : " + name);

    try {
      const response = await fetch('http://localhost:3001/demo', {
        method: 'POST',
        body: JSON.stringify({ name: name }), // Send the data as a JSON object
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log("data : ", data);
      console.log("data.name : ", data.name);

      // Handle the response data as needed

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



    // axios.post('http://localhost:3001/createUser', {
    //   name: name,
    // })
    //   .then((result) => {
    //     console.log("succesfully added new user"  )
    //     console.log(result)
    //   })
    //   .catch((err) => console.log(err));
    // console.log("write User Data called");
  // }
  const deleteUser = () => {

  }

  return (
    <div>
      <div  className='m-5 border-4 p-5'>
        <input
          className='border-2 p-2 rounded-md m-2'
          id="name"
          type="text"
          placeholder="Enter new Contact title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          className='border-2 p-2 rounded-md m-2'
          id="emial"
          type="email"
          placeholder="Enter new Contact email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='border-2 p-2 rounded-md m-2'
          id="age"
          type="text"
          placeholder="Enter new Contact age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /> */}
        {/* <input type='submit' className='rounded-md border-2 mx-2 p-2 bg-orange-300' ></input> */}
        <button className='rounded-md border-2 mx-2 p-2 bg-orange-300' onClick={writeUserData}>Add new User</button>
      </div>

      {/* List of users */}
      <div className='flex-col rounded-md border-4 p-10 m-2 shadow-inner'>
        {users.map((user) => (
          <div className='flex-col border-4 border-green-200 bg-slate-100 rounded-3xl m-4 p-4 shadow-md'>
            <div  >
              {user.name} <br></br>
              {user.uuid}
              {user.id}
              {/* {console.log("users.id : " + user.title)} */}
              {/* <button className=' rounded-md border-2 mx-2 p-2' onClick={() => setSelectedBook(user)}>Edit</button> */}
              <button className=' rounded-md border-2 mx-2 p-2' onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Update selected book */}
      <div>
        <input
          type="text"
        // value={selectedBook.title}
        // onChange={(e) =>
        //   setSelectedBook({ ...selectedBook, title: e.target.value })
        // }
        />
        {/* <button onClick={updateBook}>Update Book</button> */}
      </div>
    </div>
  )
}
