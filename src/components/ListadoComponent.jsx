import React, { Component } from 'react'
import Global from "../Gloabal.js"
import ServiceCoches from '../service/ServiceCoches';

export default class ListadoComponent extends Component {

    url = Global.urlAPICoches;
    service = new ServiceCoches();

    state = {
        coches: [],
    }

    loadCoches = () => {
        this.service.getCoches().then((result) => {
            this.setState({
                coches: result,
            })
        })
    }

    componentDidMount() {
        this.loadCoches();
    }


    render() {
        return (
            <div>
                <h1>Listado Component</h1>
                <table className="min-w-full divide-y divide-gray-200"></table>
                <thead className="bg-gray-50">
                    <tr>
                        <th>ID</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Conductor</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.coches.map((coche,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{coche.idCoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td>{coche.imagen}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </div>
        )
    }
}
