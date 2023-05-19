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


export const registrarVideo = async (video) => {
  try {
    const response = await api.post("/videos", video);
    console.log("Nuevo video registrado:", response.data);
    // Realizar otras acciones después de grabar el video en el servidor JSON
  } catch (error) {
    console.error("Error al registrar el video:", error);
  }
};
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
 

  