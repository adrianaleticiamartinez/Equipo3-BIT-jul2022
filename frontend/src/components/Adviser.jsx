import React, { Component } from "react";
import axios from "axios";
import Customer from "./Customer";

const url_customer = 'http://localhost:4000/api/customers/';

class Adviser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id_customer: '',
            error: null
        };
        this.findCLient = this.findCLient.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    /* find Client */
    findCLient = async (e) => {
        e.preventDefault();

        // GET - REQUEST
        await axios.get(url_customer + this.state.id_customer)
            .then((response) => {
                console.log('Response', response.data);
                this.setState({ data: response.data, id: '', password: '' });
            })
            .catch((error) => {
                console.log('Error', error);
                this.setState({ error: error });
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
                    <h5 className="card-title">{this.props.data.usuario ? '' : 'ASESOR NO ENCONTRADO'}</h5>
                    <h6 className="card-title">{this.props.data.nombreCompleto ? 'Asesor: ' + this.props.data.nombreCompleto : ''}</h6>
                    <h6 className="card-title">{this.props.data.perfil ? 'Perfil: ' + this.props.data.perfil : ''}</h6>
                    <h6 className="card-title">{this.props.data.area ? 'Area: ' + this.props.data.area : ''}</h6>
                    <h6 className="card-title">{this.props.data.segmento ? 'Segmento: ' + this.props.data.segmento : ''}</h6>
                    {
                        this.props.data.usuario ?

                            <div className="form-group">

                                <input
                                    className="form-control"
                                    type="text"
                                    name="id_customer"
                                    value={this.state.id_customer}
                                    placeholder="id cliente"
                                    onChange={this.onChangeData}
                                >
                                </input>
                                <br />
                                <form onSubmit={this.findCLient}>
                                    <button type="submit" className="btn btn-danger" >Buscar Cliente</button>
                                </form>
                            </div>
                            :
                            <div></div>
                    }
                </div>

                <br />

                <div>
                    {
                        this.state.data.idCliente ?
                            <Customer data={this.state.data}></Customer>
                            :
                            <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default Adviser;