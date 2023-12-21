import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';
import { toast } from 'react-toastify';
import { uid } from 'uid';
import {dev} from '../firebase';

const Crud = () => {
    // const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const [newBookTitle, setNewBookTitle] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // const fetchdata = () => {
            const db = getDatabase();
            const usersRef = ref(db, 'users');
            console.log("usersRef : " + usersRef);

            onValue(usersRef, (snapshot) => {
                setUsers([]);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    Object.keys(data).forEach((key) => {
                        const user2 = data[key];
                        console.log("User:", user2);
                        console.log("users key: " + key);
                        // setUsers((prevUsers) => [...prevUsers, user2]);
                    });
                    const data2 = users;
                    Object.values(snapshot.val()).map((user) => {
                        setUsers(oldArray => [...oldArray, user]);
                    })
                    Object.keys(data2).forEach((key) => {
                        const user1 = data2[key];
                        console.log("User in the ui:", user1);
                        // setUsers((prevUsers) => [...prevUsers, users]);
                        
                    });
                }
            });
            console.log("data is fetched")
        // }
    }, []);

    const addUser = () => {
        const uuid = uid();
        if (newBookTitle.trim() !== '') {
            const db = getDatabase();
            const booksRef = ref(db, `users/` );

            push(booksRef, {
                title: newBookTitle,
                uid : uuid
            }).then(() => {
                setNewBookTitle(''); // Clear the input field after adding a book
            });
            console.log("new book is added by me");
        }
    };
    function writeUserData() {
        const db = getDatabase();
        const userId = uid();
        set(ref(db, 'users/' + userId), {
            username: newBookTitle,
            uuid: userId,
        })
        .then(() => {
            setNewBookTitle('')
        })
    }

    const updateBook = () => {
        if (selectedBook) {
            const db = getDatabase();
            const bookRef = ref(db, `users/${selectedBook.id}`);
            set(bookRef, {
                title: selectedBook.title,
            }).then(() => {
                setSelectedBook(null); // Clear the selected book after updating
            });
        }
    };

    const [searchResult, setSearchResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (user) => {
        // Perform a search based on the searchTerm
       

        // Set the search result state
        // setSearchResult(result);
    };

    const deleteUser = (user) => {

        const key = user.uuid  ;
        // const key = 'NjCj5zOA2LlZTB74F3E';
        // console.log("key is : " + keys)

        console.log("deleting book with id: " + key);
        const db = getDatabase();
        set(ref(db, `users/${key}` ), {

            username: null,
        }).then(() => {
            console.log(key);
            console.log('Book removed successfully');
        })
        // // const userRef = ref(db, `users/${key}`);
        // // const userRef = ref(db, `user/${key}`);
        // const userRef = "https://console.firebase.google.com/u/0/project/portfolio-461fe/database/portfolio-461fe-default-rtdb/data/~2Fusers~2F-NjCj5zOA2LlZTB74F3E";
        // console.log("userRef is fetched :" + userRef);
        // console.log(Object.values(users));

        // remove(userRef)
        //     .then(() => {
        //         console.log('Book removed successfully');
        //         // setUsers(prevUsers => prevUsers.filter(u => u.uid !== key));
        //         // setUsers(oldArray => [...oldArray, user]);
        //     })
        //     .catch((error) => {
        //         console.error('Error removing book:', error.message);
        //     });
    };

    return (
        <div>
        <div className='border-4 p-5'>
                <input
                    // key={uid()}
                    type="text"
                    placeholder="Enter new Contact title"
                    value={newBookTitle}
                    onChange={(e) => setNewBookTitle(e.target.value)}
                />
                <button className= 'rounded-md border-2 mx-2 p-2' onClick={writeUserData}>Add new User</button>
            </div>

            {/* List of users */}
            <div className='flex-col rounded-md border-4 p-10 m-2 shadow-inner'>
                {users.map((user) => (
                    <div className='flex-col border-4 border-green-200 bg-slate-100 rounded-3xl m-4 p-4 shadow-md'>
                        <div  >
                            {user.username} <br></br>
                            {user.uuid}
                            {user.id}
                            {/* {console.log("users.id : " + user.title)} */}
                            <button className=' rounded-md border-2 mx-2 p-2' onClick={() => setSelectedBook(user)}>Edit</button>
                            <button className=' rounded-md border-2 mx-2 p-2' onClick={() => deleteUser(user)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Update selected book */}
            {selectedBook && (
                <div>
                    <input
                        type="text"
                        value={selectedBook.title}
                        onChange={(e) =>
                            setSelectedBook({ ...selectedBook, title: e.target.value })
                        }
                    />
                    <button onClick={updateBook}>Update Book</button>
                    devesh
                </div>
            )}
        </div>
    );
};
export default Crud;
