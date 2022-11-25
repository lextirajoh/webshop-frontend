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
  margin: 0 1rem;
  padding: 1rem;
  color: white;
  border-radius: 10px;

  @media (max-width: 62rem) {
    margin: 1rem 0;
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.15);
    scale: 1.02;
    transition: 500ms;
  }

  button {
    width: 6rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    color: black;
    background-color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: #f8e23c;
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
    width: 10rem;
    margin-bottom: 0.7rem;
    border-radius: 10px;

    @media (max-width: 62rem) {
      width: 100%;
    }
  }
`;
