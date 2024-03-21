import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Beach() {
  return (
    <div>
      <Header />

      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/beach.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Beach Villas</h1>
                <p>Embrace the depth of water!!</p>
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
                    src="./images/sports.jpg"
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
                    <a href="#">Water Sports Facilities</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Beach villas offer water sports facilities, enabling guests
                    to enjoy activities like snorkeling and kayaking for an
                    adventurous seaside experience. This amenity adds excitement
                    and variety to the coastal stay, allowing guests to explore
                    the vibrant marine environment.
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
                    src="./images/terrace.webp"
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
                    <a href="#">Beach Front Balconies and Terraces</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Beach villas feature beachfront balconies and terraces,
                    providing guests with private spaces to enjoy the calming presence of the sea. These outdoor
                    areas offers a relaxation and appreciation of the coastal
                    surroundings.
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
                    src="./images/beachdine.jpg"
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
                    <a href="#">Beach side dining</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Beach villas offer beachside dining, providing guests with a
                    picturesque setting to enjoy meals with the
                    soothing sounds of the ocean. This experience
                    enhances the overall beachfront stay, creating memorable
                    moments in the heart of coastal tranquility.
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
                    src="./images/cabana.jpg"
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
                    <a href="#">Sun Loungers and Cabanas</a>
                  </h3>
                  <ul className="room-specs">
                    <p>
                      Beach villas offer sun loungers and cabanas, providing
                      guests with stylish and comfortable options to relax by
                      the shore. This beachside amenity enhances the overall
                      experience, allowing guests to enjoy the coastal ambiance
                      in leisure and comfort.
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
                    src="./images/shower.jpeg"
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
                    <a href="#">Outdoor Showers</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Beach villas feature outdoor showers, allowing guests to
                    rinse off under the open sky in a refreshing and private
                    setting. This simple luxury adds a unique and invigorating
                    element to the beach villa experience, enhancing the overall
                    stay by connecting guests with the natural surroundings.
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
                    src="./images/cruises.avif"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ height: 250 }}
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
                    <a href="#">Sunset Cruises</a>
                  </h3>
                  <ul className="room-specs"></ul>
                  <p>
                    Beach villas provide sunset cruises, offering guests a
                    picturesque journey along the coastline to witness the
                    stunning beauty of the setting sun over the sea. This
                    amenity adds a romantic and relaxing touch to the beach
                    villa experience, creating memorable moments in the serene
                    coastal setting.
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

export default Beach;
