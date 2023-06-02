import ListaCategorias from "../componentes/ListaCategorias.jsx"
import ListaVideos from "../componentes/ListaVideos.jsx";
import { hexToRgba } from "../Utils/Utils";
import { rgbaToHexWithAlpha } from "../Utils/Utils";
import { TituloCategoria, StyledCategoria, DescripcionCategoria, CategoriaEncabezado, MainContainer } from "../UI";




const Home = ({ categorias, actualizarColor, agregarNuevaCategoria }) => {

    const categoria = {
        colorPrimario: "#ff0000",
        nombre: "Todos Los video",
        descripcion: " kkj jh kjhk has dsad a yoquese sa"
    };

    const obj = { backgroundColor: hexToRgba(categoria.colorPrimario, 0.6) };
    const estiloNombre = { background: categoria.colorPrimario };

    const rgbaColor = hexToRgba(categoria.colorPrimario, 0.6)
    const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
    const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }


    return (

        <MainContainer className="MainContainer_Home">

            <ListaCategorias categorias={categorias} agregarNuevaCategoria={agregarNuevaCategoria} />

            <StyledCategoria bgcolor={obj.backgroundColor} data-testid="categorias/videos en Home">

                <CategoriaEncabezado style={estiloNombre}>

                    <TituloCategoria style={estiloAlpha} >
                        {categoria.nombre}
                    </TituloCategoria>

                    <DescripcionCategoria>
                        {categoria.descripcion}
                    </DescripcionCategoria>

                </CategoriaEncabezado>

                <ListaVideos url={"/videos"}
                    actualizarColor={actualizarColor}
                    colorPrimario={categoria.colorPrimario}
                />

            </StyledCategoria>

        </MainContainer>

    )
}

export default Home
