import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    category: "", // Add category with an empty string
    species: "", // Add species with an empty string
    availability: "",
    price: "",
    rating: "", // Add rating with an empty string
    numReviews: "", // Add numReviews with an empty string
    imageUrl: "", // Add imageUrl with an empty string
  });
  const [items, setItems] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null); // Track the currently edited item ID
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  // setFile(e.target.files[0]);
  // };

  const handleInputChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleEdit = (itemId) => {
    // Find the editing item by its ID and prepopulate the form fields with item data
    const editingItem = items.find((item) => item._id === itemId);

    // Set the editing item ID
    setEditingItemId(itemId);

    // Set the item data based on the properties from the editing item
    setItemData({
      name: editingItem.name,
      description: editingItem.description,
      category: editingItem.category,
      species: editingItem.species,
      availability: editingItem.availability,
      price: editingItem.price,
      rating: editingItem.rating,
      numReviews: editingItem.numReviews,
      imageUrl: editingItem.imageUrl,
    });
  };

  const handleEditCancel = () => {
    // Cancel editing by clearing the editing item ID and form fields
    setEditingItemId(null);
    setItemData({
      name: "",
      description: "",
      category: "", // Add category with an empty string
      species: "", // Add species with an empty string
      availability: "",
      price: "",
      rating: "", // Add rating with an empty string
      numReviews: "", // Add numReviews with an empty string
      imageUrl: "", // Add imageUrl with an empty string
    });
  };

  const handleEditSubmit = async () => {
    // Submit edited item data
    try {
      await axios.put(
        `http://localhost:5000/api/auth/admin/edit-item/${editingItemId}`,
        itemData
      );
      // Refresh the item list after editing
      fetchItems();
      setSuccessMessage("Item edited successfully");
      handleEditCancel(); // Cancel editing
    } catch (error) {
      console.error("Error editing item:", error);
      setErrorMessage(
        error.response?.data?.message || "Error occurred during item editing"
      );
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/auth/admin/delete-item/${itemId}`
      );
      // Refresh the item list after deletion
      fetchItems();
      setSuccessMessage("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      setErrorMessage("Error occurred while deleting the item");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setItemData({
      ...itemData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data including the image
    const formData = new FormData();
    formData.append("name", itemData.name);
    formData.append("description", itemData.description);
    formData.append("category", itemData.category);
    formData.append("species", itemData.species);
    formData.append("availability", itemData.availability);
    formData.append("price", itemData.price);
    formData.append("rating", itemData.rating);
    formData.append("numReviews", itemData.numReviews);
    formData.append("image", itemData.image); // Append the image file

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/admin/add-item",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 201) {
        // Item added successfully, handle success
        console.log("Item added successfully");
        setSuccessMessage("Item added successfully");

        // Fetch the updated item list immediately after adding an item
        fetchItems();

        // Optionally reset form fields here
        setItemData({
          name: "",
          description: "",
          category: "",
          species: "",
          availability: "",
          price: "",
          rating: "",
          numReviews: "",
          imageUrl: "",
        });
      } else {
        // Handle errors here
        console.error("Error adding item");
        setErrorMessage("Error occurred during item addition");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error occurred during item addition");
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/admin/get-items"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          onChange={handleInputChange}
          value={itemData.name}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleInputChange}
          value={itemData.description}
        />
        <select
          name="category"
          onChange={handleInputChange}
          value={itemData.category}
        >
          <option value="">Select Category</option> {/* Unselected option */}
          <option value="pets">Pets</option>
          <option value="toys">Toys</option>
        </select>
        <input
          type="text"
          name="species"
          placeholder="Species"
          onChange={handleInputChange}
          value={itemData.species}
        />
        <input
          type="number"
          name="availability"
          placeholder="Availability"
          onChange={handleInputChange}
          value={itemData.availability}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleInputChange}
          value={itemData.price}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleInputChange}
          value={itemData.rating}
        />
        <input
          type="number"
          name="numReviews"
          placeholder="Number of Reviews"
          onChange={handleInputChange}
          value={itemData.numReviews}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit" value="Upload">
          Add Item
        </button>
      </form>

      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {/* Display the list of items */}
      <h3>Item List</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <div style={{ marginBottom: "10px" }}>
              {editingItemId === item._id ? (
                // Display edit form for the currently edited item
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    onChange={handleInputChange}
                    value={itemData.name}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleInputChange}
                    value={itemData.description}
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleInputChange}
                    value={itemData.category}
                  />
                  <input
                    type="text"
                    name="species"
                    placeholder="Species"
                    onChange={handleInputChange}
                    value={itemData.species}
                  />
                  <input
                    type="number"
                    name="availability"
                    placeholder="Availability"
                    onChange={handleInputChange}
                    value={itemData.availability}
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleInputChange}
                    value={itemData.price}
                  />
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    onChange={handleInputChange}
                    value={itemData.rating}
                  />
                  <input
                    type="number"
                    name="numReviews"
                    placeholder="Number of Reviews"
                    onChange={handleInputChange}
                    value={itemData.numReviews}
                  />
                  <button onClick={handleEditSubmit}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </div>
              ) : (
                // Display item details or edit button
                <div>
                  <strong>{item.name}</strong> - {item.description}, Category:{" "}
                  {item.category}, Species: {item.species}, Availability:{" "}
                  {item.availability}, Price: {item.price}, Rating:{" "}
                  {item.rating}, Reviews: {item.numReviews}
                  {/* Display the image if imageUrl is available */}
                  {item.imageUrl && (
                    <img
                      src={`http://localhost:5000${item.imageUrl}`}
                      alt={item.name}
                      style={{ maxWidth: "500px", maxHeight: "500px" }}
                    />
                  )}
                  <button onClick={() => handleEdit(item._id)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
