import React from 'react';
import { Curiosidades } from "../components/Curiosidades";
import { Helmet } from 'react-helmet';
import { GlobalStyle } from ".././components/Global Style/styled";
import { Footer } from '../components/Footer';


export default function Crd() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
       <title>Meu BLog</title>
      </Helmet>
      <Curiosidades/>
      <Footer/>
    </div>
  )
}