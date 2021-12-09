import React from 'react'
import { Link } from 'gatsby'
import * as S from './styled'
import SimpleSlider from "./slide"
import { graphql, useStaticQuery } from 'gatsby'


export function Projetos() {
  const data = useStaticQuery(graphql`
  query {
    alldata{               
          projetos {
            bthome
            btcrd
            ttlprj                    
            mod1
            beat{
              url
            }
            boaspraticas{
              url
            }
            finn{
              url
            }
            thewitcher{
              url
            }
            crespos{
              url
            }
            mod2
            calculadora{
              url
            }
            contador{
              url
            }
            toDo{
              url
            }
            filmeseseries{
              url
            }
            lojadecarros{
              url
            }
            mod3
            recipes{
              url
            }
            taxi{
              url
            }
            strytegy{
              url
            }
            harrypotter{
              url
            }
            pokemonunite{
              url
            }
            btveronline
          }
    }
}
`)

  const { bthome, btcrd } = data.alldata.projetos[0]
  return (
    <div>

      <S.Container>
        <S.ContainerMenuFixed>
          <S.MenuFixedPM>
            <S.List>
              <Link style={{ color: "white", textDecoration: "none" }} to="/"><S.ListItem>{bthome}</S.ListItem></Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="/crd"><S.ListItem>{btcrd}</S.ListItem></Link>
            </S.List>
          </S.MenuFixedPM>
        </S.ContainerMenuFixed>

        <S.ContainerSlide>
          <SimpleSlider />
        </S.ContainerSlide>
      </S.Container >
    </div>
  )
}