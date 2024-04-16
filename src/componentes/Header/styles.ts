import styled from 'styled-components';

export const HeaderBackground = styled.div`
  background: url('assets/imagens/initialwall2.png') repeat;
  background-size: contain;
  background-position: 100% 100%;
  box-shadow: inset -30px 380px 400px 200px var(--bg900);
`;

interface IHeadingStyled {
  showComponent: boolean;
}

export const TitleBackground = styled('div') <IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
    z-index: 1;
    position: relative;
  background-color: var(--bg900);
  height: 12rem;
  `}
`;

export const ImagemFundo = styled.img`
  width: 20%;
  position: absolute;
  right: 0;
  margin-right: 0;
`;

export const ImagemFundoText = styled.p`
  width: 50%;
  position: absolute;
  color: white;
  right: 3%;
  margin-top: 4%;
  text-align: right;
  font-size: 35px;
  margin-right: 0;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    width: 95%;
    margin-top: 40%;
    text-align: center;
  }
`;

interface IHeadingStyled {
  showComponent: boolean;
}
export const BiggerHeader = styled('div') <IHeadingStyled>`
  ${(props) =>
    props.showComponent &&
    `
height: 155vh;
margin-top: -15%;
background-color: inherit;
background-image: url("assets/imagens/initialAlert.png");
background-position: 50%;
background-size: contain;
background-repeat: no-repeat;
-webkit-transition: webkit-transform 2s;
animation: transform 3s linear infinite;

@keyframes transform {
  0% {
    transform: translateY(-7rem);
  }
  50% {
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(-7rem);
  }
}
`}
`;
export const Title = styled('div') <IHeadingStyled>`
  @font-face {
    font-family: 'MinhaFonte';
    src: url('../../assets/fonts/KindlyRewind-BOon.ttf') format('truetype');
  }

  ${(props) =>
    props.showComponent &&
    `
  width: 50%;
  height: 12rem;
  font-family: 'MinhaFonte', sans-serif;
  // background-image: url("assets/imagens/titletrans2.png");
  background-repeat: no-repeat;
  background-position: 12% 70%;
`}

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    background-size: 50%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(5rad, var(--bg900), #d41d24, var(--bg900));

  @media (max-width: 400px) {
    float: left;
  }
`;
