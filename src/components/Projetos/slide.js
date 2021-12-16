import React from 'react'
import Carousel from 'nuka-carousel'
import * as S from './styled'
import { graphql, useStaticQuery } from 'gatsby'


export default function SimpleSlider() {

  const settings = {
    enableKeyboardControls: true,
    enableMouseSwipe: true,
    enableTouch: true,
    heightMode: 'current',
    initialSlideHeight: 300,
    initialSlideWidth: 300,
    slideIndex: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swiping: true,
    transitionMode: 'scroll',
    widthMode: 'current',
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 3000,
    pauseOnHover: true,
  }


  const data = useStaticQuery(graphql`
        query {
            alldata{               
              projetos {
                bthome
                btsobre    
                ttlprj
                mprojetos
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

  const { mod1, mod2, mod3, } = data.alldata.projetos[0]

  const prj = data.alldata.projetos[0]

  const dataprj = [
    { img: prj.beat.url },
    { img: prj.boaspraticas.url },
    { img: prj.finn.url },
    { img: prj.thewitcher.url },
    { img: prj.crespos.url, link: 'https://competent-austin-f7943f.netlify.app/' },
    { img: prj.calculadora.url, link: 'https://i3v0s.csb.app/ ' },
    { img: prj.contador.url, link: 'https://bc4hh.csb.app/' },
    { img: prj.toDo.url, link: 'https://ylygx.csb.app/' },
    { img: prj.filmeseseries.url, link: 'https://6y3zk.csb.app/movies' },
    { img: prj.lojadecarros.url, link:'https://projetofinalmod2.netlify.app/'},
    { img: prj.recipes.url, link:'https://recipes-desafio.netlify.app' },
    { img: prj.taxi.url, link:'https://desafio-taxi.netlify.app' },
    { img: prj.strytegy.url, link:'https://desafio-landing-strytegy.netlify.app' },
    { img: prj.harrypotter.url, link:'https://hp-db.netlify.app' },
    { img: prj.pokemonunite.url, link:'https://dazzling-boyd-0942a0.netlify.app' },
  ]

  return (

    <S.ContainerInto>
      <S.Card>
        <h2>{mod1}</h2>
        <Carousel {...settings}>
          {dataprj.slice(0, 5).map((mod1, index) => (
            <div key={index}>
              <a href={mod1.link} target="_blank" rel="noreferrer"><img src={mod1.img} alt="Miniatura do Projeto" /></a>
            </div>
          ))}
        </Carousel>
      </S.Card>

      <S.Card>
        <h2>{mod2}</h2>
        <Carousel {...settings}>
          {dataprj.slice(5, 10).map((mod2, index) => (
            <div key={index}>
              <a href={mod2.link} target="_blank" rel="noreferrer"><img src={mod2.img} alt="Miniatura do Projeto" /></a>
            </div>
          ))}
        </Carousel>
      </S.Card>

      <S.Card>
        <h2>{mod3}</h2>
        <Carousel {...settings}>
          {dataprj.slice(10, 15).map((mod3, index) => (
            <div key={index}>
              <a href={mod3.link} target="_blank" rel="noreferrer" ><img src={mod3.img} alt="Miniatura do Projeto" /></a>
            </div>
          ))}
        </Carousel>
      </S.Card>

    </S.ContainerInto>

  )
}