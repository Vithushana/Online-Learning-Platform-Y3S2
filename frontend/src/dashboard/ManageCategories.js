import React, { useState } from "react";
import "../styles/ManageCategories.css";

function ManageCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Web Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Cyber Security" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() === "") return;
    const id = Date.now();
    setCategories([...categories, { id, name: newCategory }]);
    setNewCategory("");
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
      <div className="manage-categories">
        <h2>Manage Categories</h2>

        <div className="add-category">
          <input
            type="text"
            placeholder="Enter category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>

        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id}>
              {category.name}
              <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default ManageCategories;
