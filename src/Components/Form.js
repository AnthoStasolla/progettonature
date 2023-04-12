import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <form className="form-container">
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" />
          <label className="form-label" htmlFor="form4Example1">
            NAME
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" className="form-control" />
          <label className="form-label" htmlFor="form4Example2">
            EMAIL
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
          <label className="form-label" htmlFor="form4Example3">
            SEND YOUR MESSAGE
          </label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            placeholder="Message here..."
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block mb-4">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
