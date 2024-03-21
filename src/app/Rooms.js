import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Rooms() {
  return (
    <div>
      <Header/>
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/presidential.png)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Presidential Suit</h1>
                <p>Experience the luxury stay in The Golden Escape!!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <section className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/desk.webp"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Executive Work Desk</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-phone" />
                    <i className="fa fa-wifi" />
                    <i className="fa fa-tv" />
                  </ul>
                  <p>
                    Elevate your productivity with the executive work desk in
                    our resort room. Designed for comfort and efficiency, it
                    offers a spacious layout and essential amenities, ensuring a
                    seamless blend of work and relaxation during your stay.{" "}
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/safe.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Personal In-room Safe Deposit Box</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-phone" />
                    <i className="fa fa-wifi" />
                    <i className="fa fa-tv" />
                  </ul>
                  <p>
                    Keep your valuables secure during your stay with our resort
                    room's safe box. Enjoy peace of mind knowing your belongings
                    are protected with advanced security features.
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/mini.jpeg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 260, width: 260 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Mini-Bar</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-glass" />
                    <i className="fa fa-cutlery" />
                  </ul>
                  <p>
                    Quench your thirst and satisfy cravings with the convenient
                    mini bar in our resort room. Stocked with a variety of
                    beverages and snacks, it's the perfect companion for a
                    relaxing evening or a quick pick-me-up during your stay.
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/jacuzzi.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Jacuzzi</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-bath" />
                    <i className="fa fa-glass" />
                  </ul>
                  <p>
                    Savor the luxury of a personal retreat with the private
                    jacuzzi in our resort room. Designed for pure indulgence, it
                    invites you into a world of relaxation.
                    Let the gentle jets melt away tension, and drift into a state of
                    blissful tranquility.{" "}
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/private.jpeg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Private Pool</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-bath" />
                    <i className="fa fa-glass" />
                    <p>
                      Indulge in pure relaxation with the private pool in our
                      resort room, providing an exclusive oasis for your
                      enjoyment. Dive in and unwind, surrounded by luxury and
                      tranquility throughout your stay.
                    </p>
                    <p>
                      <a href="/booknow" className="btn btn-primary btn-sm">
                        Book Now
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/spa.avif"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Spa</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-glass" />
                  </ul>
                  <p>
                    Transform your resort room into a personal sanctuary with an
                    in-room spa experience, where relaxation is just steps away.
                    Pamper yourself with rejuvenating treatments, indulging in ultimate comfort and
                    luxury.{" "}
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/balcony.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Attached Balcony</a>
                  </h3>
                  <ul className="room-specs">
                    <li>
                      <span className="ion-ios-crop" /> 22 ft <sup>2</sup>
                    </li>
                    <i className="fa fa-phone" />
                    <i className="fa fa-wifi" />
                    <i className="fa fa-glass" />
                    <i className="fa fa-cutlery" />
                  </ul>
                  <p>
                    Elevate your resort experience with a private balcony in
                    your room, offering breathtaking views and moments of
                    serenity. Sip your morning coffee as you soak in panoramic
                    vistas or unwind with a glass of wine as the sun sets,
                    immersing yourself in the beauty of your surroundings.{" "}
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/tv.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Plasma Screen TV</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-wifi" />
                    <i className="fa fa-tv" />
                  </ul>
                  <p>
                    Enhance your resort room experience with a state-of-the-art
                    plasma screen TV, providing entertainment and relaxation at
                    your fingertips. Enjoy your favorite movies or shows in
                    stunning clarity and immerse yourself in a cinematic
                    experience from the comfort of your own room.{" "}
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/tea.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Service
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Coffee &amp; Tea Facilities</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-glass" />
                    <i className="fa fa-cutlery" />
                  </ul>
                  <p>
                    Savor the convenience and comfort of coffee and tea
                    facilities in your resort room, offering a delightful start
                    to your day or a relaxing break anytime. Enjoy the freedom
                    to brew your favorite beverages at your leisure, creating
                    moments of warmth and indulgence during your stay.
                  </p>
                  <p>
                    <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Rooms;
