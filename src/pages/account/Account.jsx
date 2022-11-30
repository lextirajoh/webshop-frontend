import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';

export default function Account() {
  const navigate = useNavigate();

  function handleLogout(e) {
    signOut(auth)
      .then(() => {
        toast.info(`You are logged out`);
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <>
      <Container>
        <Main>
          <h1>Account-overzicht</h1>
          <hr />
          <button onClick={handleLogout}>Log uit</button>
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
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 7rem auto 4rem auto;

  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem;

  button {
    width: 10rem;
    height: 2rem;
    margin: 1rem 0 1rem auto;

    background-color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
      color: white;
      background-color: #186297;
      transition: 400ms;
    }
  }
`;
