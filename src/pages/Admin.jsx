import React from 'react'
import Navbar from '../components/Navbar'

function Admin() {
  return (
    <>
    <Navbar/>
    <div>
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>!</td>
            <td>@</td>
            <td>#</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>

    </div>
    </>
  )
}

export default Admin