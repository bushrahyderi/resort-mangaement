import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div>
      <Header/>
      <section
        className="site-hero site-hero-innerpage overlay"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(./images/big_image_1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-12 text-center">
              <div className="mb-5 element-animate fadeInUp element-animated">
                <h1>Services &amp; Activities</h1>
                <p>Explore Our Resorts Services And Activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END section */}
      <section className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="post-entry">
              <Link to="/blogsingle">
                  <img
                    src="./images/indoor.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Activities</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Indoor Activities</Link>
                  </h3>
                  <p className="mb-4">
                    Being Indoor and having fun is one of the best things a
                    person can have. And our resort is excellent in providing
                    that
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                <img
                    src="./images/outdoor.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Activities</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Outdoor Activities</Link>
                  </h3>
                  <p className="mb-4">
                    Having fun with your whole gang with sun marking its
                    presence in one of the best thing to experience in life. Our
                    resort excels in providing perfect setup for games like
                    Cricket....
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                  <img
                    src="./images/special.jpeg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Activities</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Special</Link>
                  </h3>
                  <p className="mb-4">
                    Want to have a fun bonfire night with your friends
                    forgetting all your stress, or want to bond with animals
                    while enjoying horse riding? What are you waiting for?Book
                    now!!
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                  <img
                    src="./images/wedding.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Weddings</Link>
                  </h3>
                  <p className="mb-4">
                    Getting hitched with a good background and nature
                    surrounding sounds satisfying,isn't it? Our resort promises
                    to provide you lifetime memories
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                  <img
                    src="./images/birthday.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Birthday Parties</Link>
                  </h3>
                  <p className="mb-4">
                    In today's modern world, everyone have great dreams for
                    their birthdays, but no time to arrange for it. Give us a
                    chance and you won't be dissatisfied
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                  <img
                    src="./images/business.webp"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Bussiness Events</Link>
                  </h3>
                  <p className="mb-4">
                    Our resort has special offers for business events wherein
                    you not only get to have bussiness meetings,but also have
                    facilities to participate in events which helps you reducing
                    stress.
                  </p>
                  <p>
                    <a
                      href="#"
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
              <Link to="/blogsingle">
                  <img
                    src="./images/pool.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Pool Parties</Link>
                  </h3>
                  <p className="mb-4">
                    We have special pool parties offers like wave pool,deep pool
                    wherein you get to experience the wonders of waters. Some
                    rides are also included for fun of our customers.
                  </p>
                  <p>
                    <a
                      href="#"
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
               <Link to="/blogsingle">
                  <img
                    src="./images/music.png"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                  <Link to="/blogsingle">Music Festivals</Link>
                  </h3>
                  <p className="mb-4">
                    Indulge in the perfect harmony of relaxation and rhythm at
                    our resort, where music festivals ignite the senses. Immerse
                    yourself in live performances under the stars, offering a
                    diverse lineup catering to every musical taste.
                  </p>
                  <p>
                    <a
                      href="#"
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
                <Link to="/blogsingle">
                  <img
                    src="./images/art.png"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                </Link>
                <div className="body-text">
                  <div className="category">Events</div>
                  <h3 className="mb-3">
                    <Link to="/blogsingle">Art Exhibition</Link>
                  </h3>
                  <p className="mb-4">
                    Immerse yourself in artistic wonder at our resort, where
                    captivating exhibitions await. From contemporary marvels to
                    timeless classics, our galleries promise an immersive
                    experience for every art lover.{" "}
                  </p>
                  <p>
                    <a
                      href="#"
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
    </div>
  );
}

export default Blog;
