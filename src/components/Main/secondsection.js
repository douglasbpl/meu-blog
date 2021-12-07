import React from "react";
import * as S from "./styled";
import MinhaFoto from "../../images/eupequeno.jpg"


export default function SecondSection() {

  return (
    <S.ContainerSecondSection id="Formação">
      <h2>Formação</h2>
      <div>
        <figure>
        <S.MyIMG src={MinhaFoto} alt="Formação" />
        </figure>
        <ul>
          <li><p>Formado em HTML5, CSS3, Lógica de Programação, JavaScript e ReactJS, no Programa Vai na Web.</p></li>
          <li><p>Formado em Redes de Computador , na Universidade Estácio de Sá.</p></li>
          <li><p>Formado em Operador de Computador, pelo SENAI.</p></li>
          <li><p>Formado em Assistente Administrativo, pelo SENAI.</p></li>
          <li><p>Formado em Eletricista de Manunetção Industrial, pelo SENAI.</p></li>
          <li><p>Formado em Informática Básica e Avançada, pela M Data.</p></li>        
        </ul>
      </div>      
    </S.ContainerSecondSection>
  )


}