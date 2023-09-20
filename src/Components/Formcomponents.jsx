import React from 'react';

const FormComponent = () => {
  return (
    <>

    <div className="container mt-3 inputform">
      {/* <div className="card p-4 custom-card-width"> */}
        <form>
        <h5>Fill in the details to get a call!</h5>
          <div className="form-group mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Full Name" />
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <input type="tel" className="form-control" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-map-marker"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Location" />
            </div>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="termsCheckbox" />
            <label className="form-check-label" htmlFor="termsCheckbox">
              By continuing, you agree to our T&C and privacy policy.
            </label>
          </div>
          <button type="submit" className="btn btn-primary mx-auto">Proceed</button>
        </form>
      {/* </div> */}
      
      
    </div>
    </>
  );
};

export default FormComponent;
