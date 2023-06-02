import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { styled } from "styled-components";


const TemaIcono = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
`;

function BotonTema({ tema, toggleTheme }) {

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
