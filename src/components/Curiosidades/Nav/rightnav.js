import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import { graphql, useStaticQuery } from 'gatsby'




const RightNav = ({ open }) => {
  const data = useStaticQuery(graphql`
        query {
            alldata{                
                curiosidades {
                    bthome
                    btprojetos
                    btsobre
                    btcontatos
                    btformacao
                    btcuriosidades
                    btredessociais                    
                }
            }
        }`)

    const { bthome, btsobre, btcontatos, btformacao, btcuriosidades, btredessociais, btprojetos } = data.alldata.curiosidades[0]


  return (
    <S.Ul open={open}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}><li>{bthome}</li></Link>
                        <Link to="/pjt" style={{ color: "white", textDecoration: "none" }}><li>{btprojetos}</li></Link>
                        <Link to="/contatos" style={{ color: "white", textDecoration: "none" }}><li>{btcontatos}</li></Link>
                        <Link to="/crd" style={{ color: "white", textDecoration: "none" }}><li>{btsobre}</li></Link>
                        <Link to="#Formação" style={{ color: "white", textDecoration: "none" }}><li>{btformacao}</li></Link>
                        <Link to="#Curiosidades" style={{ color: "white", textDecoration: "none" }}><li>{btcuriosidades}</li></Link>
                        <Link to="#Footer" style={{ color: "white", textDecoration: "none" }}><li>{btredessociais}</li></Link>
      </S.Ul>
  )
}
export default RightNav