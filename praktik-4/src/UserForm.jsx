import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !age) {
            alert('Harap isi semua field!');
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            age: parseInt(age),
            isSubscribed,
            registeredAt: new Date().toLocaleDateString()
        };

        setUsers(prevUsers => [...prevUsers, newUser]);

        setName('');
        setEmail('');
        setAge('');
        setIsSubscribed(false);
    };

    const deleteUser = (userId) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    };

    return (
        <div className="form-container">
            <h2>User Registration Form</h2>

            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Usia:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Masukkan usia"
                        min="1"
                        max="120"
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={isSubscribed}
                            onChange={(e) => setIsSubscribed(e.target.checked)}
                        />
                        Subscribe to newsletter
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    Tambah User
                </button>
            </form>

            <div className="users-list">
                <h3>Registered Users ({users.length})</h3>
                
                {users.length === 0 ? (
                    <div className="no-users">
                        <p>Belum ada user yang terdaftar</p>
                    </div>
                ) : (
                    <div className="users-grid">
                        {users.map(user => (
                            <div key={user.id} className="user-card">
                                <button 
                                    className="delete-btn"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    ×
                                </button>
                                <h4>{user.name}</h4>
                                <p>Email: {user.email}</p>
                                <p>Usia: {user.age} tahun</p>
                                <p>Subscription: {user.isSubscribed ? 'Aktif' : 'Tidak Aktif'}</p>
                                <small>Terdaftar: {user.registeredAt}</small>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserForm;