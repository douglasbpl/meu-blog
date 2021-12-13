import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'


export function Main() {

  const data = useStaticQuery(graphql`
  query {
    alldata{
      mainFiSections {
        minhafoto {
          url
        }
        ttl
        paragraph
      }
    }
  }
  `)

  const { minhafoto, ttl, paragraph } = data.alldata.mainFiSections[0]

  return (
    <S.ContainerMain>
      <S.ContainerFIrstSection id="Sobre">
        <S.ContainerInterno>
          <S.About>
            <h1>{ttl}</h1>
            <p>{paragraph}</p>
          </S.About>
          <figure>
            <S.MyIMG src={minhafoto.url} alt="minha foto atual" />
          </figure>
        </S.ContainerInterno>
      </S.ContainerFIrstSection>
    </S.ContainerMain>
  );
}