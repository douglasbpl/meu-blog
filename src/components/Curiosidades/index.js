import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styled'
import Formacao from "./formacao"
import Navbar from '../Curiosidades/Nav/navbar'


export function Curiosidades() {

    const data = useStaticQuery(graphql`
        query {
            alldata{                
                curiosidades {
                    logoheader{
                        url
                      }
                    bthome
                    btprojetos
                    btsobre
                    btcontatos
                    btformacao
                    btcuriosidades
                    btredessociais
                    btvermais
                    mchamo
                    msonho
                    curi
                    osidades
                    cozinhar
                    prgcozinhar
                    jogos
                    prgjogos
                    aluno
                    prgaluno
                    imgcozinhar{
                      url
                    }
                    imgjogos{
                      url
                    }
                    imgaluno{
                      url
                    }
                    minhafoto{
                        url
                      }
                }
            }
        }`)

    const { logoheader,bthome, btsobre, btcontatos, btformacao, btcuriosidades, btredessociais, btprojetos, btvermais, curi, osidades, cozinhar, prgcozinhar, jogos, prgjogos, aluno, prgaluno, imgcozinhar, imgjogos, imgaluno, minhafoto, mchamo, msonho } = data.alldata.curiosidades[0]

    return (
        <S.Container>
            <S.ContainerMenuFixed>
                <S.MenuFixed>
                <S.IMG src={logoheader.url} alt="Minha foto em desenho" />
                    <S.List>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{bthome}</S.ListItem></Link>
                        <Link to="/pjt" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btprojetos}</S.ListItem></Link>
                        <Link to="/contatos" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btcontatos}</S.ListItem></Link>
                        <Link to="/crd" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btsobre}</S.ListItem></Link>
                        <Link to="#Formação" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btformacao}</S.ListItem></Link>
                        <Link to="#Curiosidades" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btcuriosidades}</S.ListItem></Link>
                        <Link to="#Footer" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btredessociais}</S.ListItem></Link>
                    </S.List>
                    <Navbar/> 
                </S.MenuFixed>
            </S.ContainerMenuFixed>

            <S.BoxAbout id="Sobre">
                <S.BoxTxtFirst>
                    <p>{mchamo}</p>
                </S.BoxTxtFirst>
                <S.MyPhoto src={minhafoto.url} alt="Minha Foto" />
                <S.BoxTxtSecond>
                    <p>{msonho}</p>
                </S.BoxTxtSecond>
            </S.BoxAbout>

            <Formacao id="Formação" />

            <S.ContainerCuriosities id="Curiosidades">
                <S.TittlePOne >{curi}<S.TittlePtwo >{osidades}</S.TittlePtwo> </S.TittlePOne>
                <S.IntoSectionleft>
                    <figure><img src={imgcozinhar.url} alt="Foto da minha Torta de Frango" /></figure>
                    <div>
                        <h2>{cozinhar}</h2>
                        <p>{prgcozinhar}</p>
                        <button>{btvermais}</button>
                    </div>
                </S.IntoSectionleft>
                <S.IntoSectionRight>
                    <div>
                        <h2>{jogos}</h2>
                        <p>{prgjogos}</p>
                        <button>{btvermais}</button>
                    </div>
                    <figure><img src={imgjogos.url} alt="Foto Vencendo um torneio" /></figure>
                </S.IntoSectionRight>
                <S.IntoSectionleft>
                    <figure><img src={imgaluno.url} alt="Merito escolar" /></figure>
                    <div>
                        <h2>{aluno}</h2>
                        <p>{prgaluno}</p>
                        <button>{btvermais}</button>
                    </div>
                </S.IntoSectionleft>
            </S.ContainerCuriosities>
        </S.Container>
    );
}