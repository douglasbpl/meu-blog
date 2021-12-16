import styled from 'styled-components';


export const ContainerHeader = styled.div`
display:flex;
width:100%;
min-height:10vh; 
`
export const ContainerMenu = styled.div`
width:100%;
background-color:#0b122e;
display:flex;

`
export const Menu = styled.nav`
display: flex;
align-items: center;
justify-content: space-evenly;
width:100%;
animation-name: lightSpeedIn;    
    animation-timing-function: ease-out;
     animation-duration: 1s;
     animation-fill-mode: both;    
    @keyframes lightSpeedIn {
        0% {
        transform: translate3d(100%, 0, 0) skewX(-30deg);
        opacity: 0;
        }
        60% {
        transform: skewX(20deg);
        opacity: 1;
        }
        80% {
        transform: skewX(-5deg);
        opacity: 1;
        }
        100% {
        transform: none;
        opacity: 1;
        }
    }   
                   
`
export const List = styled.ul`
display:flex;
    align-items:center;
    justify-content:space-around;
    width:80%;
    height:100%;    
    flex-wrap: wrap;
    list-style:none;
    padding:0;
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
@media (max-width: 425px){
    min-width:30vw;
} 
`
export const IMG = styled.img`
width:48px;
animation-name: swing;
transform-origin: top center;
origin: top center;
transform-origin: top center;        
animation-duration: 1.5s;        
animation-fill-mode: both;
animation-iteration-count: infinite;       
    @keyframes swing {
        20% {
        transform: rotate3d(0, 0, 1, 15deg);        
        }
        40% {
        transform: rotate3d(0, 0, 1, -10deg);        
        }
        60% {
        transform: rotate3d(0, 0, 1, 5deg);        
        }
        80% {
        transform: rotate3d(0, 0, 1, -5deg);        
        }
        100% {
        transform: rotate3d(0, 0, 1, 0deg);
        }
    } 
`
