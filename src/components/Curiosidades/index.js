import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styled'
import Formacao from "./formacao"


export function Curiosidades() {

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

    const { bthome, btsobre, btcontatos, btformacao, btcuriosidades, btredessociais, btprojetos, btvermais, curi, osidades, cozinhar, prgcozinhar, jogos, prgjogos, aluno, prgaluno, imgcozinhar, imgjogos, imgaluno, minhafoto, mchamo, msonho } = data.alldata.curiosidades[0]

    return (
        <S.Container>
            <S.ContainerMenuFixed>
                <S.MenuFixedPM>
                    <S.List>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{bthome}</S.ListItem></Link>
                        <Link to="/pjt" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btprojetos}</S.ListItem></Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/contatos"><S.ListItem>{btcontatos}</S.ListItem></Link>
                        <Link style={{ color: "white", textDecoration: "none" }} to="/crd"><S.ListItem>{btsobre}</S.ListItem></Link>
                        <Link to="#Formação" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btformacao}</S.ListItem></Link>
                        <Link to="#Curiosidades" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btcuriosidades}</S.ListItem></Link>
                        <Link to="#Footer" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btredessociais}</S.ListItem></Link>
                    </S.List>
                </S.MenuFixedPM>
            </S.ContainerMenuFixed>

            <S.BoxAbout id="Sobre">

                <S.BoxTxtLeft>
                    <p>{mchamo}</p>
                </S.BoxTxtLeft >
                <S.MyPhoto src={minhafoto.url} alt="Minha Foto" />
                <S.BoxTxtRight>
                    <p>{msonho}</p>
                </S.BoxTxtRight>
            </S.BoxAbout>

            <Formacao id="Formação" />

            <S.ContainerSection id="Curiosidades">
                <S.TittleSecoSection >{curi}<S.SpUloax>{osidades}</S.SpUloax> </S.TittleSecoSection>
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

            </S.ContainerSection>

        </S.Container>
    );
}