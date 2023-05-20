import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../api/api";

const ListaCategorias = () => {

    const [categorias, setData] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setData)
    }, [])

    return (
        <ul className='lista__categorias'>
            {
                categorias.map(categoria => (
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id} className='categoria__link' >

                        <div className='categoria' >
                            <div className='categoria__encabezado' >
                                <li className='categoria__titulo ct2' style={{ background: categoria.colorPrimario }}>
                                    {categoria.nombre}
                                </li>
                            </div>
                        </div>

                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias;

