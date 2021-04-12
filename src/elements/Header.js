import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  position: absolute;
  top: 50px;
  bottom: 0;
`;

const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    padding: 40px 0 30px 0;
    display: flex;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

const Titulo = styled.h1`
    font-family: Lato;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 70px;
    color: #fff;
`;

export {Contenedor, ContenedorHeader, Header, Titulo};