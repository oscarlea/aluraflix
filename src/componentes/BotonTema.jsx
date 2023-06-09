import { useContext } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { styled } from "styled-components";
import { VideoDataContext } from "../Context";


const TemaIcono = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
    padding: min(1rem, 2vw) ;
    `;

function BotonTema() {

  const { toggleTheme, tema} = useContext(VideoDataContext)

  return (
    <li>
      <TemaIcono onClick={toggleTheme}>
        {tema ? (
          <RiSunFill size={20} />
        ) : (
          <RiMoonFill size={20} />
        )}
      </TemaIcono>
    </li>
  );
}

export default BotonTema;
