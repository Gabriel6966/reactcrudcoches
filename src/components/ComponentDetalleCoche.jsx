import React, { Component } from "react";
import ServiceCoches from "../service/ServiceCoches";


export default class DetalleCocheComponent extends Component {

    service = new ServiceCoches();

    state = {
        coches: [],
    }

    loadCoches = () => {
        let idCoche = this.props.cochesSelect;
        let data = "";
        for (let i of idCoche) {
            data += i + ",";
        }
        data = data.substring(0, data.length - 1);
        this.service.getCoches().then((result) => {
            this.setState({
                coches: result.filter((coche) => data.includes(coche.idCoche)),
            })
        })

    }
    componentDidMount() {
        this.loadCoches();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cochesSelect !== this.props.cochesSelect) {
            this.loadCoches();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles del coche</h1>
                <table className="min-w-full divide-y divide-gray-200">
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
                            this.state.coches.map((coche, index) => {
                                return (
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
                </table>
            </div>
        )
    }

}