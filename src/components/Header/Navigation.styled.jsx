import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

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
      padding: .5rem;

      :hover {
        background-color: gold;
      }

      a,
      a:hover {
        color: black;
        border-bottom: none;
      }
    }
  }
`;

const DropdownArrow = css`
  img:nth-of-type(1) {
    position: absolute;
    top: 33px;
    right: -30px;
    height: 13px;
    transition: 400ms;
  }

  &:hover {
    img:nth-of-type(1) {
      transform: rotate(180deg);
      transition: transform 400ms;
    }
  }
`;

export const Home = styled(NavLink)`
  border-bottom: 3px solid transparent;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  gap: 1rem;
`;


export const Bordspellen = styled.div`
  ${Dropdown}
  ${DropdownArrow}
  display: grid;
  place-content: center;
  height: 100%;

  :first-child{
    border-bottom: 3px solid green
  }


`;