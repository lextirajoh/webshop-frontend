import * as S from './Navigation.styled';
import arrowdown from '../../assets/arrow-down.png';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  let activeStyle = {
    borderBottom: '3px solid black',
  };

  return (
    <S.Nav>
      <S.Home
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
        </S.Home>
      <S.Bordspellen>
        <NavLink
          to="products/All"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Bordspellen
        </NavLink>
        <img src={arrowdown} />
        <ul>
          <li>
            <NavLink to="products/All">Alle spellen</NavLink>
          </li>
          <li>
            <NavLink to="products/Strategie">Strategiespellen</NavLink>
          </li>
          <li>
            <NavLink to="products/Familie">Familiespellen</NavLink>
          </li>
          <li>
            <NavLink to="products/Party">Partyspellen</NavLink>
          </li>
        </ul>
      </S.Bordspellen>
    </S.Nav>
  );
}
