import React, { Component } from 'react'
import ServiceCoches from '../service/ServiceCoches';
import { NavLink, Navigate } from 'react-router-dom';


export default class DeleteComponent extends Component {

    service = new ServiceCoches();

    state = {
        coche: false,
        mensaje: "",
    }

    deleteCoche = (event) => {
        event.preventDefault();
        let idCoche = parseInt(this.props.idCoche);
        this.service.deleteCoche(idCoche).then((result) => {
            this.setState({
                coche: true,
            })
        })
    }

    render() {
        if(this.state.coche){
            return(<Navigate to ="/listado"/>)
        }
        return (
            <div>
                <h1>Eliminar coche</h1>

                <form onSubmit={this.deleteCoche}>
                    <label>
                        ¿Estás seguro de que deseas eliminar este coche?
                    </label>

                    <NavLink className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200" to={"/listado"}>Cancelar</NavLink>
                    <button
                        type="submit"
                        className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                    >
                        Eliminar
                    </button>
                </form>

                {this.state.mensaje !== "" && (
                    <p>{this.state.mensaje}</p>
                )}
            </div>

        )
    }

}

