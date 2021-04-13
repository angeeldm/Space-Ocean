import styled from "styled-components";

const ModalContent = styled.div`
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ModalTitle = styled.h3`
    font-family: Lato;
    font-size: 1.2em;
    text-align: center;
    text-transform: uppercase;
    margin: 10px 0;
`;

const ModalInfo = styled.p`
    font-family: Lato;
    font-size: 1em;
    text-align: center;
    font-weight: ${(props) => props.date ? 'bold' : 'regular'};
    margin-bottom: 10px;
`;

const ModalButton = styled.button`
    font-size: 1em;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 5px 20px;
    background-color: #9F9F9F;
    cursor: pointer;
    margin: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,.3);
`;

const CloseBtn = styled.button`
    color: #000;
    border: none;
    border-radius: 50%;
    padding: 5px 10px;
    background-color: #9F9F9F;
    cursor: pointer;
    margin: 10px 0;
    position: absolute;
    top: -20px;
    right: -10px;
`;

export {ModalContent, ModalTitle, ModalInfo, ModalButton, CloseBtn};