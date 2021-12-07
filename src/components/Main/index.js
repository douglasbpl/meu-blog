import React from "react";
import * as S from "./styled";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";

export function Main() {

  return (
    <S.ContainerMain>
      <FirstSection />
      <SecondSection />      
    </S.ContainerMain>
  );
}