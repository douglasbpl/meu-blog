import React from 'react'
import Carousel from 'nuka-carousel'
import * as S from './styled'
import { graphql, useStaticQuery } from 'gatsby'


export default function SimpleSlider() {

  const settings = {
    enableKeyboardControls : true,
    enableMouseSwipe : true,
    enableTouch : true,
    heightMode : 'current',
    initialSlideHeight : 300,
    initialSlideWidth : 300,
    slideIndex : 0,
    slidesToShow : 1,
    slidesToScroll : 1,
    speed : 500,
    swiping : true,
    transitionMode : 'scroll',
    widthMode : 'current',
    wrapAround : true,
    autoplay : true,
    autoplayInterval : 3000,
    pauseOnHover : true,    
  }
    

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

  const { mod1, mod2, mod3, } = data.alldata.projetos[0]

  const prj = data.alldata.projetos[0]

  const dataprj = [
    { img: prj.beat.url },
    { img: prj.boaspraticas.url },
    { img: prj.finn.url },
    { img: prj.thewitcher.url },
    { img: prj.crespos.url },
    { img: prj.calculadora.url },
    { img: prj.contador.url },
    { img: prj.toDo.url },
    { img: prj.filmeseseries.url },
    { img: prj.lojadecarros.url },
    { img: prj.recipes.url },
    { img: prj.taxi.url },
    { img: prj.strytegy.url },
    { img: prj.harrypotter.url },
    { img: prj.pokemonunite.url },
  ]





  return (

    <S.ContainerInto>
      <S.Card>
        <h2>{mod1}</h2>
        <Carousel {...settings}>
          {dataprj.slice(0, 5).map((mod1, index) => (            
              <div key={index}>
                <img src={mod1.img} alt="Miniatura do Projeto" />
              </div>
          ))}
        </Carousel>
      </S.Card>

      <S.Card>
        <h2>{mod2}</h2>
        <Carousel {...settings}>
          {dataprj.slice(5, 10).map((mod2, index) => (            
              <div key={index}>
                <img src={mod2.img} alt="Miniatura do Projeto" />
              </div>
          ))}
        </Carousel>
      </S.Card>

      <S.Card>
        <h2>{mod3}</h2>
        <Carousel {...settings}>
          {dataprj.slice(10, 14).map((mod3, index) => (            
              <div key={index}>
                <img src={mod3.img} alt="Miniatura do Projeto" />
              </div>
          ))}
        </Carousel>
      </S.Card>    
      
      </S.ContainerInto>
      

  )
}