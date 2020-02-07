import React from 'react';
import Header from './common/Header';
import SocialMedia from './common/SocialMedia';
import About from './common/About';
import ProfilePage from './common/ProfilePage';
import Skills from './common/Skills';

const App = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <div>
          <ProfilePage />
          <About />
          <Skills />
          <div className="section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="h4 text-center mb-4 title">Portfolio</div>
                  <div className="nav-align-center">
                    <ul
                      className="nav nav-pills nav-pills-primary"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#web-development"
                          role="tablist"
                        >
                          <i className="fa fa-laptop" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#graphic-design"
                          role="tablist"
                        >
                          <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#Photography"
                          role="tablist"
                        >
                          <i className="fa fa-camera" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Recent Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-2.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Startup Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-3.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Food Order Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#web-development">
                            <figure className="cc-effect">
                              <img src="images/project-4.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">
                                  Web Advertising Project
                                </div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="graphic-design" role="tabpanel">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-1.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Triangle Pattern</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-2.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Abstract Umbrella</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-3.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Cube Surface Texture</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#graphic-design">
                            <figure className="cc-effect">
                              <img
                                src="images/graphic-design-4.jpg"
                                alt="Image"
                              />
                              <figcaption>
                                <div className="h4">Abstract Line</div>
                                <p>Graphic Design</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Photography" role="tabpanel">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-1.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-3.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Wedding Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-2.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Beach Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                        <div
                          className="cc-porfolio-image img-raised"
                          data-aos="fade-up"
                          data-aos-anchor-placement="top-bottom"
                        >
                          <a href="#Photography">
                            <figure className="cc-effect">
                              <img src="images/photography-4.jpg" alt="Image" />
                              <figcaption>
                                <div className="h4">Nature Photoshoot</div>
                                <p>Photography</p>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="experience">
            <div className="container cc-experience">
              <div className="h4 text-center mb-4 title">Work Experience</div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-experience-header">
                      <p>March 2016 - Present</p>
                      <div className="h5">CreativeM</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Front End Developer</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-experience-header">
                      <p>April 2014 - March 2016</p>
                      <div className="h5">WebNote</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Web Developer</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-experience-header">
                      <p>April 2013 - February 2014</p>
                      <div className="h5">WEBM</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Intern</div>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container cc-education">
              <div className="h4 text-center mb-4 title">Education</div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-education-header">
                      <p>2013 - 2015</p>
                      <div className="h5">Master's Degree</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Master of Information Technology</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-education-header">
                      <p>2009 - 2013</p>
                      <div className="h5">Bachelor's Degree</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Bachelor of Computer Science</div>
                      <p className="category">University of Computer Science</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div
                    className="col-md-3 bg-primary"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body cc-education-header">
                      <p>2007 - 2009</p>
                      <div className="h5">High School</div>
                    </div>
                  </div>
                  <div
                    className="col-md-9"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500"
                  >
                    <div className="card-body">
                      <div className="h5">Science and Mathematics</div>
                      <p className="category">School of Secondary board</p>
                      <p>
                        Euismod massa scelerisque suspendisse fermentum habitant
                        vitae ullamcorper magna quam iaculis, tristique sapien
                        taciti mollis interdum sagittis libero nunc inceptos
                        tellus, hendrerit vel eleifend primis lectus quisque
                        cubilia sed mauris. Lacinia porta vestibulum diam
                        integer quisque eros pulvinar curae, curabitur feugiat
                        arcu vivamus parturient aliquet laoreet at, eu etiam
                        pretium molestie ultricies sollicitudin dui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="reference">
            <div className="container cc-reference">
              <div className="h4 mb-4 text-center title">References</div>
              <div className="card" data-aos="zoom-in">
                <div
                  className="carousel slide"
                  id="cc-Indicators"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#cc-Indicators"
                      data-slide-to="0"
                    ></li>
                    <li data-target="#cc-Indicators" data-slide-to="1"></li>
                    <li data-target="#cc-Indicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-1.jpg" alt="Image" />
                          <div className="h5 pt-2">Aiyana</div>
                          <p className="category">CEO / WEBM</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {' '}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-2.jpg" alt="Image" />
                          <div className="h5 pt-2">Braiden</div>
                          <p className="category">CEO / Creativem</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {' '}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header">
                          <img src="images/reference-image-3.jpg" alt="Image" />
                          <div className="h5 pt-2">Alexander</div>
                          <p className="category">CEO / Webnote</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p>
                            {' '}
                            Habitasse venenatis commodo tempor eleifend arcu
                            sociis sollicitudin ante pulvinar ad, est porta cras
                            erat ullamcorper volutpat metus duis platea
                            convallis, tortor primis ac quisque etiam luctus
                            nisl nullam fames. Ligula purus suscipit tempus
                            nascetur curabitur donec nam ullamcorper, laoreet
                            nullam mauris dui aptent facilisis neque elementum
                            ac, risus semper felis parturient fringilla rhoncus
                            eleifend.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="contact">
            <div
              className="cc-contact-information"
              style={{ backgroundImage: "url('images/staticmap.png')" }}
            >
              <div className="container">
                <div className="cc-contact">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="card mb-0" data-aos="zoom-in">
                        <div className="h4 text-center title">Contact Me</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card-body">
                              <form
                                action="https://formspree.io/contact@gerardohp.dev"
                                method="POST"
                              >
                                <div className="p pb-3">
                                  <strong>Feel free to contact me </strong>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-user-circle"></i>
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-file-text"></i>
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="Subject"
                                        placeholder="Subject"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group">
                                      <span className="input-group-addon">
                                        <i className="fa fa-envelope"></i>
                                      </span>
                                      <input
                                        className="form-control"
                                        type="email"
                                        name="_replyto"
                                        placeholder="E-mail"
                                        required="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your Message"
                                        required="required"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      Send
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <p className="mb-0">
                                <strong>Address </strong>
                              </p>
                              <p className="pb-2">
                                140, City Center, New York, U.S.A
                              </p>
                              <p className="mb-0">
                                <strong>Phone</strong>
                              </p>
                              <p className="pb-2">+52477-123-4567</p>
                              <p className="mb-0">
                                <strong>Email</strong>
                              </p>
                              <p>contact@gerardohp.dev</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container text-center">
          <a className="cc-facebook btn btn-link" href="#">
            <i className="fa fa-facebook fa-2x " aria-hidden="true"></i>
          </a>
          <a className="cc-twitter btn btn-link " href="#">
            <i className="fa fa-twitter fa-2x " aria-hidden="true"></i>
          </a>
          <a className="cc-google-plus btn btn-link" href="#">
            <i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>
          </a>
          <a className="cc-instagram btn btn-link" href="#">
            <i className="fa fa-instagram fa-2x " aria-hidden="true"></i>
          </a>
        </div>
        <div className="h4 title text-center">Gerardo Hern&aacute;ndez</div>
        <div className="text-center text-muted">
          <p>
            &copy; Creative CV. All rights reserved.
            <br />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
