import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div><div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-01.jpg"
                    alt="Card image cap"
                    className="img-fluid" 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Chocolate Cake</h5>
                  <p className="card-text">
                  Indulge in the luxurious decadence of chocolate cake, a moist and rich treat that captivates the senses with its intense cocoa flavor.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
        <div><div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-02.jpg"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pancake</h5>
                  <p className="card-text">
                  Savor the fluffy goodness of our pancakes, perfectly golden and irresistibly light, served with a touch of sweetness to brighten your morning.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
        <div><div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-03.jpg"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Tall Bread</h5>
                  <p className="card-text">
                  Experience the delightful simplicity of our tall bread, boasting a perfectly risen crust and a soft, airy interior that promises to elevate your dining experience to new heights.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
        <div><div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-04.jpg"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Blueberry CheeseCake</h5>
                  <p className="card-text">
                  Blueberry cheesecake is a delectable dessert featuring a creamy, tangy cheesecake filling swirled with vibrant blueberry compote, all nestled atop a buttery graham cracker crust.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
              <div> <div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-05.jpg"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cup Cake</h5>
                  <p className="card-text">
                  Satisfy your sweet cravings with our delectable cupcakes, baked to perfection and topped with swirls of creamy frosting for an irresistible treat.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
              <div><div className="card">
                <div className="image-wrapper">
                  <img
                    src="./images/menu-item-06.jpg"
                    alt="Card image cap"
                    className="img-fluid"
                    style={{ height: 420 }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Apple Pie</h5>
                  <p className="card-text">
                  Experience the nostalgia of homemade goodness with our comforting apple pie, featuring tender slices of apple nestled in a flaky crust.
                  </p>
                  <a href="#reservation" className="btn btn-primary">
                    Make Reservation
                  </a>
                </div>
              </div></div>
              
      </Carousel>
    </div>
  );
}

export default Slider;
