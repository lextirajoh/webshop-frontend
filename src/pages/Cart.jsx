import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from '../utils/cartSlice';
import leftarrow from '../assets/left-arrow.png';
import Footer from '../components/Footer/Footer';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  function handleRemoveFromCart(cartItem) {
    dispatch(removeFromCart(cartItem));
  }

  function handleDecreaseCart(cartItem) {
    dispatch(decreaseCart(cartItem));
  }

  function handleIncreaseCart(cartItem) {
    dispatch(addToCart(cartItem));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <>
      <Main>
        <Container>
          <h1 className="heading">Winkelwagen</h1>
          {cart.cartItems.length === 0 ? (
            <EmptyCart>
              <p>Uw winkelwagen is momenteel leeg.</p>
              <StartShopping>
                <Link to="/">
                  <img src={leftarrow} alt="" />
                  <span>Verder winkelen</span>
                </Link>
              </StartShopping>
            </EmptyCart>
          ) : (
            <Content>
              <Titles>
                <ProductTitle>Product</ProductTitle>
                <Price>Prijs</Price>
                <Quantity>Hoeveelheid</Quantity>
                <Total>Totaal</Total>
              </Titles>
              <CartItems>
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id}>
                      <CartProduct>
                        <img src={cartItem.image} alt={cartItem.title} />
                        <div>
                          <Link to={`/product-detail/${cartItem.id}`}>
                            <h3>{cartItem.title}</h3>
                          </Link>
                          <button
                            onClick={() => handleRemoveFromCart(cartItem)}
                          >
                            Verwijder
                          </button>
                        </div>
                      </CartProduct>
                      <CartProductPrice>€{cartItem.price}</CartProductPrice>
                      <CartProductQuantity>
                        <button onClick={() => handleDecreaseCart(cartItem)}>
                          -
                        </button>
                        <Count>{cartItem.cartQuantity}</Count>
                        <button onClick={() => handleIncreaseCart(cartItem)}>
                          +
                        </button>
                      </CartProductQuantity>
                      <CartProductTotalPrice>
                        €{(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                      </CartProductTotalPrice>
                    </CartItem>
                  ))}
              </CartItems>
              <CartSummary>
                <ClearCartButton onClick={() => handleClearCart()}>
                  Verwijder alles
                </ClearCartButton>
                <CartCheckout>
                  <Subtotal>
                    <span>Subtotaal</span>
                    <Amount>€{cart.cartTotalAmount.toFixed(2)}</Amount>
                  </Subtotal>
                  <p>Verzendkosten berekend bij volgende stap</p>
                  <button>Kassa</button>
                  <ContinueShopping>
                    <Link to="/">
                      <img src={leftarrow} alt="" />
                      <span>Verder winkelen</span>
                    </Link>
                  </ContinueShopping>
                </CartCheckout>
              </CartSummary>
            </Content>
          )}
        </Container>
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 7rem 4rem 3rem 4rem;
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);

  @media (min-width: 50rem) {
    width: 80%;
  }

  h1 {
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
  }
`;

const EmptyCart = styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titles = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 1fr;
  column-gap: 0.5rem;
  margin: 2rem 0 1rem 0;

  @media (min-width: 50rem) {
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }

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
const Quantity = styled.h3`

  @media (max-width: 50rem) {
    display: none;
  }
`;

const Total = styled.h3`
  padding-right: 0.5rem;
  justify-self: right;
  @media (max-width: 50rem) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const CartItems = styled.div`
  width: 100%;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  border-top: 1px solid white;
  width: 100%;
  padding: 1rem 0;

  @media (min-width: 50rem) {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
`;

const CartProduct = styled.div`
  display: flex;

  h3 {
    color: white;
  }

  img {
    width: 100px;
    max-width: 100%;
    margin-right: 1rem;

    /* @media (max-width: 50rem) {
      display: none;
    } */
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

const CartProductPrice = styled.div``;

const CartProductQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 130px;
  max-width: 100%;
  border: 0.5px solid white;
  border-radius: 5px;

  @media (max-width: 50rem) {
    display: none;
  }

  button {
    border: none;
    outline: none;
    background: none;
    padding: 0.7rem 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

const Count = styled.div`
  padding: 0.7rem 0;
`;

const CartProductTotalPrice = styled.div`
  padding-right: 0.5rem;
  justify-self: right;
  font-weight: 700;

  @media (max-width: 50rem) {
    display: none;
  }
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid white;
  padding-top: 2rem;
`;

const ClearCartButton = styled.button`
    width: 6rem;
    height: 4rem;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: 0.5px solid white;
  color: white;
  background: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 50rem) {
    width: 10rem;
    height: 2.5rem;

  }

  :hover {
    color: white;
    background-color: #fa5b5b;
    border: none;
    transition: 200ms;
  }
`;

const CartCheckout = styled.div`
  width: 10rem;

  @media (min-width: 50rem) {
    width: 17rem;
  }


  p {
    font-size: 14px;
    font-weight: 200;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: gold;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;

    :hover {
      color: black;
      background-color: #f9e65a;
      transition: 400ms;
    }
  }
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

const Amount = styled.span`
  font-weight: 700;
`;

const ContinueShopping = styled.div`
  margin-top: 1rem;

  img {
    width: 1rem;
    margin-right: 1rem;
  }
`;

const StartShopping = styled.div`
  margin-top: 1rem;

  span {
    color: #e2e2e2;

    :hover {
      color: white;
    }
  }

  img {
    width: 1rem;
    margin-right: 1rem;
  }
`;
