import React from "react";

const MidCards = () => {
  return (
    <>
      <div className="expanding">
        <strong className="wekeep">Top </strong>
        <span className="expand">packages</span>
      </div>

      <svg
        className="svg2"
        xmlns="http://www.w3.org/2000/svg"
        width="265"
        height="21"
        viewBox="0 0 265 21"
        fill="none"
      >
        <path
          d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
          stroke="#008DD9"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <div className="text-center">
        <p className="explore-text">
          Explore our wide range of tests! We ensure that you don’t miss out on
          any chance to keep yourself healthy.
        </p>
      </div>

      <div className="mid-cards">
        <div className="mid-card card">
          <h4>Basic Full Body Checkup</h4>
          <div className="card-body">
            <h5 className="card-title">4.3*( 75 Reviews )</h5>
            <p className="card-text">Number of tests - 53</p>
            MRP:<span className="price-tag">₹10,000</span>
            <span className="old-price">₹8,490 </span>
            {/* <a href="#" className="mid-button btn btn-primary">Button 1</a> */}
            <button type="button" class="btn btn-primary">
            Book Now
            </button>
          </div>
        </div>

        <div className="mid-card card">
          <h4>Advance Full Body Checkup</h4>
          <div className="card-body">
            <h5 className="card-title">4.7*( 100 Reviews )</h5>
            <p className="card-text">Number of tests - 70</p>
            MRP:<span className="price-tag">₹12,000</span>
            <span className="old-price">₹10,000</span>
            <button type="button" class="btn btn-primary">
            Book Now
            </button>
          </div>
        </div>

        <div className="mid-card card">
          <h4>Liver Function Test (LFT)</h4>
          <div className="card-body">
            <h5 className="card-title">4.3*( 43 Reviews )</h5>
            <p className="card-text">Number of tests - 89</p>
            MRP:<span className="price-tag">₹13,299</span>
            <span className="old-price">₹11,299</span>
            <button type="button" class="btn btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidCards;
