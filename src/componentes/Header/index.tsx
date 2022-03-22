import React, { useState, useEffect } from "react";
import {
  Title,
  HeaderBackground,
  BiggerHeader,
  Menu,
  TitleBackground,
} from "./styles";
import Navbar from "../Navbar";

const Header = (props) => {
  const [showBiggerHeader, setshowBiggerHeaderd] = useState(true);
  const [showNormalHeader, setShowNormalHeader] = useState(false);

  // function handleScroll() {
  //   if (document.documentElement.scrollTop > 8) {
  //     setshowBiggerHeaderd(false);
  //     setShowNormalHeader(true);
  //   }
  // }

  function handleBiggerHeader() {
    setshowBiggerHeaderd(false);
    setShowNormalHeader(true);
  }

  // useEffect(() => {
  //   window.onclick = () => handleScroll();
  // }, []);

  if (!props.isIndex) {
    return (
      <TitleBackground showComponent={true}>
        <Title showComponent={true}></Title>
        <Menu>
          <Navbar></Navbar>
        </Menu>
      </TitleBackground>
    );
  }

  return (
    <HeaderBackground>
      <TitleBackground showComponent={showNormalHeader}>
        <Title showComponent={showNormalHeader}></Title>
        <BiggerHeader
          onClick={() => handleBiggerHeader()}
          showComponent={showBiggerHeader}
        ></BiggerHeader>
        <Menu>
          <Navbar></Navbar>
        </Menu>
      </TitleBackground>
    </HeaderBackground>
  );
};

export default Header;
