import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/Footer';

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
          <h1 className='heading'>Registreer</h1>
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
            placeholder="Herhaal wachtwoord.."
            required
          />
          <button type="submit">Registreer</button>
          <hr />
          <p>
            Al geregistreerd? <a href="login">Log in.</a>
          </p>
        </Form>
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  a {
    text-decoration: underline;
    color: white;

    :hover {
      color: black
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 7rem auto 4rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);

  @media (min-width: 30rem) {
    width: 25rem;
  }

  h1 {
    margin: 0 auto 1rem auto;
  }

  input {
    width: 100%;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    padding: 0.3rem;
    border-radius: 0.4rem;
    border: 1px solid lightgray;
  }

  button {
    width: 40%;
    height: 2rem;
    margin: 1rem 0 1rem auto;
    background-color: gold;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      background-color: #ffde22;
      transition: 300ms;
    }
  }
`;
