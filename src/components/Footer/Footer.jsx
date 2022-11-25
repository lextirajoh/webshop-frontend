import React from 'react';
import styled from 'styled-components';
import mastodon from '../../assets/mastodon.png';
import pixelfed from '../../assets/pixelfed.png';
import peertube from '../../assets/peertube.png';

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
            Maandag: gesloten <br />
            Di-Vr: 10:00 - 20:00 <br />
            Zaterdag: 10:00 -18:00 <br />
            Zondag: 10:00 - 17:00
          </div>
          <Newsletter>
            {' '}
            <p>Abonneer op onze nieuwsbrief:</p>
            <input type="text" placeholder="Voer uw emailadres in.." />
            <Social>
              <a href="https://joinmastodon.org">
                <img src={mastodon} alt="Mastodon logo" />
              </a>
              <a href="https://pixelfed.org">
                <img src={pixelfed} alt="Pixelfed logo" />
              </a>
              <a href="https://joinpeertube.org/">
                <img src={peertube} alt="PeerTube logo" />
              </a>
            </Social>
          </Newsletter>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 2rem 0;
  width: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(4px);
  -o-backdrop-filter: blur(4px);
  -moz-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border-top: 3px solid gold;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  justify-content: space-around;
`;

const Name = styled.span`
  font-family: Brush Script MT;
  color: gold;
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
    height: 1.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`;
