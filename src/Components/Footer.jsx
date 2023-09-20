import React from "react";
import logo from "../images/notinline_logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container my-5">
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="">
                  <img src={logo} height="70" alt="" loading="lazy" />
                </div>

                <p className="text-center">
                  Book doctor appointments online and get your ailments treated
                  in no time with our expert medical support systems. Get rid of
                  all your medical problem with our expert panel of doctors who
                  guide you towards a healthier life.
                </p>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <div>
                    +91
                    <input type="number" name="" id="" />
                    <i class="fa-solid fa-phone"></i>
                  </div>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Services</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Appointments
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Lab tests
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      A-Z medicine
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Doctor support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Legal</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      General info
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Terms of services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      Consultation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      How it works
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Talk to us</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt pe-2"></i>
                      support@notinline.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone pe-2"></i>
                      appointment@notinline.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>+91 12345
                      67899
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>+91 97642
                      09752
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="#">
              2021-2023 All Rights Reserved
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
