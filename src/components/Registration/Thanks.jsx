import React, { useEffect, useState } from "react";
import RNavTab from "./RNavTab";
import { useHistory } from 'react-router-dom'

const Thanks = () => {
  const history = useHistory();
  const [seconds, setSeconds] = useState(30);

  if (!localStorage.getItem('registered')) {
      history.push('/login');
  }

  useEffect(() => {

    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 0) {
        localStorage.removeItem('registered');
        history.push("/");
      }

  }, [seconds]);

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card center-form">
          <div className="container">
            <div className="card-header">
              <RNavTab />
            </div>
            <div className="card-body bg-primary text-white">
              <h2 class="text-center">REGISTRATION SUCCESSFUL!</h2>
              <p>
                Thank you for registering under NdeTek university. Just stay
                calm while we process your documents. We'll get back to you.{" "}
                <br />
                <h5>Thanks!!</h5>
                <h4 class="text-center">You'll be redirected in {seconds} seconds</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;