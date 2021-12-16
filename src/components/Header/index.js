import React from "react";
import * as S from "./styled";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'



export function Header() {

  const data = useStaticQuery(graphql`
    query {
      alldata{
        headers {
          logoheader {
            url
          }
          bthome
          btsobre
          btform
          btcrd
          btprj
          btcontatos
        }
      }
    }
    `)

  const { logoheader, bthome, btsobre, btprj, btcontatos } = data.alldata.headers[0];

  return (
    <S.ContainerHeader id="Home">
      <S.ContainerMenu>
        <S.Menu>
          <S.IMG src={logoheader.url} alt="Minha foto em desenho" />
          <S.List>
            <Link style={{ color: "white", textDecoration: "none" }} to="/"><S.ListItem>{bthome}</S.ListItem></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/crd"><S.ListItem>{btsobre}</S.ListItem></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/pjt"><S.ListItem>{btprj}</S.ListItem></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/contatos"><S.ListItem>{btcontatos}</S.ListItem></Link>
          </S.List>
        </S.Menu>
      </S.ContainerMenu>
    </S.ContainerHeader>
  );
}  