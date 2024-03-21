import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

function Menu() {
  return (
    <>
      <div>
        <div>
          <Header />
          <section
            className="site-hero site-hero-innerpage overlay"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(./images/slide-01.jpg)" }}
          >
            <div className="container">
              <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-12 text-center">
                  <div className="mb-5 element-animate fadeInUp element-animated">
                    <h1>Welome To Our Restaurant</h1>
                    <p>Discover our Exotic Menu</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Preloader Start ***** */}
          {/* <div id="preloader">
        <div className="jumper">
          <div />
          <div /> */}
          <div />
        </div>
      </div>

      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}

      {/* ***** Main Banner Area End ***** */}
      {/* ***** About Area Starts ***** */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h2>We Leave A Delicious Memory For You</h2>
                </div>
                <p>
                  Nestled within the tranquil oasis of our resort, our
                  restaurant offers a culinary experience that harmonizes with
                  the serene surroundings. Embracing locally-sourced ingredients
                  and global inspirations, our menu tantalizes the palate with a
                  fusion of flavors. Dine al fresco on our panoramic terrace
                  overlooking lush gardens, or indulge in intimate indoor
                  seating adorned with contemporary elegance.
                  <br />
                  <br /> Whether savoring a leisurely breakfast, enjoying a
                  light lunch, or relishing a gourmet dinner under the stars,
                  each dish is crafted with passion and precision, promising a
                  gastronomic journey that celebrates the essence of relaxation
                  and indulgence. Welcome to a culinary retreat where every bite
                  is a moment to remember.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src="./images/about-thumb-01.jpg" alt />
                  </div>
                  <div className="col-4">
                    <img src="./images/about-thumb-02.jpg" alt />
                  </div>
                  <div className="col-4">
                    <img src="./images/about-thumb-03.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-content">
                <div className="thumb">
                  <a rel="nofollow" href="http://youtube.com">
                    <i className="fa fa-play" />
                  </a>
                  <img src="./images/about-video-bg.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** About Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
      <section className="section" id="menu">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-heading">
                <h6>Our Menu</h6>
                <h2>Our selection of cakes with quality taste</h2>
              </div>
            </div>
          </div>
        </div>
        <Slider/>
      </section>

      {/* ***** Menu Area Ends ***** */}

      {/* ***** Reservation Us Area Starts ***** */}
      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our cafe
                  </h2>
                </div>
                <p>
                  Reserve your table at our resort restaurant to guarantee a
                  seamless dining experience amidst our serene surroundings.
                  Whether it's a romantic dinner or a gathering with loved ones,
                  booking in advance ensures your preferred seating and allows
                  our team to cater to your every need.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone" />
                      <h4>Phone Numbers</h4>
                      <span>
                        <a href="#">080-090-0990</a>
                        <br />
                        <a href="#">080-090-0880</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope" />
                      <h4>Emails</h4>
                      <span>
                        <a href="#">hello@company.com</a>
                        <br />
                        <a href="#">info@company.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact" action method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Table Reservation</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          palceholder="Enter Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="col-md-12 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          palceholder="Enter Your Email"
                          pattern="[^ @]*@[^ @]*"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label htmlFor="pnum">Phone Number</label>
                        <input
                          type="text"
                          id="pnum"
                          className="form-control"
                          palceholder="Enter Your Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="room">Guests</label>
                      <select name id="room" className="form-control">
                        <option value>Guests</option>
                        <option value>1 Guest</option>
                        <option value>2 Guests</option>
                        <option value>3 Guests</option>
                        <option value>4 Guests</option>
                        <option value>5+ Guests</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <div id="filterDate2">
                        {/* <div
                          className="input-group date"
                          data-date-format="dd/mm/yyyy"
                        > */}
                        <label htmlFor="date">Date</label>
                        <input
                          name="date"
                          id="date"
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/yyyy"
                          required
                        />
                        <div className="input-group-addon">
                          <span className="glyphicon glyphicon-th" />
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="room">Time</label>
                      <select name id="room" className="form-control">
                        <option value>Time</option>
                        <option value>Breakfast</option>
                        <option value>Lunch</option>
                        <option value>Dinner</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          rows={6}
                          id="message"
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                        >
                          Make A Reservation
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Reservation Area Ends ***** */}
      {/* ***** Menu Area Starts ***** */}
      <section className="section" id="offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Golden Week</h6>
                <h2>This Week’s Special Meal Offers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <ul>
                          <li>
                            <a href="#tabs-1">
                              <img src="./images/tab-icon-01.png" alt />
                              Breakfast
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-2">
                              <img src="./images/tab-icon-02.png" alt />
                              Lunch
                            </a>
                          </li>
                          <li>
                            <a href="#tabs-3">
                              <img src="./images/tab-icon-03.png" alt />
                              Dinner
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/soup.jpg" alt />
                                  <h4>Tomato And Basil Soup</h4>
                                  <p>
                                  Country Tomatoes, Basil, Cream
                                  </p>
                                  <div className="price">
                                    <h6>INR 380</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-02.png" alt />
                                  <h4>Orange Juice</h4>
                                  <p>
                                  Refreshing citrus drink, packed with vitamin C, squeezed from ripe oranges.
                                  </p>
                                  <div className="price">
                                    <h6>INR 100</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-03.png" alt />
                                  <h4>Fruit Salad</h4>
                                  <p>
                                  Colorful medley of fresh fruits, diced and mixed for a sweet and refreshing treat.
                                  </p>
                                  <div className="price">
                                    <h6>INR 140</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-04.png" alt />
                                  <h4>Eggs Omelette</h4>
                                  <p>
                                  Whisked eggs cooked with fillings, folded into a fluffy and flavorful breakfast dish.
                                  </p>
                                  <div className="price">
                                    <h6>INR 150</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/parota.webp" alt style={{height:80}} />
                                  <h4>Kerala Parotta, Lachha Paratha,</h4>
                                  <p>
                                  Flaky South, Layered and  Mint-infused Indian flatbread.
                                  </p>
                                  <div className="price">
                                    <h6>INR 90</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-06.png" alt />
                                  <h4>Omelette &amp; Cheese</h4>
                                  <p>
                                  Classic breakfast combo of fluffy eggs folded around melted cheese.
                                  </p>
                                  <div className="price">
                                    <h6>INR 200</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-2">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/lemonade.jpg" alt  style={{height:80}}/>
                                  <h4>Basil Lemonade</h4>
                                  <p>
                                  Basil, Sweet & Sour Mix, Soda
                                  </p>
                                  <div className="price">
                                    <h6>INR 200</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-05.png" alt />
                                  <h4>Chicken 65</h4>
                                  <p>
                                  Egg, Yoghurt, Red Chilli, Garlic, Curry Leaves
                                  </p>
                                  <div className="price">
                                    <h6>INR 650</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/salmon.webp" alt style={{height:80}}/>
                                  <h4>Pan-Seared Salmon</h4>
                                  <p>
                                  Glazed Vegetables, Shaved Fennel
                                  </p>
                                  <div className="price">
                                    <h6>INR 980</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/tab-item-01.png" alt />
                                  <h4>Fresh Chicken Salad</h4>
                                  <p>
                                  Glazed Wild Mushrooms, Poached Egg in Truffle Oil
                                  </p>
                                  <div className="price">
                                    <h6>INR 450</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/biryani.webp" alt style={{height:80}}/>
                                  <h4>Awadhi Dum Biryani</h4>
                                  <p>
                                  Basmati Rice Cooked in its own stock, Spices, Rose Water, Saffron <br/> 
                                  </p>
                                  <div className="price">
                                    <h6>INR 999</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/naan.webp" alt />
                                  <h4>Naan</h4>
                                  <p>
                                  Plain, Garlic or Butter
                                  </p>
                                  <div className="price">
                                    <h6>INR 250</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article id="tabs-3">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="left-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/pizza.webp" alt />
                                  <h4>Pizza</h4>
                                  <p>
                                  Tomato Slices, Fresh Buffalo Mozzarella, Nutty Pesto & Basil Leaves
                                  </p>
                                  <div className="price">
                                    <h6>INR 500</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/pasta.avif" alt />
                                  <h4>Pasta</h4>
                                  <p>
                                  AOP, Aglio Olio, Spicy Creamy Tomato, Alfredo, Arrabbiata
                                  </p>
                                  <div className="price">
                                    <h6>INR 850</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/dal.avif" alt />
                                  <h4>Dal Tadka</h4>
                                  <p>
                                  Yellow Lentils Cooked with Cumin, Garlic
                                  </p>
                                  <div className="price">
                                    <h6>INR 650</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row">
                            <div className="right-list">
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/sandwich.jpg" alt />
                                  <h4>Club Sandwich</h4>
                                  <p>
                                  Multigrain Loaf, Bacon, Chicken
                                  </p>
                                  <div className="price">
                                    <h6>INR 350</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/salad.jpg" alt />
                                  <h4>Chicken Caesar Salad</h4>
                                  <p>
                                  Cos Lettuce, Grilled Chicken, Crispy Bacon, Boiled Egg, Parmesan Dressing
                                  </p>
                                  <div className="price">
                                    <h6>INR 700</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="tab-item">
                                  <img src="./images/paneer.png" alt />
                                  <h4>Paneer Khatta Pyaaz</h4>
                                  <p>
                                  Marinated Indian Cottage Cheese with Pickled Onion,Tomato-Based Gravy.
                                  </p>
                                  <div className="price">
                                    <h6>INR 670</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
