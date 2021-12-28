import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-primary text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-uppercase">Contact Us</h4>
              <i className="fas fa-road"></i> Molyko Buea <br />
              <i className="fas fa-envelope"></i> prinzxino7@gmail.com <br />
              <i className="fab fa-whatsapp"></i> +237 675874066 <br />
              <i className="fab fa-facebook"></i> NdeTek
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase">About Us</h4>
              We are a software development team based in Molyko Buea. We offer:
              mobile apps, desktop apps, web applications, websites, graphics
              design and much more for you guys at very affordable prices.
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase">Subscribe</h4>
              We aim at helping young youths in ICT by training and inspiring
              them on the importance of technology in our upcoming society.
              Subscribe to get more info. <br />
              <span className="h3">
                <i className="mx-2 fab fa-whatsapp"></i>
                <i className="mx-2 fab fa-facebook"></i>
                <i className="mx-2 fab fa-instagram"></i>
                <i className="mx-2 fab fa-telegram"></i>
                <i className="mx-2 fab fa-twitter"></i>
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-uppercase font-weight-bold">NdeTek &copy; Copyright 2021</p>
      </div>
    );
  }
}
