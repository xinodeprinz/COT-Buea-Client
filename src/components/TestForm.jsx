import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

export default class TestForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post(`http://localhost:8000/api/dummy-register`, this.state);
        if (response.data.status === 200) {
            swal({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                button: 'ok!'
            });
            this.setState({
                name: '',
                email: '',
                password: ''
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card">
                            <div className="card-header text-uppercase font-weight-bold">
                                Test Form
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" value={this.state.name} placeholder="Your Name" className="form-control" onChange={this.handleInput} required/>
                                        <div className="invalid-feedback">
                                            A valid name is required
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" value={this.state.email} placeholder="Your Email" className="form-control" onChange={this.handleInput} required/>
                                        <div className="invalid-feedback">
                                            A valid email address is required
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" id="password" name="password" value={this.state.password} placeholder="Your Password" className="form-control" onChange={this.handleInput} required/>
                                        <div className="invalid-feedback">
                                            A valid password is required
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
