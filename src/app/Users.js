import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete =(id) => {
    axios.delete('http://localhost:3001/deleteuser/'+id)
    .then(res=> {console.log(res)
      window.location.reload()})
    .catch(err => console.log(err))
}


  return (
    <>
      <Header />
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/big_image_1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Reservation</h1>
                <p>Discover our #1 Luxury Room </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w- bg-white rounded p-4">
          <Link to="/booknow" className="btn btn-success">
            Add User+
          </Link>
          <table className="table" style={{width:100}} >
            <thead>
              <tr>
                <th>Name</th>
                <th >Arrival Date</th>
                <th >Departure Date</th>
                <th >Rooms</th>
                <th >Guests</th>
                <th >Email</th>
                <th >Contact</th>
                <th >Message</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.arrival_date}</td>
                    <td>{user.departure_date}</td>
                    <td>{user.rooms}</td>
                    <td>{user.guests}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>{user.message}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className="btn btn-success">
                        Update
                      </Link>
                      <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Users;
