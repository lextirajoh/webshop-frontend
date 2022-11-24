import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';

export default function Reset() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleReset(e) {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info(`Instructies om wachtwoord te herstellen verzonden. Check uw email.`, {
          position: 'bottom-left',
        });
        navigate('/');
      })
      .catch((error) => {
        toast.error('Geen account gevonden bij dit emailadres.');
      });
  }

  return (
    <>
    <Main>
      <Form onSubmit={handleReset}>
        <h2>Herstel wachtwoord</h2>
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
        <button type="submit">Verzenden</button>
        <hr />
      <Link to="/account/login">
        Terug naar login-scherm.
      </Link>
      </Form>
      
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 25rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

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
  `
