import React from "react";

import * as S from "./style";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <S.NavWrapper>
      <Link to={"/"}>홈</Link>
      <Link to={"/about"}>우리가 누구게</Link>
    </S.NavWrapper>
  );
};

export default Nav;
