import React, { useState} from "react";
import {useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios'

function Booknow() {
  const [name, setName] = useState()
  const [arrival_date, setArrival_Date] = useState()
  const [departure_date, setDeparture_Date] = useState()
  const [rooms, setRooms] = useState()
  const [guests, setGuests] = useState()
  const [email, setEmail] = useState()
  const [contact, setContact] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()


  const Submit = (e) => {
    e.preventDefault();
    console.log(guests, rooms)
    axios.post("http://localhost:3001/booknow", {name, arrival_date, departure_date, rooms, guests, email, contact, message})
    .then(result => {
      console.log(result)
      navigate('/users')
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
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
      {/* END section */}
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-5">Reservation Form</h2>
              <form onSubmit={Submit}>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label htmlFor>Arrival Date</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setArrival_Date(e.target.value)}
                        id="arrival_date"
                      
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 form-group">
                    <label htmlFor>Departure Date</label>
                    <div style={{ position: "relative" }}>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setDeparture_Date(e.target.value)}
                        id="departure_date"
                      
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="room">Room</label>
                    <select name id="room" className="form-control" onChange={(e) => setRooms(e.target.value)}>
                    <option value>Select </option>
                      <option value>1</option>
                      <option value>2 </option>
                      <option value>3 </option>
                      <option value>4 </option>
                      <option value>5 </option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="room">Guests</label>
                    <select name id="room" className="form-control" onChange={(e) => setGuests(e.target.value)}> 
                    <option value>Select </option>
                      <option value>1 </option>
                      <option value>2 </option>
                      <option value>3 </option>
                      <option value>4 </option>
                      <option value>5+ </option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group" >
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control "
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group" >
                    <label htmlFor="phone">Contact</label>
                    <input
                      type="phone"
                      id="phone"
                      className="form-control "
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Write a Note</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control "
                      onChange={(e) => setMessage(e.target.value)}
                      cols={30}
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="submit"
                      defaultValue="Reserve Now"
                      className="btn btn-primary"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-1" />
            <div className="col-md-5">
              <h3 className="mb-5">Featured Room</h3>
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/img_1.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Room
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Presidential Stay</a>
                  </h3>
                  <ul className="room-specs">
                    <li>
                      <span className="ion-ios-people-outline" /> 2 Guests
                    </li>
                    <li>
                      <span className="ion-ios-crop" /> 22 ft <sup>2</sup>
                    </li>
                  </ul>
                  <p>
                    Secure your ideal getaway effortlessly with our convenient
                    "Book Now" option for resort rooms. With just a few clicks,
                    you can reserve your preferred dates and accommodations,
                    ensuring a seamless booking experience. Don't wait to embark
                    on your dream vacation – book now and start counting down
                    the days until relaxation awaits.{" "}
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Book Now From 8000
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <section
        className="section-cover"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/video.webp)" }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center intro">
            <div className="col-md-9 text-center element-animate">
              <h2>Relax and Enjoy your Holiday</h2>
              <p className="lead mb-5">Discover your slice of Paradise!!!</p>
              <div className="btn-play-wrap">
                <a
                  href="https://youtu.be/-LZYu0r-8_I?si=MHDJ1ANlGV7RG00m"
                  className="btn-play popup-youtube-play "
                >
                  <span className="ion-ios-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Booknow;