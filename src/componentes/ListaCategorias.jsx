import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../api/api";

const ListaCategorias = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setCategories)
    }, [])

    return (
        <ul>
            {
                categories.map(categoria => (
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <li> {categoria.nombre} </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias;