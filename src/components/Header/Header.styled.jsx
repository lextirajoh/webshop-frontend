import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
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

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled(Link)`
  font-family: Brush Script MT;
  font-size: 2rem;

  :hover {
    color: black;
  }

  @media (min-width: 50rem) {
    font-size: 2.5rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 0.2rem 0rem;
    margin: 0 0.7rem;
  }

  @media (max-width: 50rem) {
    display: none;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

export const Name = styled.div`
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

export const Wishlist = styled.span`
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
export const Cart = styled.span`
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

export const Badge = styled.div`
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

export const MobileMenu = styled.div`
  list-style: none;

  @media (min-width: 50rem) {
    display: none;
  }
`;
