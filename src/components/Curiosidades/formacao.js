import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'

export default function Formacao() {

  const data = useStaticQuery(graphql`
  query {
    alldata{
      mainSecoSections{
        formacao        
        formado2
        formado3
        formado4
        formado5
        formado6
        minhafotopequeno{
          url
        }
      }
    }
  }
  `)

  const { formacao, formado2, formado3, formado4, formado5, formado6, minhafotopequeno } = data.alldata.mainSecoSections[0]


  return (
    <S.ContainerFormation id="Formação">
      <h2>{formacao}</h2>
      <div>
        <figure>
        <S.MyIMG src={minhafotopequeno.url} alt="Minha foto pequeno" />
        </figure>
        <ul>
          <li><p>{formado2}</p></li>
          <li><p>{formado3}</p></li>
          <li><p>{formado4}</p></li>
          <li><p>{formado5}</p></li>
          <li><p>{formado6}</p></li>        
        </ul>
      </div>      
    </S.ContainerFormation>
  )


}