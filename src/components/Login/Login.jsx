import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Data from '../../data/Login'
import swal from 'sweetalert'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

export default class Login extends Component {
    state = {
        matricule: '',
        password: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const loginBtn = document.getElementById('login');
        loginBtn.innerText = 'please wait ...';
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
            axios.post(`http://localhost:8000/api/login`, this.state).then((response) => {
                if (response.data.status === 200) {
                    this.props.history.push('/dashboard');
                    loginBtn.innerText = 'Login'
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                    swal({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success',
                        button: 'ok!'
                    });
                    this.setState({
                        matricule: '',
                        password: '',
                    });
                } else if (response.data.status === 400) {
                    loginBtn.innerText = 'Login'
                    swal({
                        title: 'Error!',
                        text: response.data.message,
                        icon: 'error',
                        button: 'ok!'
                    });
                } else {
                    loginBtn.innerText = 'Login'
                    swal({
                        title: 'Error!',
                        text: response.data.message,
                        icon: 'error',
                        button: 'ok!'
                    });
                }
            });
        });
    }
    render() {
        return (
            <div className="row center-form">
               <div className="col-md-4 mx-auto">
                   <div className="card">
                       <div className="card-header text-uppercase font-weight-bold">
                           Login
                       </div>
                       <div className="card-body text-white bg-primary">
                           <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                              {Data.map((input, key) => {
                                   return (
                                       <div className="form-group" key={key}>
                                           <label htmlFor={input.name}>{input.label}</label>
                                           <input onChange={this.handleInput} type={input.type} placeholder={input.placeholder} name={input.name} className="form-control" required/>
                                           <div className="invalid-feedback">{input.feedback}</div>
                                       </div>
                                   )
                               })}
                               <div className="form-group">
                                   <button id="login" className="btn btn-info btn-block" type="submit">Login</button>
                               </div>
                           </form>
                       </div>
                       <div className="card-footer">
                            <div className="d-flex justify-content-around">
                                <Link to="#" className="text-success">Create Account?</Link>
                                <Link to="#" className="text-danger">Forgot Password?</Link>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
