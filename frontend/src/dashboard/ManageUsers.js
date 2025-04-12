import React, { useState, useEffect } from "react";
import "../styles/ManageUsers.css";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "student" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (!newUser.name || !newUser.email) return;

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:8080/api/auth/users/${editingId}`
      : "http://localhost:8080/api/auth/users";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (editingId) {
          setUsers(users.map((u) => (u.id === editingId ? data : u)));
        } else {
          setUsers([...users, data]);
        }
        setNewUser({ name: "", email: "", role: "student" });
        setEditingId(null);
      })
      .catch((err) => console.error("Error saving user:", err));
  };

  const handleEdit = (user) => {
    setNewUser({ name: user.name, email: user.email, role: user.role });
    setEditingId(user.id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/auth/users/${id}`, {
      method: "DELETE",
    })
      .then(() => setUsers(users.filter((u) => u.id !== id)))
      .catch((err) => console.error("Error deleting user:", err));
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>

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
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddOrUpdate}>
          {editingId ? "Update User" : "Add User"}
        </button>
        {editingId && <button onClick={() => setEditingId(null)}>Cancel</button>}
      </div>

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
                <button className="update-btn" onClick={() => handleEdit(u)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(u.id)}>
                  Delete
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
