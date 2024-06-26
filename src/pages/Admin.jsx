import React from 'react'
import Navbar from '../components/Navbar'

function Admin() {
  return (
   <>
   <Navbar/>
   <div className="admin-page">
    <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Content</th>
                <th>Tag</th>
                <th>Photo</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Narmin</td>
                <td>Lusia</td>
                <td>#fyp</td>
                <td>Photo</td>
                <td><button className='admin-btn'>Delete</button></td>
                <td><button className='admin-btn'>Edit</button></td>
            </tr>
            <tr>
                <td>Narmin</td>
                <td>Lusia</td>
                <td>#fyp</td>
                <td>Photo</td>
                <td><button className='admin-btn'>Delete</button></td>
                <td><button className='admin-btn'>Edit</button></td>
            </tr>
            <tr>
                <td>Narmin</td>
                <td>Lusia</td>
                <td>#fyp</td>
                <td>Photo</td>
                <td ><button className='admin-btn'>Delete</button></td>
                <td><button className='admin-btn'>Edit</button></td>
            </tr>
        </tbody>


    </table>
   </div>
   </>
  )
}

export default Admin