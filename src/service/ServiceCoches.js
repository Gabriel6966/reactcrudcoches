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
}