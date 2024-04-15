import React, { useState } from 'react';
const img = './assets/imagens/sangue33.png';
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
  ImagemFundo,
  ImagemFundoText,
} from './styles';
import Navbar from '../Navbar';
import { Typography } from '@material-ui/core';

const Header = (props) => {
  const [showBiggerHeader, setshowBiggerHeaderd] = useState(false);
  const [showNormalHeader, setShowNormalHeader] = useState(true);

  function handleBiggerHeader() {
    setshowBiggerHeaderd(!showBiggerHeader);
    setShowNormalHeader(true);
  }

  return (
    <HeaderBackground>
      <TitleBackground showComponent={showNormalHeader}>
        {showNormalHeader && (
          <>
            {/* <ImagemFundo src={img} alt="imagem_de_sangue_escorrendo" /> */}
            <ImagemFundoText>
              Suas estreias de filmes de terror no Brasil{' '}
            </ImagemFundoText>
          </>
        )}

        <Title showComponent={showNormalHeader}>
          <Typography
            style={{ color: 'white', fontFamily: 'MinhaFonte', fontSize: 50 }}
          >
          &#9205;VHS 180
          </Typography>
        </Title>
        <BiggerHeader
          onClick={() => handleBiggerHeader()}
          showComponent={showBiggerHeader}
        ></BiggerHeader>
        <Menu>
          <Navbar />
        </Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;
