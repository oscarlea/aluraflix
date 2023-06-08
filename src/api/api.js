import axios from "axios"
import { toast } from "react-toastify"


//---
export const api = axios.create({
 //   baseURL: "http://localhost:4000"
  baseURL: "https://6471a5536a9370d5a41a83b2.mockapi.io"
})

//--- Buscar video/categoria
export const buscar = async (url, setData) => {
  const response = await api.get(url)
  setData(response.data)
}

//---- registrar Video          NOTA:  mockapi.io asigna automaticamente el "id" entonces hacemos un callback con  "return response.data.id; "
export const registrarVideo = async (video) => {
  try {
    const response = await api.post("/videos", video);
    toast.success(`Nuevo Video registrado: ${JSON.stringify(response.data.titulo)}`);
    return response.data.id; // Devolver el ID retornado
  } catch (error) {
    toast.error("Error al registrar el video.");
    throw error; // Lanzar el error para manejarlo en el componente `FormularioVideos`
  }
};


//---- registrar Categoria
export const registrarCategoria = async (categoria) => {
  try {
    const response = await api.post("/categorias", categoria);
    toast.success(`Nueva Categoría registrada : ${JSON.stringify(response.data.nombre)}` );
    return response.data.id; // Devolver el ID retornado
  } catch (error) {
    toast.error("Error al registrar la Categoría");
  }
};

//---- Editar Categoria
export const editarCategoria = async (url, categoria) => {
  return await api.put(url, categoria);
}

//---- Eliminar Video
export const eliminarVideoApi = async (id) => {
  try {
    const response = await api.delete(`videos/${id}`);
    toast.success(`Video eliminado. : ${JSON.stringify(response.data.titulo)}` );
  } catch (error) {
    toast.error("Error al eliminar video:");
  }
}

//---- Eliminar Categoria
export const eliminarCategoriaApi = async (id) => {
    try {
    const response = await api.delete(`categorias/${id}`);
    toast.success(`Categoría eliminada: ${JSON.stringify(response.data.nombre)}` );
  } catch (error) {
    toast.error(`Error al eliminar categoría `      );
  }
}

//----
export const getVideoInfo = async (videoUrl) => {
  try {
    const encodedUrl = encodeURIComponent(videoUrl);
    const response = await axios.get(
      `https://www.youtube.com/oembed?url=${encodedUrl}&format=json`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("El propietario del video inhabilitó la reproducción en otros sitios web.");
    } else {
      throw new Error("Error al registrar el video.");
    }
  }
};


