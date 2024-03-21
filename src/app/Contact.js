import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
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
                <h1>Contact Us</h1>
                <p>Discover our world's #1 Luxury Room For VIP.</p>
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
              <h2 className="mb-5">Contact Form</h2>
              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control " required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" className="form-control " required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control " required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Write Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control "
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
                      defaultValue="Send Message"
                      className="btn btn-primary" required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-1" />
            <div className="col-md-5">
              <h3 className="mb-5">Reviews</h3>
              <p className="mb-5">
                <img src="./images/review.jpg" alt="review" className="img-fluid" />
              </p>
              <p>
                This is a must visit property.. situated amidst dense rain
                forest and within a spice plantation. This property is serene
                and very peaceful... Kudos for the chef n his team for preparing
                very tasty dishes.. very friendly staff who are always ready to
                help... I recommend everyone to experience the beauty of the
                golden escape resort..
              </p>
              <p />
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
      <Footer/>
    </div>
  );
}

export default Contact;
