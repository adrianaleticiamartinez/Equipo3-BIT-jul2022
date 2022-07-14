import React, { Component } from "react";
import axios from 'axios';
import Adviser from "./Adviser";

const url = 'http://localhost:4000/api/advisers';
/* {
    "id": 1,
    "password": "tfo0lS"
} */

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            usuario: '',
            auth: '',
            islogin: false,
            error: null
        };
        this.loginClick = this.loginClick.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    /* Login for Advisers */
    loginClick = async (e) => {
        e.preventDefault();
        const adviser = {
            usuario: this.state.usuario,
            auth: this.state.auth
        }

        // POST -REQUEST
        await axios.post(url, adviser)
            .then((response) => {
                console.log('Response', response.data);
                this.setState({ data: response.data, usuario: '', auth: '', islogin: true });
            })
            .catch((error) => {
                console.log('Error', error);
                this.setState({ error: error, });
            });
    }

    /* Capture Data from inputs */
    onChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        return (
            <div className="container">

                <div className="card card-body">
                    <h3>Login</h3>
                    <div className="form-group">

                        <input
                            className="form-control"
                            type="text"
                            name="usuario"
                            value={this.state.usuario}
                            placeholder="Id asesor"
                            onChange={this.onChangeData}
                        >
                        </input>

                        <br />

                        <input
                            className="form-control"
                            type="text"
                            name="auth"
                            value={this.state.auth}
                            placeholder="Password"
                            onChange={this.onChangeData}>
                        </input>
                    </div>
                    <br />
                    <form onSubmit={this.loginClick}>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>

                <br />

                {this.state.islogin ?
                    <Adviser data={this.state.data}></Adviser>
                    :
                    <div></div>
                }
            </div>
        );
    }
}


export default Login;