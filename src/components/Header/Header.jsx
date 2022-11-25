import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setActiveUser, removeActiveUser } from '../../utils/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../HiddenLink/hiddenLink';
import Navbar from './Navbar/Navbar';
import accounticon from '../../assets/account.png';
import carticon from '../../assets/cart.png';
import hearticon from '../../assets/heart.png';
import styled from 'styled-components';

import { FaBars, FaTimes, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Header() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { wishlistTotalQuantity } = useSelector((state) => state.wishlist);
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();

  // let activeStyle = {
  //   borderBottom: '3px solid black',
  // };

  // monitor currently active user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // create displayName from email, if there is no displayName
        if (user.displayName === null) {
          const namePart = user.email.substring(0, user.email.indexOf('@'));
          const namePartCap =
            namePart.charAt(0).toUpperCase() + namePart.slice(1);
          setDisplayName(namePartCap);
        } else {
          setDisplayName(user.displayName);
        }

        // push firebase data to redux
        dispatch(
          setActiveUser({
            email: user.email,
            username: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        // user is signed out
        setDisplayName('');
        dispatch(removeActiveUser);
      }
    });
  }, [dispatch, displayName]);

  // mobile menu
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <Container>
        <LeftSection>
          <Link to="/">BoredGamers</Link>
        </LeftSection>

        <MiddleSection>
          {' '}
          <Navbar />
        </MiddleSection>
        <RightSection>
          <div>
            <ShowOnLogout>
              <NavLink to="/account/login">log in</NavLink>
            </ShowOnLogout>
          </div>
          <Name>
            <ShowOnLogin>
              <NavLink to="/account">
                {' '}
                <p>Welkom</p>
                <p> {displayName}</p>
              </NavLink>
            </ShowOnLogin>
          </Name>
          <div>
            <ShowOnLogin>
              <NavLink to="/account">
                {' '}
                <img src={accounticon} alt="" />
              </NavLink>
            </ShowOnLogin>
          </div>
          <Wishlist>
            <NavLink to="/wishlist">
              <img src={hearticon} alt="" />
              {wishlistTotalQuantity > 0 && (
                <Badge>{wishlistTotalQuantity}</Badge>
              )}
            </NavLink>
          </Wishlist>

          <Cart>
            <NavLink to="/cart">
              <img src={carticon} alt="" />
              {cartTotalQuantity > 0 &&
              <Badge>{cartTotalQuantity}</Badge>}
            </NavLink>
          </Cart>
        </RightSection>

        <MobileMenu>
          <IconContext.Provider value={{ color: 'fff' }}>
            <div className="nav">
              <div className="nav-container">
                <div className="menu-icon" onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link
                      to="/cart"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Winkelwagen
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/wishlist"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Wenslijst
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/account"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Account
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link
                      to="/products"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Alle spellen
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/products/Strategie"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Strategie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/products/Familie"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Familie
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/products/Party"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Party
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/products/Abstract"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Abstract
                    </Link>
                  </li>
                  <hr />
                </ul>
              </div>
            </div>
          </IconContext.Provider>
        </MobileMenu>
      </Container>
    </>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  color: black;
  background-image: linear-gradient(
    90deg,
    hsl(54deg 83% 45%) 0%,
    hsl(52deg 87% 45%) 17%,
    hsl(50deg 90% 45%) 43%,
    hsl(49deg 92% 45%) 65%,
    hsl(47deg 93% 45%) 80%,
    hsl(45deg 93% 46%) 89%,
    hsl(44deg 92% 47%) 95%,
    hsl(42deg 90% 48%) 98%,
    hsl(40deg 88% 49%) 100%,
    hsl(38deg 87% 51%) 100%
  );
  font-weight: bold;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 1;
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  z-index: 2;

  a {
    text-decoration: none;
  }

  img {
    width: 1.5rem;
  }
`;

const LeftSection = styled.div`
  font-family: Brush Script MT;
  font-size: 2.5rem;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;

  @media (max-width: 62rem) {
    display: none;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 0.2rem 0rem;
    margin: 0 0.7rem;
  }

  @media (max-width: 62rem) {
    display: none;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;

  p:nth-of-type(1) {
    font-size: 0.9rem;
    font-weight: 100;
    margin-top: 1.7rem;
    margin-bottom: -0.4rem;
  }

  p:nth-of-type(2) {
    font-size: 1rem;
    font-weight: bold;
    float: right;
  }
`;

const Wishlist = styled.span`
  position: relative;

  a {
    position: relative;

    p {
      position: absolute;
      top: -0.8rem;
      right: -0.9rem;
      font-size: 1.2rem;
    }
  }
`;
const Cart = styled.span`
  position: relative;

  a {
    position: relative;

    p {
      position: absolute;
      top: -0.8rem;
      right: -0.9rem;
      font-size: 1.2rem;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -8px;
  right: -15px;
  display: grid;
  place-content: center;
  width: 1.1rem;
  height: 1.1rem;
  font-size: 0.8rem;
  color: gold;
  background-color: black;
  border-radius: 50%;
`;

const MobileMenu = styled.div`
  list-style: none;

  @media (min-width: 62rem) {
    display: none;
  }
`;
