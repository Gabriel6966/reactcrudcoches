import React, { Component } from 'react'
import ServiceCoches from '../service/ServiceCoches';
import { Navigate } from 'react-router-dom';

export default class EditarCocheComponent extends Component {

    service = new ServiceCoches();

    cajaIdCoche = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef()
    cajaImagen = React.createRef();

    state = {
        coche:null,
        status: false,
        mensaje: "",
    }

    componentDidMount(){
        let idCoche = parseInt(this.props.idCoche);

        this.service.detalleCoche(idCoche).then((result)=>{
            this.setState({
                coche:result,
            })
        })
    }

    updateCoche = (event) => {
        event.preventDefault();
        let coche = {
            idCoche: parseInt(this.cajaIdCoche.current.value),
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }
        this.service.editarCoche(coche).then((result) => {
            this.setState({
                status: true,
                mensaje: "Coche actualizado correctamente"
            })
        })

    }

    render() {
        if(this.state.status===true){
            return(
                <Navigate to="/listado" />
            )
        }
        if(this.state.coche===null){
            return(
                <h1>Cargando coche...</h1>
            )
        }
        let coche = this.state.coche
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "black",backgroundColor:"blue" }}>
                <h1>Editar Coche</h1>
                {
                    this.state.status === true &&
                    <Navigate to="/listado" />
                }
                <form style={{ display: "flex", flexDirection: "column", width: "300px" }} onSubmit={this.updateCoche}>
                
                <label>ID Coche</label>
                <input style={{display:"none"}} type="number" ref={this.cajaIdCoche} defaultValue={coche.idCoche} className="form-control" disabled/><br/>
                
                <label>Marca</label>
                <input type="text" ref={this.cajaMarca} defaultValue={coche.marca} className="form-control"/><br/>
                <label>Modelo</label>
                <input type="text" ref={this.cajaModelo} defaultValue={coche.modelo} className="form-control"/><br/>
                <label>Conductor</label>
                <input type="text" ref={this.cajaConductor} defaultValue={coche.conductor} className="form-control"/><br/>
                <label>Imagen</label>
                <input type="text" ref={this.cajaImagen} defaultValue={coche.imagen} className="form-control"/><br/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Actualizar Coche</button>
                </form>
                {
                    this.state.status === true &&
                    <EditarCocheComponent idCoche={coche.idCoche} />
                }
            </div>
        )
    }
}