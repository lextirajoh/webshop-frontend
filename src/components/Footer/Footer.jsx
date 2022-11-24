import React from 'react';
import styled from 'styled-components';
import fb from '../../assets/fb.png';
import ig from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <p>
              <Name>BoredGamers</Name> <br />
              Damsteeg 1<br />
              1234 AB Amsterdam
            </p>
            <p>
              020-1234567 <br /> info@boredgamers.nl <br />
            </p>
          </div>
          <div>
            <p>
              <strong>Openingstijden winkel:</strong>
            </p>
            Maandag: Gesloten <br />
            Di-Vr: 10:00 - 20:00 <br />
            Zaterdag: 10:00 -18:00 <br />
            Zondag: 10:00 - 17:00
          </div>
          <Newsletter>
            {' '}
            <p>Abonneer op onze nieuwsbrief:</p>
            <input type="text" placeholder="Voer uw emailadres in.." />
            <Social>
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={twitter} alt="" />
            </Social>
          </Newsletter>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  justify-content: space-around;
`;

const Name = styled.span`
  font-family: Brush Script MT;
  font-size: 1.8rem;
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 15rem;
    border-radius: 10px;
    padding: 0.5rem;
    border: none;
    background-color: #efefef;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 62rem) {
    display: none;
  }

  img {
    width: 1.5rem;
    margin: .5rem;
    cursor: pointer;
  }
`;
