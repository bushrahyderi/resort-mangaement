import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { a } from 'react-router-dom';
import Popup from "./Popup";

function Index() {
  return (
    <>
     <Header/>
      <section
        className="site-hero overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/big_image_1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Welcome To The Golden Escape</h1>
                <p>Best Memories Start Here.</p>
                <p>
                <a to="/booknow" className="btn btn-primary">
                    Book Now
                  </a>

                </p>
              </div>
                  <Popup/>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <section className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="heading-wrap text-center element-animate fadeInUp element-animated">
                <h4 className="sub-heading">Stay with our luxury rooms</h4>
                <h2 className="heading">Stay and Enjoy</h2>
                <p className="mb-5">
                  Dive into a world of unparalleled excitement. Embark on a
                  thrilling adventure as we proudly boast the city's best resort
                  attractions that have captivated the hearts of our visitors.
                  From heart-pounding slides to exhilarating wave pools, our
                  attractions redefine fun, delivering the perfect blend of
                  excitement and joy. Come, experience the city's most beloved
                  resort and take a ride into a realm of unparalleled thrills.
                  Your unforgettable journey begins here!
                </p>
                <p>
                  <a href="/about" className="btn btn-primary btn-sm">
                    More About Us
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-7">
              <img
                src="./images/f_img_1.png"
                alt="Image placeholder"
                className="img-md-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      
      <section className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 heading-wrap text-center">
              <h4 className="sub-heading">Our Luxury Stays</h4>
              <h2 className="heading">Featured Stays</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-7">
              <div className="media d-block room mb-0">
                <figure>
                  <img
                    src="./images/img_1.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid" style={{ height: 330, width: 600,}}
                  />
                  <div className="overlap-text">
                    <span>
                      Luxury Stay
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="/booknow">Presidential Stay</a>
                  </h3>
                  <ul className="room-specs">
                    <i className="fa fa-bath" />
                    <i className="fa fa-phone" />
                    <i className="fa fa-wifi" />
                    <i className="fa fa-tv" />
                    <i className="fa fa-glass" />
                    <i className="fa fa-cutlery" />
                    <p />
                    <li>
                      <span className="ion-ios-people-outline" /> 2 Guests
                    </li>
                    <li>
                      <span className="ion-ios-crop" /> 22 ft <sup>2</sup>
                    </li>
                  </ul>
                  <p>
                    Every morning feels like a dream in this room . Waking up to
                    this view is everything you need. The view is even better
                    from this room. This room with a view is pure bliss.{" "}
                  </p>
                  <p>
                  <a href="/booknow" className="btn btn-primary btn-sm">
                      Book Now From Rs.8000
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 room-thumbnail-absolute">
            <a href="/booknow"
                className="media d-block room bg first-room"
                style={{ backgroundImage: "url(./images/beachvilla.jpg)" }}
              >
                {/* <figure> */}
                <div className="overlap-text">
                  <span>
                    Beach Villa
                    <span className="ion-ios-star" />
                    <span className="ion-ios-star" />
                    <span className="ion-ios-star" />
                  </span>
                  <span className="pricing-from">from Rs.5000</span>
                </div>
                {/* </figure> */}
              </a>
              <a href="/booknow"
                className="media d-block room bg second-room"
                style={{ backgroundImage: "url(./images/naturevilla.jpg)" }}
              >
                {/* <figure> */}
                <div className="overlap-text">
                  <span>
                    Nature Villa
                    <span className="ion-ios-star" />
                    <span className="ion-ios-star" />
                    <span className="ion-ios-star" />
                  </span>
                  <span className="pricing-from">from Rs.4000</span>
                </div>
                {/* </figure> */}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 heading-wrap text-center">
              <h4 className="sub-heading">Our duty is to comfort you</h4>
              <h2 className="heading">Our Exclusive Services </h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <div className="post-entry">
                <img
                  src="./images/varieties.avif"
                  alt="Image placeholder"
                  className="img-fluid"
                  style={{ height: 245 }}
                />
                <div className="body-text">
                  <div className="category">Stays</div>
                  <h3 className="mb-3">
                    <a href="#">Variety of stays</a>
                  </h3>
                  <p className="mb-4">
                    We provide different stays. You can choose whatever kind of
                    rooms you want like beach villas or nature villas or
                    mountain villas or presidential stay.
                  </p>
                  <p>
                    <a
                      href="/blog"
                      className="btn btn-primary btn-outline-primary btn-sm"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-entry">
                <img
                  src="./images/adventure-ladder.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="body-text">
                  <div className="category">Adventures</div>
                  <h3 className="mb-3">
                    <a href="#">All kinds of adventure games</a>
                  </h3>
                  <p className="mb-4">
                    We have different adventure games which will make your
                    holiday memorable. Best trainers and guides will help you
                    out to make best memories during the activities!!!
                  </p>
                  <p>
                    <a
                      href="/blog"
                      className="btn btn-primary btn-outline-primary btn-sm"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-entry">
                <img
                  src="./images/dining.jpg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                    <a href="#">We organize all events</a>
                  </h3>
                  <p className="mb-4">
                    The Golden Escape provides event organization facility. We
                    organize all kind of events. Be it official gathering or
                    birthday parties or wedding we provide you the best
                    environment.
                  </p>
                  <p>
                    <a
                      href="/blog"
                      className="btn btn-primary btn-outline-primary btn-sm"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Index;
