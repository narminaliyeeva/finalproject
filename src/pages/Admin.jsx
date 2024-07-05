import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/posts')
            .then(res => setData(res.data))
           
    }, []);

    const deleteData = (id) => {
        axios.delete(`http://localhost:8000/posts/${id}`)
            .then(res => setData(res.data))
       
    };

  


 

    return (
        <>
          
             
            <div className="table-container">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Content</th>
                            <th>Likes Count</th>
                            <th>UserID</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className='image'><img src={item.image} /></td>
                                <td>{item.content}</td>
                                <td> {item.likesCount}</td>
                                <td>{item.userID}</td>
                                <td><button onClick={() => deleteData(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Admin;
