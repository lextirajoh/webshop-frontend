import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setActiveUser, removeActiveUser } from '../../utils/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../HiddenLink/hiddenLink';
import Navigation from './Navigation';
import accounticon from '../../assets/account.png';
import carticon from '../../assets/cart.png';
import hearticon from '../../assets/heart.png';
import * as S from './Header.styled';

import { FaBars, FaTimes, FaReact } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Header() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { wishlistTotalQuantity } = useSelector((state) => state.wishlist);
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();

  let activeStyle = {
    borderBottom: '3px solid black',
  };

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
      <S.Container>
        <S.LeftSection>
          <S.Logo to="/">BoredGamers</S.Logo>
          <Navigation />
        </S.LeftSection>

        <S.RightSection>
          <div>
            <ShowOnLogout>
              <NavLink to="/account/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>log in</NavLink>
            </ShowOnLogout>
          </div>
          <S.Name>
            <ShowOnLogin>
              <NavLink to="/account">
                {' '}
                <p>Welkom</p>
                <p> {displayName}</p>
              </NavLink>
            </ShowOnLogin>
          </S.Name>
          <div>
            <ShowOnLogin>
              <NavLink to="/account">
                {' '}
                <img src={accounticon} alt="" />
              </NavLink>
            </ShowOnLogin>
          </div>
          <S.Wishlist>
            <NavLink to="/wishlist" >
              <img src={hearticon} alt="" />
              {wishlistTotalQuantity > 0 && (
                <S.Badge>{wishlistTotalQuantity}</S.Badge>
              )}
            </NavLink>
          </S.Wishlist>

          <S.Cart>
            <NavLink to="/cart">
              <img src={carticon} alt="" />
              {cartTotalQuantity > 0 && <S.Badge>{cartTotalQuantity}</S.Badge>}
            </NavLink>
          </S.Cart>
        </S.RightSection>

        <S.MobileMenu>
          <IconContext.Provider value={{ color: '000' }}>
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
        </S.MobileMenu>
      </S.Container>
    </>
  );
}
