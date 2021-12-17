import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import { graphql, useStaticQuery } from 'gatsby'




const RightNav = ({ open }) => {
  const data = useStaticQuery(graphql`
    query {
      alldata{
        headers {          
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

    const {  bthome, btsobre, btprj, btcontatos } = data.alldata.headers[0];


  return (
    <S.Ul open={open}>
      <Link style={{ color: "white", textDecoration: "none" }} to="/"><li>{bthome}</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/crd"><li>{btsobre}</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/pjt"><li>{btprj}</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/contatos"><li>{btcontatos}</li></Link>
      </S.Ul>
  )
}
export default RightNav