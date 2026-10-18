import React, { Component } from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomePage from './HomePage'
import ListadoComponent from './ListadoComponent'
import CreateCoche from './CreateCoche'
import DetalleCocheComponent from './DetalleCocheComponent'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <MenuComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/listado" element={<ListadoComponent/>}/>
            <Route path="/nuevo" element={<CreateCoche/>}/>
            <Route path="/detalle/:idCoche" element={<DetalleCocheComponent/>}/>
            <Route path="*" element={<h1>404 - Pagina no encontrada</h1>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
