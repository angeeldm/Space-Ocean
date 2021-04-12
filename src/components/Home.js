import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {ContenedorHeader, Header} from '../elements/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faUserAstronaut, faRocket, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as Telescope} from '../img/telescope1.svg';
import {API, RandomPics} from '../api';
import {parseISO, format, isValid} from 'date-fns';
import {PictContainer, PictCard} from '../elements/PictsList';
import {ModalContent, ModalTitle, ModalInfo, ModalButton, CloseBtn} from '../elements/ModalContent';
import Footer from '../elements/Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Boton from '../elements/Boton';
import Alerta from '../elements/Alerta';

const Home = () => {
    const [picture, setPicture] = useState([]);                     //VARIABLE QUE OBTIENE LA IMAGEN PRINCIPAL
    const [randomPics, setRandomPics] = useState([]);               //VARIABLE QUE OBTIENE LAS IMAGENES DE LISTA
    const [datePicture, setDatePicture] = useState([]);             //VARIABLE QUE OBTIENE LA IMAGEN BUSCADA DEL INPUT
    const [alerta, setAlerta] = useState({});
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [fecha, setFecha] = useState('');
    const ref = useRef();
    let searchFecha;                                                //PARA GUARDAR EL VALOR BUSCADO
    const date = parseISO(picture.date);                            //CONVERTIR LA VARIABLE EN UN VALOR QUE PUEDA SER LEIDO

    const closeTooltip = () => ref.current.close();

    const resetFecha = () => {
        setFecha('');
        setDatePicture([]);
        closeTooltip();
    }
    
    const handleChange = (e) => {
        searchFecha = parseISO(e.target.value);
        setFecha(e.target.value);
    }

    const handleClick = () => {
        if(searchFecha > new Date() || fecha === ''){               
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Fecha Inválida'
            });
            return;
        } else{
            try {
                if(fecha !== ''){
                    const dataImg = async () => {
                        const url = `https://api.nasa.gov/planetary/apod?api_key=3I6Mg1Nsvh1yM9VOEOXqd8QCoH9T7wxZlcwg9FcU&date=${fecha}`;
                        const response = await fetch(url);
                        const result = await response.json();
                        // console.log(result);

                        const imgDataFinal = await result;
                        setDatePicture(imgDataFinal);

                        if(imgDataFinal.code === 400) {
                            setEstadoAlerta(true);
                            setAlerta({
                                tipo: 'error',
                                mensaje: 'No se puede mostrar esta imagen'
                            });
                            // console.log(imgDataFinal.code);
                            return;
                        }
                    }
                    return dataImg();
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(datePicture.length > 1){
            setDatePicture([]);
        }
        return;
    }

    const fetchAPI = async () => {
        try {
            const data = await API();
            const dataRandomPics = await RandomPics();
            setPicture(data);
            setRandomPics(dataRandomPics);

            return;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAPI();
    }, [])


    return (
        <MainContainer>
            <BoxContainer>
                <ContenedorHeader>
                    <Header>
                        <Title>Space Ocean <FontAwesomeIcon icon={faUserAstronaut} /> </Title>
                        <div>
                            <Popup trigger={<Boton activo>Search <FontAwesomeIcon icon={faSearch} pull="right"/></Boton> } modal ref={ref} nested onClose={resetFecha}>
                                <ModalContent>
                                    <CloseBtn onClick={closeTooltip}> &times; </CloseBtn>
                                    <Input type="date" onChange={handleChange} value={fecha}/>
                                    <div>
                                        <ModalButton onClick={resetFecha}>Close <FontAwesomeIcon icon={faTimes} /></ModalButton>
                                        <ModalButton onClick={handleClick}>Search <FontAwesomeIcon icon={faRocket} /></ModalButton>
                                    </div>
                                </ModalContent>

                                {datePicture.length !== 0 ?
                                    <Popup trigger={<Boton excep>See <Telescopio /> </Boton>} modal nested ref={ref}>
                                        <ModalContent>
                                            <CloseBtn onClick={resetFecha}> &times; </CloseBtn>
                                            {datePicture.length !== 0 ?
                                                <>
                                                    <img src={datePicture.url} alt="imagen" />
                                                    <ModalTitle>{datePicture.title}</ModalTitle>
                                                    <ModalInfo>{datePicture.date}</ModalInfo>
                                                    <ModalInfo>{datePicture.explanation}</ModalInfo>
                                                </>
                                            :
                                             'Hubo un error al cargar la imagen'
                                            }
                                        </ModalContent>
                                    </Popup> 
                                : ''
                                }
                            </Popup>
                        </div>
                    </Header>
                </ContenedorHeader>

                <Title>Most Valuable Picture</Title>
                {(!isValid(date) ? 'Cargando' : <DateInfo>{format(date, "EEEE dd MMMM yyyy")}</DateInfo>)}
                
                <Picture>
                    <img src={picture.hdurl} alt="Loading.."/>
                </Picture>
                <h3>{picture.title}</h3>

                <Title>The Greatest Pictures</Title>
                <PictContainer>
                    {randomPics.map((pict) => {
                        const picsDate = parseISO(pict.date);
                        return(
                            <PictCard key={pict.title}>
                                <img src={pict.url} alt="Loading.." />
                                <div className="alineado">
                                    <h4>{pict.title}</h4>
                                    {(!isValid(picsDate) ? 'Cargando' : <p>{format(picsDate, "EEEE dd MMMM yyyy")}</p>)}
                                    <Popup trigger={<ModalButton >See more  </ModalButton>} modal ref={ref}>
                                        <ModalContent>
                                            <CloseBtn onClick={closeTooltip}> &times; </CloseBtn>
                                            <img src={pict.url} alt="Loading.." />
                                            <ModalTitle>{pict.title}</ModalTitle>
                                            <ModalInfo date>{format(picsDate, "dd EEEE MMMM yyyy")}</ModalInfo>
                                            <ModalInfo>{pict.explanation}</ModalInfo>
                                        </ModalContent>
                                    </Popup>
                                </div>
                            </PictCard>
                        )
                    })}
                </PictContainer>

                <Footer>
                    <b>Thanks to <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer">Nasa Open APIs</a> </b>
                </Footer> 

            </BoxContainer>
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
        </MainContainer>
    );
}

const MainContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 50px;
    width: 100%;
    padding-bottom: 30px;
`;

const Title = styled.h1`
    color: #000;
    font-family: Lato;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    margin-top: 30px;
`;

const BoxContainer = styled.div`
    width: 80%;
    height: 100%;
    background-color: rgba(230, 231, 230, .75);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DateInfo = styled.p`
    font-family: Lato;
    font-size: 25px;
    color: #000;
    text-align: center;
`;

const Picture = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: center;

    img{
        width: 50%;
    }
`;

const Input = styled.input`
    font-size: 16px;
    padding: 10px 60px;
    border: none;
    border-bottom: 2px solid #C1C1C1;
    background-color: transparent;
    transition: 0.5s ease-in;

    &:hover{
        border-bottom: 2px solid #000;
    }
`;

const Telescopio = styled(Telescope)`
    height: 30px;
    width: 50px;
`;
 
export default Home;