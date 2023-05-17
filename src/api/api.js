import axios from "axios"

//---

export const api = axios.create({
    baseURL: "http://localhost:4000"
})

//---

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

//----

export const hexToRgba = (hex, alpha) => {
        // Verifica si hex tiene un valor definido
        hex = hex ? hex : "#000000";
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
  
    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  };
  
//----
/* 
  export const obtenerVideosPorCategoria = async () => {
    const videosRespuesta = await api.get("/videos");
    const categoriasRespuesta = await api.get("/categorias");
  
    const categoriasConVideos = categoriasRespuesta.data.filter((categoria) => {
      return videosRespuesta.data.some((video) => {
        return video.categoria === categoria.nombre;
      });
    });
  
    return categoriasConVideos.map((categoria) => {
      const videos = videosRespuesta.data.filter(
        (video) => video.categoria === categoria.nombre
      );
      return {
        ...categoria,
        videos: videos,
      };
    });
  };
   */
  