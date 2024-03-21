import React from 'react'
import Header from "./Header";
import Footer from './Footer';

function About() {
  return (
    <>
    <div>
    <Header/>

  <section className="site-hero site-hero-innerpage overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(./images/big_image_1.jpg)'}}>
    <div className="container">
      <div className="row align-items-center site-hero-inner justify-content-center">
        <div className="col-md-12 text-center">
          <div className="mb-5 element-animate fadeInUp element-animated">
            <h1>About The Golden Escape</h1>
            <p>Discover our #1 Resort</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="site-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="heading-wrap  element-animate fadeInUp element-animated">
            <h4 className="sub-heading">Stay in our luxury villas</h4>
            <h2 className="heading">Our Aim</h2>
            <p className>People lead a very hectic life everyday. The only time they can relax and have fun is holiday. So we will provide you the most relaxing, thrilling and adventurous experience to you.</p>
            <p>Our main aim is to make sure that you have a wonderful stay and spend quality time with your family and friends. We will ensure you with all the facilities. 2days of stay in our resort will be your lifetime best memories!!</p>
            <p>Then what are you waiting for? Book now and meet us here!!!<br />
              #We are excited to serve you
            </p>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-7">
          <img src="https://www.india.com/wp-content/uploads/2018/08/yoga-resorts-in-india.jpg" alt="Image placeholder" className="img-md-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="site-section bg-light">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-12 heading-wrap text-center">
          <h4 className="sub-heading">We have 3 branches</h4>
          <h2 className="heading">Our branches</h2>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4">
          <div className="post-entry">
            <img src="./images/kerala.jpeg" alt="Image placeholder" className="img-fluid" />
            <div className="body-text">
              <div className="category">Main branch</div>
              <h3 className="mb-3"><a href="#">Kerala</a></h3>
              <p className="mb-4">Have the best experience in Gods own beauty!!</p>
              <p><a href="/booknow" className="btn btn-primary btn-outline-primary btn-sm">Book now !</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post-entry">
            <img src="images/goa2.webp" alt="Image placeholder" className="img-fluid" style={{height: 260}} />
            <div className="body-text">
              <div className="category">Branch 2</div>
              <h3 className="mb-3"><a href="#">Goa</a></h3>
              <p className="mb-4">Even the Portugese couldn't resist its beauty... Come and check on your own!!!</p>
              <p><a href="/booknow" className="btn btn-primary btn-outline-primary btn-sm">Book now !</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post-entry">
            <img src="./images/sikkim.jpg" alt="Image placeholder" className="img-fluid" style={{height: 260}} />
            <div className="body-text">
              <div className="category">Branch 3</div>
              <h3 className="mb-3"><a href="#">Sikkim</a></h3>
              <p className="mb-4">Come and experience the mind blowing and extra-ordinary uniqueness of nature in the only brother among the seven sisters!!!</p>
              <p><a href="/booknow" className="btn btn-primary btn-outline-primary btn-sm">Book now !</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END section */}
  <section className="section-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/video.webp)'}}>
    <div className="container">
      <div className="row justify-content-center align-items-center intro">
        <div className="col-md-9 text-center element-animate">
          <h2>Relax and Enjoy your Holiday</h2>
          <p className="lead mb-5">Discover your slice of Paradise!!!</p>
          <div className="btn-play-wrap"><a href="https://youtu.be/-LZYu0r-8_I?si=MHDJ1ANlGV7RG00m" className="btn-play popup-youtube-play "><span className="ion-ios-play" /></a></div>
        </div>
      </div>
    </div>
    </section>
    <Footer/>
</div>

    </>
  )
}

export default About