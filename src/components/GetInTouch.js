import React from "react";
import Button from "react-bootstrap/Button";

const GetInTouch = () => {
  return (
    <section className="p-4 ">
      <div className="get-in-touch">
        <div>
          <h2>Have A Project In Mind?</h2>
          <p>Let's turn that idea into profit!</p>
        </div>
        <Button href="/contact" className="white-btn d-flex align-items-center">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
