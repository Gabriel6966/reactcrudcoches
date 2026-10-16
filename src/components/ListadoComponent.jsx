import React, { Component } from 'react'
import Global from "../Global"
import ServiceCoches from '../services/ServiceCoches';

export default class ListadoComponent extends Component {

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
            </div>
        )
    }
}
