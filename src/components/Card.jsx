import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart, getTotals } from '../utils/cartSlice';
import styled from 'styled-components';

export default function Card({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    // navigate('/cart');
  }

  return (
    <>
      <Container>
        <CardLink to={`/product-detail/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>€{product.price}</h5>
        </CardLink>

        <button onClick={() => handleAddToCart(product)}>Bestel</button>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
  margin: 15px;
  margin-top: 0;
  padding: 15px;
  color: white;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);


  @media (max-width: 50rem) {
    margin: 15px 0;
    width: 100%;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
    scale: 1.02;
    transition: 400ms ease-in-out;
  }

  button {
    width: 6rem;
    height: 1.5rem;
    margin-top: 8px;
    font-weight: 400;
    letter-spacing: 1.15px;
    color: black;
    background-color: gold;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: #fedf2b;
    }
  }
`;

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  :hover {
    color: white;
  }

  img {
    height: 10rem;
    margin-bottom: 12px;
    border-radius: 10px;

    @media (max-width: 50rem) {
      width: 100%;
      height: auto;
    }
  }
`;
