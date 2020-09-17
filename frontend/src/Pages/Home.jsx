import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../images/home-image.png";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section
        className="pt-4 pt-md-11 text-animated"
        style={{ transition: "1.0s" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={Image}
                className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate animated"
                alt="..."
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div
              className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate mt-5"
              data-aos="fade-up"
            >
              <h1 className="display-5 text-center text-md-left ">
                Welcome to <br />
                <span className="text-primary">E-Commerce</span>. <br />
                Buy more than you want
              </h1>
              <br />
              <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                Buy your needs from E-Commerce. You will get more than you
                needs.
              </p>
              <br />
              <div className="text-center text-md-left">
                <Link
                  to="/products"
                  className="btn btn-primary shadow lift mr-1 btn-lg rounded-pill  shadow-lg"
                >
                  See Our Products{" "}
                  <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
                </Link>
                <Link to="/contact" className="btn btn-primary-soft lift">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
