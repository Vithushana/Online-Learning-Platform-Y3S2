import React, { useState } from "react";
import "../styles/ManageUsers.css";

function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "student" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "mentor" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "student",
  });

  const handleAdd = () => {
    const id = Date.now();
    setUsers([...users, { ...newUser, id }]);
    setNewUser({ name: "", email: "", role: "student" });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
      <div className="manage-users">
        <h2>Manage Users</h2>

        {/* Add User Form */}
        <div className="add-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
          <select name="role" value={newUser.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
          </select>
          <button onClick={handleAdd}>Add User</button>
        </div>

        {/* User Table */}
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(u.id)}>
                    Delete
                  </button>
                  <button className="update-btn" onClick={() => handleDelete(u.id)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default ManageUsers;
