import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

const Add = () => {
  const [content, setContent] = useState('');
  const [fileKey, setFileKey] = useState(Date.now()); // Unique key for file input
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if file is selected
    if (!file) {
      alert('Please select a file');
      return;
    }

    try {
      // Convert file to base64
      const imageBase64 = await convertToBase64(file);

      // Prepare data for submission
      const formData = {
        content: content,
        image: imageBase64 // Base64 encoded image
      };

      // Example POST request using Axios
      const response = await axios.post('http://localhost:8000/posts/', formData);
      console.log('Response:', response.data);
      // Handle success, e.g., navigate to another page

      // Clear form fields
      setContent('');
      setFile(null);
      setFileKey(Date.now()); // Update key to reset file input
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result); // Resolve with base64 encoded string
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <Navbar />
      <div className="add-page">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Content:
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Upload File:
              <input
                key={fileKey} // Key to force re-render of input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit">Add new photo</button>
            <button type="button" onClick={() => {
              setContent('');
              setFile(null);
              setFileKey(Date.now()); // Update key to reset file input
            }}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
