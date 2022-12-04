import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  removeFromWishlist,
  clearWishlist,
  getTotal,
} from '../utils/wishlistSlice';
import leftarrow from '../assets/left-arrow.png';
import Footer from '../components/Footer/Footer';

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [wishlist, dispatch]);

  function handleRemoveFromWishlist(wishlistItem) {
    dispatch(removeFromWishlist(wishlistItem));
  }

  function handleClearWishlist() {
    dispatch(clearWishlist());
  }

  return (
    <>
      <Container>
        <h1 className='heading '>Wenslijst</h1>
        {wishlist.wishlistItems.length === 0 ? (
          <EmptyWishlist>
            <p>Uw wenslijst is momenteel leeg.</p>
            <StartShopping>
              <Link to="/">
                <img src={leftarrow} alt="" />
                <span>Verder winkelen</span>
              </Link>
            </StartShopping>
          </EmptyWishlist>
        ) : (
          <Main>
            <Titles>
              <ProductTitle>Product</ProductTitle>
              <Price>Prijs</Price>
            </Titles>
            <WishlistItems>
              {wishlist.wishlistItems &&
                wishlist.wishlistItems.map((wishlistItem) => (
                  <WishlistItem key={wishlistItem.id}>
                    <WishlistProduct>
                      <img src={wishlistItem.image} alt={wishlistItem.title} />
                      <div>
                        <Link to={`/product-detail/${wishlistItem.id}`}>
                          <h3>{wishlistItem.title}</h3>
                        </Link>
                        <button
                          onClick={() => handleRemoveFromWishlist(wishlistItem)}
                        >
                          Verwijder
                        </button>
                      </div>
                    </WishlistProduct>
                    <WishlistProductPrice>
                      €{wishlistItem.price}
                    </WishlistProductPrice>
                  </WishlistItem>
                ))}
            </WishlistItems>
            <WishlistSummary>
              <ClearWishlistButton onClick={() => handleClearWishlist()}>
                Verwijder alles
              </ClearWishlistButton>
            </WishlistSummary>
          </Main>
        )}
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);

  h1 {
    font-weight: 400;
    font-size: 30px;
    text-align: center;
  }
`;

const Main = styled.main`
  width: 50rem;
  margin: 6rem auto 4rem auto;
`

const EmptyWishlist = styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartShopping = styled.div`
  margin-top: 1rem;

  img {
    width: 1rem;
    margin-right: 1rem;
  }

  span {
    color: #e2e2e2;
  }
`;

const Titles = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr;
  column-gap: 0.5rem;
  margin: 2rem 0 1rem 0;

  h3 {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const ProductTitle = styled.h3`
  padding-left: 0.5rem;
`;

const Price = styled.h3``;

const WishlistItems = styled.div``;

const WishlistItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr;
  column-gap: 0.5rem;
  width: 30rem;
  border-top: 1px solid white;
  padding: 1rem 0;
`;

const WishlistProduct = styled.div`
  display: flex;

  h3 {
    font-weight: 400;
    color: white;
  }

  img {
    width: 100px;
    max-width: 100%;
    margin-right: 1rem;
  }

  button {
    border: none;
    outline: none;
    margin-top: 0.7rem;
    cursor: pointer;
    background: none;
    color: #e1e1e1;

    :hover {
      color: white;
    }
  }
`;

const WishlistProductPrice = styled.div``;

const WishlistSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid white;
  padding-top: 2rem;
`;

const ClearWishlistButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: 0.5px solid white;
  color: white;
  background: none;
  outline: none;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #fa5b5b;
    border: none;
    transition: 200ms;
  }
`;
