import { useState, useEffect } from "react"
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { useParams, useNavigate, Routes, Route   } from 'react-router-dom'
import { buscar } from '../api/api'

const PaginaCategoria = () => {
    
    const { id } = useParams()

    console.log("id..: ", id)

    const [categoria, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/categorias?id=${id}`, setData)
          .catch(() => {
            navigate("/not-found");
          });
      }, [id, navigate]);
      
/* 
    useEffect(() => {
    console.log("categoria..: ", categoria, categoria[0]?.nombre);
    // Otras acciones o lógica que dependa de 'categoria'
    }, [categoria]);

 */
//console.log( `/videos?id_categoria=${id}` )
console.log(categoria[0]?.colorPrimario)


    return (
        <>
            <div className='container'>
                <h2 className="categoria__titulo" >PaginaCategoria --{">"} {categoria[0]?.nombre} </h2>
            </div>

            <ListaCategorias />
            {/* <ListaVideos url={`/videos?id_categoria=${id}`} />   */}

             <Routes>
                <Route path='/' element={<ListaVideos url={`/videos?id_categoria=${id}`} colorPrimario={categoria[0]?.colorPrimario} />} />
            </Routes> 


        </>
    )
}

export default PaginaCategoria


