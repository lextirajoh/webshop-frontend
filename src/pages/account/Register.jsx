import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import { toast } from 'react-toastify';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) return;

    if (password !== confirmPassword) {
      toast.error(`Wachtwoorden komen niet overeen`);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.info(`Succesvol geregistreerd`);
        navigate('/account');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <>
      <Main>
        <Form onSubmit={handleRegister}>
          <h2>Registreer</h2>
          <hr />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Voer uw email in.."
            required
          />
          <label htmlFor="password">Wachtwoord:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Voer een wachtwoord in.."
            required
          />
          <label htmlFor="password-confirm">Herhaal wachtwoord:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Herhaal wachtwoord ter bevestiging.."
            required
          />

          <button type="submit">Registreer</button>
          <hr />
          <p>
            Al geregistreerd? <a href="login">Log in.</a>
          </p>
        </Form>
      </Main>
    </>
  );
}

const Main = styled.main`
  
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0 auto 1rem auto;
  }

  input {
    width: 100%;
    margin-top: .3rem;
    margin-bottom: 1rem;
    padding: .3rem;
    border-radius: 0.4rem;
    border: 1px solid lightgray;
    outline: none;
  }

  button {
    width: 40%;
    height: 2rem;
    margin: 1rem 0 1rem auto;
    background-color: dadada;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      color: white;
      background-color: #186297;
      transition: 400ms;
    }
  }

  a {
    color: white;

    :hover {
      color: #d9d8d8
    }
  }
`;
