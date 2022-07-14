import React, { Component } from "react";

class Customer extends Component {


    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Información del cliente</h4>
                    <h5 className="card-title">{'idCliente: ' + this.props.data.idCliente}</h5>
                    <h5 className="card-title">{'Nombre: ' + this.props.data.nombre + this.props.data.apellidoPaterno + this.props.data.apellidoMaterno}</h5>
                    <h5 className="card-title">{'Cuenta: ' + this.props.data.cuenta}</h5>
                    <h5 className="card-title">{'Email: ' + this.props.data.email}</h5>
                    <h5 className="card-title">{'Nacionalidad: ' + this.props.data.nacionalidad}</h5>
                    <h5 className="card-title">{'RFC: ' + this.props.data.rfc}</h5>
                    <h5 className="card-title">{'Segmento: ' + this.props.data.segmento}</h5>
                    <h5 className="card-title">{'Sexo:' + this.props.data.sexo}</h5>
                    <h5 className="card-title">{'Tipo Id: ' + this.props.data.tipoID}</h5>

                </div>
            </div>
        );
    }

}

export default Customer;