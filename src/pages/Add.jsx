import React, { useState } from 'react';
import Navbar from '../components/Navbar';



const Add = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Tags:', tags);
    console.log('Publish Date:', publishDate);
    console.log('File:', file);
  };
  

  const onSubmit = (data) => {
    axios.post('http://localhost:3000/data/', { ...data, file: image })
    .then(res=>console.log(res.data))
  }

  const convertToBase64 =(file)=>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result)
    }
   }

  return (
   <>
   <Navbar/>
   
    <div className="add-page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>
            Tags:
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Publish Date:
            <input
              type="datetime-local"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Upload File:
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>
        <div className="form-buttons">
          <button type="submit">Add new photo</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
   </>
  );
};

export default Add;
