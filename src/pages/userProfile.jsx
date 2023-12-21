import React, {useState} from 'react';
import classNames from 'classnames';
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
} from "firebase/database";
import { useEffect } from 'react';
import { UserContext } from '../App';
import { useContext} from 'react';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const data1 = state[0];
  const data2 = state[1];
  // const submitData = async (event) => {

  //   useEffect(() => {
  //       const db = getDatabase();
  //       const userRef = ref(db, 'users/' + userId);
  //       onValue(userRef, (snapshot) => {
  //         const data = snapshot.val();
  //         setUserData(data);
  //       });
  //   }, [])
    

    // console.log(userData);
    // if (userData.email === "" || userData.password === "") {
    //   alert("fill all the required fields");
    //   return;
    // }
    // const { userName, email } = userData;  
    // event.preventDefault();

    // await set(ref(db, "users/" + userId), {
    //   username: userData.email,
    //   uuid: userId,
    // }).then(() => {
    //   console.log("user id :: " + userId)
    // });
  // }

return (
  <div className="bg-gray-100">
    <header className="bg-gray-800 text-white text-center py-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
    </header>

    <main className="max-w-3xl mx-auto bg-white p-8 mt-8 rounded shadow-md">

      <div className="text-center">
        {/* <img src="profile-picture.jpg" alt="Profile Picture" className="rounded-full mx-auto mb-4" style={{ maxWidth: '150px' }} /> */}
        <h2 className="text-xl font-bold">{data2} </h2>
      </div>

      <div className="text-lg mt-6">
        <p><strong>Email:</strong> devesh@example.com</p>
        <p><strong>Major:</strong> Computer Science</p>
        <p><strong>Year:</strong> Senior</p>
        <p><strong>Interests:</strong> Web Development, Artificial Intelligence</p>
      </div>

      <a
        href="#"
        className={classNames(
          'inline-block',
          'bg-gray-800',
          'text-white',
          'py-2',
          'px-4',
          'mt-6',
          'rounded',
          'no-underline',
          'hover:bg-gray-700'
        )}
      >
        Logout
      </a>
    </main>
  </div>
);
};

export default UserProfile;




// import React from 'react';
// import classNames from 'classnames';

// const UserProfile = () => {

//   return (
//     <div className="bg-gray-100">
//       <header className="bg-gray-800 text-white text-center py-4">
//         <h1 className="text-2xl font-bold">User Profile</h1>
//       </header>

//       <main className="max-w-3xl mx-auto bg-white p-8 mt-8 rounded shadow-md">

//         <div className="text-center">
//           {/* <img src="profile-picture.jpg" alt="Profile Picture" className="rounded-full mx-auto mb-4" style={{ maxWidth: '150px' }} /> */}
//           <h2 className="text-xl font-bold">Devesh Kumar</h2>
//         </div>

//         <div className="text-lg mt-6">
//           <p><strong>Email:</strong> devesh@example.com</p>
//           <p><strong>Major:</strong> Computer Science</p>
//           <p><strong>Year:</strong> Senior</p>
//           <p><strong>Interests:</strong> Web Development, Artificial Intelligence</p>
//         </div>

//         <a
//           href="#"
//           className={classNames(
//             'inline-block',
//             'bg-gray-800',
//             'text-white',
//             'py-2',
//             'px-4',
//             'mt-6',
//             'rounded',
//             'no-underline',
//             'hover:bg-gray-700'
//           )}
//         >
//           Logout
//         </a>
//       </main>
//     </div>
//   );
// };

// export default UserProfile;
