import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: none;
  align-items: center;
  height: 4rem;
  gap: 1rem;

  @media (min-width: 50rem) {
    display: flex;
  }
`;

export const Home = styled.div`
  border-bottom: 3px solid transparent;
`;

export const Bordspellen = styled(NavLink)`
  border-bottom: 3px solid transparent;
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  height: 100%;

  &:hover {
    ul {
      display: flex;
    }
  }

  ul {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 4rem;
    right: -2rem;
    width: 12rem;
    padding: 0;
    list-style-type: none;
    background-color: rgb(178, 178, 178);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 3px 3px 7px rgb(68, 68, 68);

    li {
      display: flex;
      justify-content: end;
      padding: 0.5rem;

      :hover {
        background-color: gold;
      }
    }
  }

  img:nth-of-type(1) {
    position: absolute;
    top: 27px;
    right: -25px;
    width: 15px;
    height: 12px;
    transition: 400ms;
  }

  &:hover {
    img:nth-of-type(1) {
      transform: rotate(180deg);
      transition: transform 400ms;
    }
  }
`;
