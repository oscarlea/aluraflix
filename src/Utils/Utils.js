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

  const loremIpsum = require('lorem-ipsum').loremIpsum;

  export const generateLoremIpsum = (paragraphs, lowerBound, upperBound) => {
    const text = loremIpsum({
      count: paragraphs,
      format: 'plain',
      paragraphLowerBound: lowerBound,
      paragraphUpperBound: upperBound
    });
    return text;
  };
  //console.log(generateLoremIpsum(1, 3, 7));

  //----
  