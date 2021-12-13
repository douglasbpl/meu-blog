import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'


export function Footer() {

  const data = useStaticQuery(graphql`
      query {
        alldata{
          footers {
            btmenu
            bthome
            btsobre
            btform
            btcrd
            btprj
            btcontatos
            btfacebook
            btinstagram
            btgithub
            btlinkedin
            layoutfootertxt
          }
        }
      }
      `)

  const { btfacebook, btinstagram, btgithub, btlinkedin, layoutfootertxt } = data.alldata.footers[0];

  return (

    <S.ContainerFooter id="Footer">
      <S.BoxsocialNetwork>
        <ul>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{btfacebook}</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{btinstagram}</a></li>
          <li><a href="https://github.com/douglasbpl/" target="_blank" rel="noreferrer">{btgithub}</a></li>
          <li><a href="https://www.linkedin.com/in/douglas-brasil-pereira-lopes-614099108/" target="_blank" rel="noreferrer">{btlinkedin}</a></li>
        </ul>
      </S.BoxsocialNetwork>
      <S.CopyRight>
        <div>
          <p>{layoutfootertxt}</p>
        </div>
      </S.CopyRight>
    </S.ContainerFooter>
  )
}

