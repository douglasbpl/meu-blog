import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './styled'

export function Curiosidades() {

    const data = useStaticQuery(graphql`
        query {
            alldata{                
                curiosidades {
                    bthome
                    btprojetos
                    btvermais
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
                }
            }
        }`)

    const { bthome, btprojetos, btvermais, curi, osidades, cozinhar, prgcozinhar, jogos, prgjogos, aluno, prgaluno, imgcozinhar, imgjogos, imgaluno } = data.alldata.curiosidades[0]

    return (
        <div>
            <S.ContainerMenuFixed>
                <S.MenuFixedPM>
                    <S.List>
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{bthome}</S.ListItem></Link>
                        <Link to="/prj" style={{ color: "white", textDecoration: "none" }}><S.ListItem>{btprojetos}</S.ListItem></Link>
                    </S.List>
                </S.MenuFixedPM>
            </S.ContainerMenuFixed>


            <S.ContainerSection>
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

        </div>
    );
}