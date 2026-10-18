import axios from "axios";
import Global from "../Gloabal";

export default class ServiceCoches{

    getCoches=()=>{
        return new Promise(function(resolve,reject){
            let url=Global.urlAPICoches;
            let request="api/Coches";
            axios.get(url+request).then((response)=>{
                console.log("obteniendo coches");
                resolve(response.data);

            }).catch((err)=>{
                console.log("error obteniendo coches", err.message);
                reject(err);
            })
        })
    }

    insertCoche(coche){
        return new Promise(function(resolve,reject){
            let url=Global.urlAPICoches;
            let request="api/Coches/InsertCoche";
            axios.post(url+request,coche).then(response=>{
                console.log("insertando coche");
                resolve(response.data);
            }).catch((err)=>{
                console.log("error al insertar coche", err.message);
                reject(err);
            })
        })
    }

    detalleCoche(idCoche){
        return new Promise(function(resolve,reject){
            let url=Global.urlAPICoches;
            let request="api/Coches/FindCoche/" + idCoche;
            axios.get(url+request).then(response=>{
                console.log("obteniendo detalle coche");
                resolve(response.data);
            }).catch((err)=>{
                console.log("error al obtener detalle coche", err.message);
                reject(err);
            })
        })
    }

    editarCoche(coche){
        return new Promise(function(resolve,reject){
            let url = Global.urlAPICoches;
            let request="api/Coches/UpdateCoche";
            axios.put(url+request,coche).then(response=>{
                console.log("editando coche");
                resolve(response.data);
            }).catch((err)=>{
                console.log("error al editar coche", err.message);
                reject(err);
            })
        })
    }

}