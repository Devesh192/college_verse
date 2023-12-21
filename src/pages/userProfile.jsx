// import React from 'react'
// import db from '../firebase';

// const UserProfile = () => {
//   return (
//       <div>
//         <div className='border-4 border-y-emerald-300'>
//             <h1>This is your page</h1>
//         </div>
//       </div>
//   )
// }

// export default UserProfile


import React from 'react';
import classNames from 'classnames';

const UserProfile = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-2xl font-bold">User Profile</h1>
      </header>

      <main className="max-w-3xl mx-auto bg-white p-8 mt-8 rounded shadow-md">

        <div className="text-center">
          <img src="profile-picture.jpg" alt="Profile Picture" className="rounded-full mx-auto mb-4" style={{ maxWidth: '150px' }} />
          <h2 className="text-xl font-bold">John Doe</h2>
        </div>

        <div className="text-lg mt-6">
          <p><strong>Email:</strong> john.doe@example.com</p>
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
