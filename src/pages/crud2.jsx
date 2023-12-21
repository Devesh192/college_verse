// Use your preferred state management library (e.g., Redux, Context API)
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crud2 = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        // Fetch data from the server when the component mounts
        axios.get('http://localhost:27017/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleAddItem = () => {
        axios.post('http://localhost:27017/api/items', newItem)
            .then(response => setItems([...items, response.data]))
            .catch(error => console.error(error));
    };

    const handleDeleteItem = (id) => {
        axios.delete(`http://localhost:27017/api/items/${id}`)
            .then(() => setItems(items.filter(item => item._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>CRUD Operations with MongoDB</h1>

            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.description}
                        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default Crud2;
