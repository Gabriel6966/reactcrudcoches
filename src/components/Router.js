import React, { Component } from 'react'
import { Routes,Route,BrowserRouter, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomePage from './HomePage'
import ListadoComponent from './ListadoComponent'
import CreateCoche from './CreateCoche'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <MenuComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/listado" element={<ListadoComponent/>}/>
            <Route path="/nuevo" element={<CreateCoche/>}/>
            <Route path="*" element={<h1>404 - Pagina no encontrada</h1>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
