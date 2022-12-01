import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Dropdown = css`
  position: relative;
  display: flex;

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
    border-radius: 5px;

    li {
      display: flex;
      justify-content: end;
      padding: 0.5rem;

      :hover {
        background-color: gold;
      }
    }
  }
`;

const DropdownArrow = css`
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  gap: 1rem;
`;

export const Home = styled.div`
  border-bottom: 3px solid transparent;
`

export const DropdownMenu = styled.div`
  ${Dropdown}
  ${DropdownArrow}
  display: grid;
  place-content: center;
  height: 100%;

`;

export const Bordspellen = styled(NavLink)`
  border-bottom: 3px solid transparent;
`
