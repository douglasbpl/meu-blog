import React from 'react';
import { GlobalStyle } from ".././components/Global Style/styled";
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
// import Darkmode from '../components/Darkmode/darkmode';




export default function Index() {

  return (
    <div>
      <Helmet>
      <title>Meu BLog</title>
      </Helmet>
      <GlobalStyle />     
      <Header />
      <Main />
      <Footer />
    </div>
  )
}