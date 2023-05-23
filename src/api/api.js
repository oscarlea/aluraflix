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

/* export const buscar = async (url, setData, id = null) => {
  const fullUrl = id ? `${url}?id=${id}` : url;
  const response = await api.get(fullUrl);
  setData(response.data);
}; */


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

export const rgbaToHexWithAlpha = (rgba) => {
  // Extraer los componentes RGBA separándolos por comas
  const rgbaValues = rgba.substring(rgba.indexOf("(") + 1, rgba.lastIndexOf(")")).split(",");

  // Obtener los valores de rojo, verde y azul
  const r = parseInt(rgbaValues[0].trim(), 10);
  const g = parseInt(rgbaValues[1].trim(), 10);
  const b = parseInt(rgbaValues[2].trim(), 10);

  // Obtener el valor del canal alfa
  const alpha = parseFloat(rgbaValues[3].trim());

  // Aplicar el canal alfa a los componentes RGB
  const newR = Math.round(r * alpha);
  const newG = Math.round(g * alpha);
  const newB = Math.round(b * alpha);

  // Convertir los componentes RGB a su representación hexadecimal
  const hex = `#${((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, "0")}`;

  // Retornar el valor hexadecimal
  return hex;
};

