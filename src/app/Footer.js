import React from "react";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h3>For more information</h3>
              <p>24/7 Call us now.</p>
              <p className="lead">
                <a href="tel://">+ 91 8884108040</a>
              </p>
            </div>
            <div className="col-md-4">
              <h3>Connect With Us</h3>
              <p>We are socialized. Follow us</p>
              <p>
                <a href="#" className="pl-0 p-3">
                  <span className="fa fa-facebook" />
                </a>
                <a href="#" className="p-3">
                  <span className="fa fa-twitter" />
                </a>
                <a href="#" className="p-3">
                  <span className="fa fa-instagram" />
                </a>
                <a href="#" className="p-3">
                  <span className="fa fa-vimeo" />
                </a>
                <a href="#" className="p-3">
                  <span className="fa fa-youtube-play" />
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h3>Contact us for the best holiday</h3>
              <p>
                We will be waiting to serve you with best experience. Thank you.
              </p>
              <form action="#" className="subscribe">
                <div className="form-group">
                  <button type="submit">
                    <span className="ion-ios-arrow-thin-right" />
                  </button>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              ©{" "}The Golden Escape
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </footer>
      {/* END footer */}
      {/* loader */}
      {/* <div id="loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx={24}
            cy={24}
            r={22}
            fill="none"
            strokeWidth={4}
            strokeMiterlimit={10}
            stroke="#f4b214"
          />
        </svg>
      </div> */}
    </>
  );
}

export default Footer;
