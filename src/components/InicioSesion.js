import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {Contenedor, ContenedorHeader, Header, Titulo} from '../elements/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons';
import Boton from '../elements/Boton';
import Alerta from '../elements/Alerta';

const InicioSesion = () => {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const history = useHistory();

  const handleChange = e => {
    switch (e.target.name){
      case 'nombre':
        setNombre(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(nombre === '' || password === ''){
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Debes completar los campos'
      });
      return;
    } else{
      history.push('/home');
    }
  }

  return (
    <>
      <Contenedor>
        <Header>
          <ContenedorHeader>
            <Titulo>Space Ocean</Titulo>
            <FontAwesomeIcon icon={faUserAstronaut} size="6x" color="#fff" />
          </ContenedorHeader>
        </Header>
        <Formulario onSubmit={handleSubmit}>
          <Input name="nombre" type="text" placeholder="User" value={nombre} onChange={handleChange} />
          <Input name="password" type="password" placeholder="Password" value={password} onChange={handleChange} /> 
          <Boton as="button">Let's Go <FontAwesomeIcon icon={faSpaceShuttle} rotation={270} /> </Boton>
        </Formulario>
      </Contenedor>

      <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
    </>
  );
}

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  input{
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }
`;

const Input = styled.input`
  font-size: 1.4em;
  text-transform: uppercase;

`;

export default InicioSesion;