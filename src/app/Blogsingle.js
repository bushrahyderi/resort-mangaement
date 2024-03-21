import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Blogsingle() {
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
      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <h1 className="mb-4">Reviews</h1>
              <div className="post-meta">
                <span className="category">Activities</span>
                <span className="mr-2">January 20, 2024 </span> •
                <span className="ml-2">
                  <span className="fa fa-comments" /> 3
                </span>
              </div>
              <div className="post-content-body">
                <p>
                  Unleash your competitive spirit and embrace endless fun at our
                  resort's indoor games paradise. Step into our vibrant
                  recreation area, where laughter echoes against the walls and
                  excitement fills the air. Challenge friends and family to
                  exhilarating rounds of billiards, table tennis, or foosball,
                  as each game sparks moments of friendly rivalry and
                  camaraderie. Dive into immersive gaming experiences with
                  state-of-the-art consoles or test your skills with classic
                  board games. Rain or shine, our indoor games offer a haven of
                  entertainment, ensuring that every moment is filled with joy
                  and laughter during your stay at our resort.
                </p>
                <p>
                  Went there for business event. Came to know abt indoor games
                  facilities and ended up going to play badminton. Made new
                  friends. had an excellent experience!!
                </p>
                <div className="row mb-5">
                  <div className="col-md-12 mb-4 element-animate">
                    <img
                      src="./images/indoorgame.avif"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 mb-4 element-animate">
                    <img
                      src="./images/tennis.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 mb-4 element-animate">
                    <img
                      src="./images/badminton.jpg"
                      alt="Image placeholder"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <p>
                  At our resort, we pride ourselves on providing a comprehensive
                  array of indoor games, catering to every taste and preference.
                  Step into our recreation area and prepare to embark on a
                  journey of endless entertainment. For those seeking classic
                  competitive fun, our billiards tables await, where players can
                  showcase their skills and strategize for victory in
                  exhilarating matches. If fast-paced action is more your style,
                  our table tennis courts offer the perfect setting for
                  thrilling rallies and lightning-fast reflexes. For a dose of
                  nostalgia and friendly competition, gather around our foosball
                  tables and engage in spirited matches that never fail to bring
                  out the competitive spirit in players of all ages.
                  <br />
                  <br />
                  But the excitement doesn't stop there. Dive into the world of
                  immersive gaming with our state-of-the-art consoles, where
                  players can lose themselves in virtual adventures and
                  thrilling multiplayer battles. From racing games that get
                  adrenaline pumping to immersive role-playing experiences that
                  transport players to fantastical realms, our gaming area
                  offers something for every gaming enthusiast.
                  <br />
                  <br />
                  For those who prefer a more relaxed pace, our collection of
                  classic board games provides the perfect opportunity to unwind
                  and connect with friends and family. Whether it's a strategic
                  game of chess, a lively round of Scrabble, or a suspenseful
                  game of Clue, our board game collection ensures that laughter
                  and memories are always on the agenda. Rain or shine, our
                  indoor games paradise offers a haven of entertainment for
                  guests of all ages and interests. So whether you're seeking
                  competitive thrills, immersive gaming experiences, or
                  laid-back fun, our resort has everything you need to make your
                  stay unforgettable.
                </p>
              </div>
              <div className="pt-5"></div>
              <div className="pt-5">
                <h3 className="mb-5"> Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard">
                      <img src="./images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Person 1</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard">
                      <img src="./images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Person 2</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard">
                          <img
                            src="./images/person_1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>Person 3</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>
                            <a href="#" className="reply">
                              Reply
                            </a>
                          </p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard">
                              <img
                                src="images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>Person 4</h3>
                              <div className="meta">
                                January 9, 2018 at 2:21pm
                              </div>
                              <p>
                                <a href="#" className="reply">
                                  Reply
                                </a>
                              </p>
                            </div>
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard">
                                  <img
                                    src="images/person_1.jpg"
                                    alt="Image placeholder"
                                  />
                                </div>
                                <div className="comment-body">
                                  <h3>Person 5</h3>
                                  <div className="meta">
                                    January 9, 2018 at 2:21pm
                                  </div>
                                  <p>
                                    <a href="#" className="reply">
                                      Reply
                                    </a>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="vcard">
                      <img src="./images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Person 6</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        <a href="#" className="reply">
                          Reply
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
                {/* END comment-list */}
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* END main-content */}
            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search" />
                    <input
                      type="text"
                      className="form-control"
                      id="s"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
              {/* END sidebar-box */}
              <div className="sidebar-box">
                <h3 className="heading">Popular Posts</h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <a href>
                        <img
                          src="./images/img_1.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> •
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <img
                          src="./images/img_1.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> •
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href>
                        <img
                          src="./images/img_1.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span> •
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END sidebar-box */}
              <div className="sidebar-box">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      Courses <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      News <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span>(37)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      HTML <span>(42)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Web Development <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* END sidebar-box */}
              <div className="sidebar-box">
                <h3 className="heading">Tags</h3>
                <ul className="tags">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* END sidebar */}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Blogsingle;
