import React from 'react'
import * as S from './styled'
import { graphql, useStaticQuery } from 'gatsby'


export function Ctt() {
  const data = useStaticQuery(graphql`
  query {
    alldata{
      contatos {
        tcontato
        pcontato
        btenviar
      }
    }
  }
  `)
  const { tcontato, pcontato, btenviar } = data.alldata.contatos[0]

  return (
    <div>
      <S.ContainerContatos>
        <h1>{tcontato}</h1>
        <p>{pcontato}</p>
        <S.Form>
          <S.Input type="text" placeholder="Nome" />
          <S.Input type="email" placeholder="E-mail" />
          <S.Input type="text" placeholder="Assunto" />
          <S.Textarea placeholder="Mensagem" />
          <S.Button type="submit">{btenviar}</S.Button>
        </S.Form>
      </S.ContainerContatos>
    </div>
  );
}

