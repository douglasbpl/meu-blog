import React from "react";
import { GlobalStyle } from "../components/Global Style/styled";
import { Helmet } from "react-helmet"
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";


export default function Index() {

  return (
    <div>
      <Helmet>
        <title>Um pouco sobre mim</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}