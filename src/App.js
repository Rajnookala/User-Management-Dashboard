import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]); // Update state with the new user
    alert(`User Added:\nName: ${name}\nEmail: ${email}`); // Notify the user
  };

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
