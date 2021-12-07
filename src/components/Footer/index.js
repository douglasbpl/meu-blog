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
  
   const { btmenu, bthome, btsobre, btform, btcrd, btprj, btcontatos, btfacebook, btinstagram, btgithub, btlinkedin, layoutfootertxt } = data.alldata.footers[0];
   
  return (

    <S.ContainerFooter id="Contatos">
      <S.Container>
        {/* <S.BoxMenuFSection>
          <div>
            <h3>{btmenu}</h3>
            <ul>
            <li><Link to="/#Home">{bthome}</Link></li>
            <li><Link to="/#">{btsobre}</Link></li>
            <li><Link to="#">{btform}</Link></li>
            </ul>
          </div>
          <div >
            <h3>{btmenu}</h3>
            <ul>
              <li><Link to="/crd">{btcrd}</Link></li>
              <li><Link to="/prj">{btprj}</Link></li>
              <li><Link to="#Contatos">{btcontatos}</Link></li>                
            </ul>
          </div>

        </S.BoxMenuFSection> */}
      </S.Container>
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

