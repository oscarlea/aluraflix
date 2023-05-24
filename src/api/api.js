import axios from "axios"

//---

export const api = axios.create({
  baseURL: "http://localhost:4000"
})

//---

export const buscar = async (url, setData) => {
  const response = await api.get(url)
  setData(response.data)
}

//----

export const registrarVideo = async (video) => {
  try {
    const response = await api.post("/videos", video);
    console.log("Nuevo video registrado:", response.data);
  } catch (error) {
    console.error("Error al registrar el video:", error);
  }
};

//----

export const registrarCategoria = async (categoria) => {
  try {
    const response = await api.post("/categorias", categoria);
    console.log("Nueva Categoría registrada:", response.data);
  } catch (error) {
    console.error("Error al registrar la Categoría:", error);
  }
};

//----


