import React from 'react'
import * as S from './styled'
import SimpleSlider from "./slide"
import { graphql, useStaticQuery } from 'gatsby'



export function Projetos() {

  const data = useStaticQuery(graphql`
  query {
    alldata{               
      projetos {
         mprojetos     
      }
    }
}
`)

  const { mprojetos } = data.alldata.projetos[0]
  return (
    <S.Container>
      <div>
        <h1>{mprojetos}</h1>
      </div>
      <S.ContainerSlide>
        <SimpleSlider />
      </S.ContainerSlide>
    </S.Container >
  )
}