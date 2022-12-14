import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../utils/productsApi';
import { addToCart, getTotals } from '../utils/cartSlice';
import { addToWishlist } from '../utils/wishlistSlice';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

export default function ProductDetail() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetAllProductsQuery();
  const params = useParams();
  const product = params.id;

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    navigate('/cart');
  }

  function handleAddToWishlist(product) {
    dispatch(addToWishlist(product));
    navigate('/wishlist');
  }

  return (
    <>
      <Container>
        {typeof data !== 'undefined' ? (
          <Main>
            <BlackWrap>
              <Path>
                <Link to="/products/All"> Alle spellen</Link> &gt;{' '}
                <Link to={`/products/${data[product].category}`}>
                  {data[product].category}
                </Link>{' '}
                &gt; {data[product].title}
              </Path>

              <LeftColumn>
                <img src={data[product].image} alt={product.title} />
                <h3>€ {data[product].price}</h3>
                <hr />
                <p>
                  <strong>Uitgever:</strong> {data[product].publisher}{' '}
                </p>
                <p>
                  <strong>Taal:</strong> {data[product].language}{' '}
                </p>
                <p>
                  <strong>Aantal spelers:</strong> {data[product].players}{' '}
                </p>
                <p>
                  <strong>Speelduur:</strong> {data[product].playtime} min.
                </p>
                <p>
                  <strong>Leeftijd:</strong> Vanaf {data[product].age} jaar
                </p>

                <hr />
                <WishlistButton
                  onClick={() => handleAddToWishlist(data[product])}
                >
                  Zet op wenslijst
                </WishlistButton>
                <BuyButton onClick={() => handleAddToCart(data[product])}>
                  In winkelwagen
                </BuyButton>
              </LeftColumn>

              <RightColumn>
                <h1>{data[product].title}</h1>
                <hr />
                <div className="embed-container">
                  <iframe
                    src={
                      data[product].youtube +
                      '?autoplay=1&modestbranding=1&mute=1'
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                <Desc>
                  <h5>Beschrijving</h5>
                  <hr />
                  {data[product].desc.split('\n').map((sentence, index) => {
                    return <p key={index}>{sentence}</p>;
                  })}
                </Desc>
              </RightColumn>
            </BlackWrap>
          </Main>
        ) : (
          <div>No product found.</div>
        )}

        {typeof data !== 'undefined' ? (
          <>
            <MainMob>
              <Path>
                <Link to="/products/All"> Alle spellen</Link> &gt;{' '}
                <Link to={`/products/${data[product].category}`}>
                  {data[product].category}
                </Link>{' '}
                &gt; {data[product].title}
              </Path>
              <hr />
              <h1>{data[product].title}</h1>

              <img src={data[product].image} alt={product.title} />
              <hr />
              <h3>Productinformatie</h3>
              <InfoMob>
                <div>
                  <p>
                    <strong>Taal:</strong> {data[product].language}{' '}
                  </p>
                  <p>
                    <strong>Aantal spelers:</strong> {data[product].players}{' '}
                  </p>
                  <p>
                    <strong>Uitgever:</strong> {data[product].publisher}{' '}
                  </p>
                  <WishlistButton
                    onClick={() => handleAddToWishlist(data[product])}
                  >
                    Zet op wenslijst
                  </WishlistButton>
                </div>
                <div>
                  <p>
                    <strong>Speelduur:</strong> {data[product].playtime} min.
                  </p>
                  <p>
                    <strong>Leeftijd:</strong> Vanaf {data[product].age} jaar
                  </p>
                  <p>
                    <strong>Prijs: €{data[product].price}</strong>
                  </p>
                  <BuyButton onClick={() => handleAddToCart(data[product])}>
                    In winkelwagen
                  </BuyButton>
                </div>
              </InfoMob>
              <hr />
              <div className="embed-container">
                <iframe
                  src={data[product].youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <hr />
              <Desc>
                <h5>Beschrijving</h5>

                <p>{data[product].desc} </p>
              </Desc>
            </MainMob>
          </>
        ) : (
          <>
            <div>No product found.</div>
          </>
        )}
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0);
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 4rem 0;

  h1 {
    margin: 1rem 0;
  }

  hr {
    width: 100%;
  }

  @media (max-width: 50rem) {
    display: none;
  }
`;

const BlackWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;
  column-gap: 4rem;

  padding: 1.5rem 2rem;
  border-radius: 10px;
`;

const Path = styled.nav`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;

  a {
    color: white;

    :hover {
      color: white;
    }
  }
`;

const LeftColumn = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 10px;

  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
`;

const RightColumn = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
`;

const Desc = styled.div`
  margin-top: 2rem;
  background-color: transparant;
  color: white;
  border-radius: 10px;
`;

const WishlistButton = styled.button`
  width: 9rem;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: none;
  outline: none;
  margin-top: 1rem;
  color: black;
  background-color: white;
  cursor: pointer;

  @media (min-width: 50rem) {
    width: 100%;

  }

  :hover {
  background-color: #e5e5e5;
  }
`;

const BuyButton = styled.button`
  width: 9rem;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: none;
  outline: none;
  margin-top: 1rem;
  color: black;
  background-color: gold;
  cursor: pointer;

  @media (min-width: 50rem) {
    width: 100%;

  }

  :hover {
    background-color: #fbe643;
  }
`;

const MainMob = styled.main`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-top: 6rem;
  padding-bottom: 12rem;

  h1 {
    margin: 1rem 0;
  }

  hr {
    width: 100%;
  }

  @media (min-width: 50rem) {
    display: none;
  }
`;

const InfoMob = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
`;
