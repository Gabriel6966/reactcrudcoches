import React, { Component } from 'react'
import { Routes,Route,BrowserRouter, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomePage from './HomePage'
import ListadoComponent from './ListadoComponent'

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <MenuComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/listado" element={<ListadoComponent/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
