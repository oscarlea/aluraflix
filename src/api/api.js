import axios from "axios"

//---

export const api = axios.create({
  baseURL: "http://localhost:4000"
})

//--- Buscar video/categoria

export const buscar = async (url, setData) => {
  const response = await api.get(url)
  setData(response.data)
}

//---- registrar Video

export const registrarVideo = async (video) => {
  try {
    return await api.post("/videos", video);
//    console.log("Nuevo video registrado:", response.data);
  } catch (error) {
    console.error("Error al registrar el video:", error);
  }
};

//---- registrar Categoria

export const registrarCategoria = async (categoria) => {
  try {
    const response = await api.post("/categorias", categoria);
    console.log("Nueva Categoría registrada:", response.data);
  } catch (error) {
    console.error("Error al registrar la Categoría:", error);
  }
};

//---- Editar Categoria
export const editarCategoria = async (url, categoria) => {
  return await axios.put(url, categoria);
}

//---- Eliminar Video
export const eliminarVideoApi = async (id) => {
  try {
    const response = await api.delete(`videos/${id}`);
    console.log("Video eliminado:", response.data);
  } catch (error) {
    console.error("Error al eliminar video:", error);
  }
}

//----


