import styled from "styled-components";

const PictContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 10px 0;
    width: 90%;

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

const PictCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #BBBFBD;
    padding: 10px 0;
    border-radius: 10px;

    &:hover{
        background-color: #D5D5D5;
        box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.3);
        transform: translateY(-10px);
    }

    img{
        width: 60%;
        margin-bottom: 10px;
    }
`;

export {PictContainer, PictCard};