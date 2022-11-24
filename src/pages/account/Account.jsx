import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import styled from 'styled-components';

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
      <Main>
        <h1>Account-overzicht</h1>
        <hr />
        <button onClick={handleLogout}>Log uit</button>
      </Main>
    </>
  );
}

const Main = styled.main`
display: flex;
flex-direction: column;
  width: 80%;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
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
