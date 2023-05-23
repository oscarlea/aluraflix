import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../api/api";
import FormularioCategorias from './Formulario/formularioCategorias';


const ListaCategorias = ({actualizarColor}) => {

    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
    }

     const agregarNuevaCategoria = (categoria) => {
        setData([...categorias, categoria]);
      }; 

    const [categorias, setData] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setData)
    }, [])


    return (

        <ul className='lista__categorias'>
            <button onClick={cambiarMostrar}>Agregar Categoría</button>
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

            {
                mostrarFormulario && <FormularioCategorias agregarNuevaCategoria={agregarNuevaCategoria} actualizarColor={actualizarColor} />
            }
        </ul>
    )
}

export default ListaCategorias;
