import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    h1{
        font-size: 2.5rem;
        font-weight: bold;
        
    }       
`

export const ContainerSlide = styled.div`
display: flex;
  align-items: center;
  justify-content: center; 
    width: 100%;  
`
export const ContainerMenuFixed = styled.div`
width:100%;
background-color:#0b122e;
display:flex;
align-items:center;
justify-content:center;
`
export const MenuFixedPM = styled.nav`
display:flex;
align-items:center;
justify-content:space-evenly;
width:100%;
`

export const List = styled.ul`
display:flex;
    align-items:center;
    justify-content:space-around;
    width:85%;
    height:100%;    
    flex-wrap: wrap;
    list-style:none;
    font-size:1.3rem;
`

export const ListItem = styled.li`
display:flex;
    align-items:center;
    justify-content:center;
    border-radius:3%;
    min-width:10vw;
    height:5vh;
&:hover{ 
    background-color: #24ada5;
    color:gold;    
}
`

export const ContainerInto = styled.div`
        display: flex;
        flex-wrap: wrap;        
        width: 90%;        
        align-items: center;
        justify-content: center;
`

export const Card = styled.div`
    width: 45%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    animation-name: zoomInDown;
animation-duration: 1s;
animation-fill-mode: both;
    @keyframes zoomInDown {
        0% {
        opacity: 0;
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
        opacity: 1;
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }
    }
    &:hover{  
        animation-name: rubberBand;
        animation-duration: 1s;
        animation-fill-mode: both;
        }
        @keyframes rubberBand {
        0% {
        transform: scale3d(1, 1, 1);
        }
        30% {
        transform: scale3d(1.25, 0.75, 1);
        }
        40% {
        transform: scale3d(0.75, 1.25, 1);
        }
        50% {
        transform: scale3d(1.15, 0.85, 1);
        }
        65% {
        transform: scale3d(.95, 1.05, 1);
        }
        75% {
        transform: scale3d(1.05, .95, 1);
        }
        100% {
        transform: scale3d(1, 1, 1);
        }
      }    
img{
    width: 100%;
    height: 490px;
    border-radius: 10px;
}
@media (max-width: 768px) {
    width: 90%;
}
@media (max-width: 425px) {
    width: 100%;
    img{
        height: 300px;
    }
`
