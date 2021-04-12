import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';

const Alerta = ({tipo, mensaje, estadoAlerta, setEstadoAlerta}) => {
    useEffect(() => {
        let time;
        if(estadoAlerta === true){
            setTimeout(() => {
                setEstadoAlerta(false);
            }, 4000);
        }
        return(() => clearTimeout(time));

    }, [estadoAlerta, setEstadoAlerta])

    return (
        <>
            {estadoAlerta &&
                <ContenedorAlerta tipo={tipo}>
                    <p>{mensaje}</p>
                </ContenedorAlerta>
            }
        </>
    );
}

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.tipo === 'error'){
                return '#D72424';
            } else if (props.tipo === 'exito') {
                return '#2FE982';
            } else {
                return '#000';
            }
        }};
        font-family: Lato;
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;
 
export default Alerta;