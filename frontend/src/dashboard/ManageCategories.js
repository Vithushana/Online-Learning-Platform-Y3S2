import React, { useState, useEffect } from "react";
import "../styles/ManageCategories.css";

function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Expected array but got:", data);
          setCategories([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setCategories([]);
      });
  }, []);

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddOrUpdateCategory = () => {
    if (newCategory.trim() === "") return;

    if (editingId) {
      // 🔁 Update logic
      fetch(`http://localhost:8080/api/categories/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      })
        .then((res) => res.json())
        .then((updated) => {
          setCategories(categories.map((c) => (c.id === editingId ? updated : c)));
          setNewCategory("");
          setEditingId(null);
        })
        .catch((err) => console.error("Error updating category:", err));
    } else {
      // ➕ Add logic
      fetch("http://localhost:8080/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCategories([...categories, data]);
          setNewCategory("");
        })
        .catch((err) => console.error("Error adding category:", err));
    }
  };

  const handleEditCategory = (category) => {
    setNewCategory(category.name);
    setEditingId(category.id);
  };

  const handleDeleteCategory = (id) => {
    fetch(`http://localhost:8080/api/categories/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCategories(categories.filter((c) => c.id !== id));
      })
      .catch((err) => console.error("Error deleting category:", err));
  };

  const handleCancelEdit = () => {
    setNewCategory("");
    setEditingId(null);
  };

  return (
    <div className="manage-categories">
      <h2>Manage Categories</h2>

      <div className="add-category">
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdateCategory}>
          {editingId ? "Update Category" : "Add Category"}
        </button>
        {editingId && (
          <button className="cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>

      <ul className="category-list">
        {Array.isArray(categories) &&
          categories.map((category) => (
            <li key={category.id}>
              <span>{category.name}</span>
              <div className="category-actions">
                <button onClick={() => handleEditCategory(category)}>Edit</button>
                <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ManageCategories;
