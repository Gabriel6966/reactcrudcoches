import React, { Component } from 'react';
import Global from '../Gloabal';
import ServiceCoches from '../service/ServiceCoches';
import { Navigate } from 'react-router-dom';



export default class CreateCoche extends Component{

    url = Global.urlAPICoches;
    service = new ServiceCoches();

    cajaIdCoche=React.createRef();
    cajaMarca=React.createRef();
    cajaModelo=React.createRef()
    cajaConductor=React.createRef();
    cajaImagen=React.createRef();

    insertCoche=(event)=>{
        event.preventDefault();
        let coche={
            idCoche:parseInt(this.cajaIdCoche.current.value),
            marca:this.cajaMarca.current.value,
            modelo:this.cajaModelo.current.value,
            conductor:this.cajaConductor.current.value,
            imagen:this.cajaImagen.current.value
        }
        this.service.insertCoche(coche).then((result)=>{
            this.setState({
                status:true,
                mensaje:"Coche insertado correctamente"
            })
        })
        

    }
    state={
        status:false,
        mensaje:""
    }

    render(){
        if(this.state.status===true){
            return(<Navigate to="/listado"/>)
        }else{
            return(
                <div style={{display:"flex",flexDirection:"column",alignItems:"center", color:"black"} }>
                    <h1>Crear Coche</h1>
                    <form style={{display:"flex",flexDirection:"column",width:"300px"}} backgroundColor="blue"> 
                        <label>ID Coche</label>
                        <input type="number" ref={this.cajaIdCoche}/><br/>
                        <label>Marca</label>
                        <input type="text" ref={this.cajaMarca}/><br/>
                        <label>Modelo</label>
                        <input type="text" ref={this.cajaModelo}/><br/>
                        <label>Conductor</label>
                        <input type="text" ref={this.cajaConductor}/><br/>
                        <label>Imagen</label>
                        <input type="text" ref={this.cajaImagen}/><br/>
                        <button onClick={this.insertCoche}>Insertar Coche</button>
                    </form>
                    <form style={{display:"flex",flexDirection:"column",width:"300px"}} backgroundColor="blue">
                    </form>
                </div>
            )
        }
    }
}