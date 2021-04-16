import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {Container, HeaderContainer, Header, MainTitle} from '../elements/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAstronaut, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons';
import Button from '../elements/Button';
import Alert from '../elements/Alert';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});
    const [alertState, setAlertState] = useState(false);
    const history = useHistory();

  const handleChange = e => {
    switch (e.target.name){
      case 'user':
        setUser(e.target.value)
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

    if(user === '' || password === ''){
      setAlertState(true);
      setAlert({
        type: 'error',
        message: 'Debes completar los campos'
      });
      return;
    } else{
      history.push('/home');
    }
  }

  return (
    <>
      <Container>
        <Header>
          <HeaderContainer>
            <MainTitle>Space Ocean</MainTitle>
            <FontAwesomeIcon icon={faUserAstronaut} size="6x" color="#fff" />
          </HeaderContainer>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input name="user" type="text" placeholder="User" value={user} onChange={handleChange} />
          <Input name="password" type="password" placeholder="Password" value={password} onChange={handleChange} /> 
          <Button as="button">Let's Go <FontAwesomeIcon icon={faSpaceShuttle} rotation={270} /> </Button>
        </Form>
      </Container>

      <Alert type={alert.type} message={alert.message} alertState={alertState} setAlertState={setAlertState} />
    </>
  );
}

const Form = styled.form`
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

export default Login;