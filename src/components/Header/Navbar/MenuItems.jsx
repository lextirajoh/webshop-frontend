import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import styled from 'styled-components';

export default function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  function onMouseEnter() {
    window.innerWidth > 960 && setDropdown(true);
  }

  function onMouseLeave() {
    window.innerWidth > 960 && setDropdown(false);
  }

  function closeDropdown() {
    dropdown && setDropdown(false);
  }

  let activeStyle = {
    borderBottom: "3px solid black",
  };

  return (
    <StyledLi
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <Arrow />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} {depthLevel > 0 ? <span>&raquo;</span> : <Arrow />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <NavLink to={items.url}  style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }>{items.title}</NavLink>
      )}
    </StyledLi>
  );
}

const StyledLi = styled.li`
  position: relative;
  margin: 1rem;

  a {
    display: block;
    border: 3px solid transparent;
  }

  > a,
  .menu-items button {
    text-align: left;
    border: 3px solid transparent;
  }

  a:hover{
    border-bottom: 3px solid black;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;

    span {
      margin-left: 3px;
    }
  }
`;

const Arrow = styled.span`
  ::after {
    content: '';
    display: inline-block;
    margin-left: 0.28rem;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;
