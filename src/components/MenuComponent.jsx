import { NavLink } from 'react-router-dom';

import React, { Component } from 'react'

export default class MenuComponent extends Component {
    render() {
        return (
            <nav className="flex items-center justify-center bg-slate-100 p-6">
                <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
                    <h1 className="mb-2 text-3xl font-bold text-slate-800">
                        Mi aplicación
                    </h1>
                    <p className="mb-8 text-slate-500">
                        Selecciona una opción del menú
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <NavLink
                            to="/"
                            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                            to="/listado"
                            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                        >
                            Listado
                        </NavLink>

                        <NavLink
                            to="/nuevo"
                            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                        >
                            Nuevo
                        </NavLink>

                        <NavLink
                            to="/detalle/22"
                            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                        >
                            Detalle
                        </NavLink>

                        <NavLink
                            to="/editar"
                            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                        >
                            Editar
                        </NavLink>

                        <NavLink
                            to="/eliminar"
                            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                        >
                            Eliminar
                        </NavLink>
                    </div>
                </div>
            </nav>
        );

    }
}

