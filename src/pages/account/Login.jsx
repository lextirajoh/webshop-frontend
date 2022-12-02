import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.info(`Succesvol ingelogd`);
        navigate('/');
      })
      .catch((error) => {
        toast.error(`Combinatie email en wachtwoord is onbekend.`);
      });
  }

  return (
    <>
      <Container>
        <Main>
          <Form onSubmit={handleLogin}>
            <h1 className="heading">Login</h1>
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
              placeholder="Voer uw wachtwoord in.."
              required
            />
            <Link to="/account/reset">Wachtwoord vergeten?</Link>
            <button type="submit">Login</button>
            <hr />
            <p>
              Nieuwe klant?{' '}
              <Link to="/account/register">Maak een account aan.</Link>
            </p>
          </Form>
        </Main>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  margin: 7rem auto 4rem auto;
  padding: 2rem;
  width: 90%;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);

  @media (min-width: 30rem) {
    width: 25rem;
  }

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
    color: #000000;
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
