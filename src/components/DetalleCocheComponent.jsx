import React, { Component } from "react";
import ServiceCoches from "../service/ServiceCoches";
import ComponentDetalleCoche from "./ComponentDetalleCoche";
export default class DetalleCocheComponent extends Component {
    
    
    service = new ServiceCoches();
    SelectCoche=React.createRef();

    state={
        coches:[],
        cochesSelect:[],
    }

        loadCoches = () => {
        this.service.getCoches().then((result) => {
            this.setState({
                coches: result,
            })
        })
    }

    componentDidMount(){
        this.loadCoches();
    }

    getCocheSelect=(event)=>{
        event.preventDefault();
        let aux=[];
        let options= this.SelectCoche.current.options;
        for(let i =0;i<options.length;i++){
            if(options[i].selected){
                aux.push(options[i].value);
            }
        }
        console.log(aux)
        this.setState({
            cochesSelect: aux,
        })
    }

    
    
    render(){
        return(
            <div>
                <h1>Detalle del Coche</h1>
                <form>
                    <label>Selecciona un coche para ver sus detalles:</label>
                    <select ref={this.SelectCoche}  className="form-control" multiple size="5">
                        {
                            this.state.coches.map((coche,index)=>{
                                return(
                                    <option key={index} value={coche.idCoche}>
                                        {coche.marca} - {coche.modelo}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.getCocheSelect} className="btn btn-primary mt-2">
                        Ver detalles
                    </button>
                </form>
                {
                this.state.cochesSelect.length !==0 && 
                <ComponentDetalleCoche cochesSelect={this.state.cochesSelect}/>
                }
            </div>
        )
    }
}