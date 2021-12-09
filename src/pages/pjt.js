import React from "react";
import { Projetos } from "../components/Projetos";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "../components/Global Style/styled";
import { Footer } from "../components/Footer";




export default function Prj() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
       <title>Um pouco sobre mim</title>
      </Helmet>
      <Projetos/>
      <Footer/>       
    </div>
  )
}