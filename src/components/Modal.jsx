import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ title, text }) => {
  return (
    <div className="container">
      <div className="modal fade" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-uppercase text-primary">
                {title}
              </h3>
              <a href="#" data-dismiss="modal" class="close">
                &times;
              </a>
            </div>
            <div class="modal-body">{text}</div>
            <div class="modal-footer">
              <Link to="/logout" className="btn btn-primary">
                Yes
              </Link>
              <Link to="#" data-dismiss="modal" className="btn btn-danger">
                close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
