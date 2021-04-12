import styled from "styled-components";

const Boton = styled.button`
    color: #111;
    padding: ${(props) => props.activo ? '10px 50px' : '5px 30px'};
    display: block;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    background-color: ${(props) => props.activo ? 'transparent' : '#9F9F9F'};
    border-bottom: ${(props) => props.activo ? '2px solid #C1C1C1' : 'none'};
    transition: 0.5s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        border-bottom: ${(props) => props.activo ? '2px solid #000' : 'none'};
    }

    @media(max-width: 768px){
        width: ${(props) => props.excep ? '40%' : '100%'};
    }
`;

export default Boton;