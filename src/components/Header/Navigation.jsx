import * as S from './Navigation.styled';
import arrowdown from '../../assets/arrow-down.png';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  let activeStyle = {
    borderBottom: '3px solid black',
  };

  return (
    <S.Nav>
      <S.Home>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </S.Home>
      <S.DropdownMenu>
        <S.Bordspellen>
          <NavLink
            to="products/All"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Bordspellen
          </NavLink>
        </S.Bordspellen>
        <img src={arrowdown} />
        <ul>
          <li>
            <Link to="products/All">Alle spellen</Link>
          </li>
          <li>
            <Link to="products/Strategie">Strategiespellen</Link>
          </li>
          <li>
            <Link to="products/Familie">Familiespellen</Link>
          </li>
          <li>
            <Link to="products/Party">Partyspellen</Link>
          </li>
        </ul>
      </S.DropdownMenu>
    </S.Nav>
  );
}
