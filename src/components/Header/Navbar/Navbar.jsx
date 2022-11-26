import { dropdownContent } from './dropdownContent';
import MenuItems from './MenuItems.jsx';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <nav>
      <StyledUL>
        {dropdownContent.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </StyledUL>
    </nav>
  );
}

const StyledUL = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  list-style: none;
  font-weight: bold;

  @media (max-width: 62rem) {
    display: none;
  }
`;
