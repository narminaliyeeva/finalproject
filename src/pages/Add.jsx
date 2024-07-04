import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

const Add = () => {
  const [content, setContent] = useState('');
  const [fileKey, setFileKey] = useState(Date.now()); 
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if file is selected
    if (!file) {
      alert('Please select a file');
      return;
    }

    try {
   
      const imageBase64 = await convertToBase64(file);

      const formData = {
        content: content,
        image: imageBase64 
      };

      const response = await axios.post('http://localhost:8000/posts/', formData);
      console.log('Response:', response.data);
      
      setContent('');
      setFile(null);
      setFileKey(Date.now()); 
    } catch (error) {
      console.error('Error:', error);
      
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
                key={fileKey} 
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit">Add new post</button>
            <button type="button" onClick={() => {
              setContent('');
              setFile(null);
              setFileKey(Date.now()); /
            }}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
