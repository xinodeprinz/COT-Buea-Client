import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loader from 'react-loader-spinner';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Home Page</h1>
                    <a href="/student-info" className="btn btn-primary">Register</a>
                    <Loader
                        type="Oval"
                        color="#008080"
                        width="50px"
                        height="50px"
                        //timeout="5000"
                    />
                </div>
            </div>
        )
    }
}










// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Home = () => {
    // const history = useHistory();
    // const [seconds, setSeconds] = useState(30);

    // useEffect(() => {
    //     if(seconds === 0) {
    //         history.push('/test-form');
    //     }
    //     setTimeout(() => {
    //         setSeconds(seconds - 1);
    //     }, 1000);
    //     console.log(seconds);
    // }, [seconds]);

//     return (
//         <div>
//             Home Page <br/>
//             <h3>You'll be redirected in <strong>{seconds}</strong> seconds</h3>
//         </div>
//     );
// };

// export default Home;
