import { useState, useEffect } from "react";
import { obtenerVideosPorCategoria } from "../api/api";
import { Link } from "react-router-dom";
import { hexToRgba } from "../api/api";

const ListaVideos = ({ url }) => {
  const [categoriasConVideos, setCategoriasConVideos] = useState([]);

  useEffect(() => {
    obtenerVideosPorCategoria().then((categorias) => {
      setCategoriasConVideos(categorias);
    });
  }, []);

  const handleClick = () => {
    //actualizarMostrarImg(false);
    //setIsPlaying(true);
  };

  return (
    <section className="contenedor">
      {categoriasConVideos.map((categoria) => {
        const { id, nombre, colorPrimario, descripcion, videos } = categoria;
        return (
          <div
            className="categoria"
            key={id}
            style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
          >
            <h3 style={{ background: colorPrimario }} >{nombre}</h3>
            <h4>{descripcion}</h4>

            <div className="videos">

              {videos.map((video) => { 
                const { id, titulo, thumbnail_url } = video;

                return (
                  <div
                    className="video"
                    onClick={handleClick}
                    //key={id}
                    style={{ borderColor: colorPrimario }}
                  >
                    <Link to={`/videos/${id}`} className="video-id" key={id}>
                      <img src={thumbnail_url} alt={titulo} />
                      <h4>{titulo}</h4>
                    </Link>
                  </div>
                  
                );
              })}


            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ListaVideos;
