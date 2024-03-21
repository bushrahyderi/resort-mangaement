import React from "react";
import Header from "./Header";
import Footer from "./Footer";


function Nature() {
  return (
    <div>
       <Header/>
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/nature.webp)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Nature Villas</h1>
                <p>Experience the beauty of nature throughout you stay!!</p>
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
                    src="./images/space.jpg"
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
                    <a href="#">Private Outdoor Spaces</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Nature villa resorts offer private outdoor spaces, providing
                    guests with a personalized retreat to enjoy the serene
                    surroundings. Whether a balcony, or terrace, these
                    areas enhance the overall experience, offering a peaceful
                    escape in the heart of nature.
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
                    src="./images/hike.avif"
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
                    <a href="#">Nature Walks And Hiking Trails</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Nature villa feature on-site nature walks and hiking trails,
                    allowing guests to explore the beautiful natural surroundings at their
                    own pace and enhancing the overall experience with fun outdoor
                    activities.
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
                    src="./images/organic.jpg"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 260 }}
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
                    <a href="#">Organic Gardens</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Nature villa feature an on-site organic garden, allowing
                    guests to experience farm-to-table dining or simply enjoy
                    the beauty of a well-maintained garden. This amenity adds a
                    touch of freshness, providing a unique and sustainable
                    aspect to the overall guest experience.
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
                    src="./images/wild.webp"
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
                    <a href="#">Wildlife Observation</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Nature villa provide a dedicated wildlife observation area,
                    allowing guests to connect with nature and appreciate local
                    fauna in a peaceful setting. It's a tranquil space where
                    guests can embrace the beauty of the natural environment and
                    encounter the wonders of the local ecosystem.
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
                    src="./images/dine.jpg"
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
                    <a href="#">Outdoor Dining Spaces</a>
                  </h3>
                  <ul className="room-specs">
                    <p>
                      Nature villa feature a serene outdoor dining area, where
                      guests can relish their meals in a tranquil setting,
                      enveloped by the captivating beauty of the natural
                      surroundings. Create a memorable dining experience amid
                      the peace and serenity of the resort.
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
                    src="./images/star.avif"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <div className="overlap-text">
                    <span>
                      Featured Services
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                      <span className="ion-ios-star" />
                    </span>
                  </div>
                </figure>
                <div className="media-body">
                  <h3 className="mt-0">
                    <a href="#">Star gazing Area</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Nature villas feature cozy stargazing spots, allowing guests
                    to immerse themselves in the quietude of the night. The
                    absence of urban lights provides an unobstructed view of the
                    celestial wonders, creating a magical atmosphere for a
                    memorable stargazing experience during their stay.{" "}
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

export default Nature;
