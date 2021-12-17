import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;;    
    width: 100%;
    color: #fff;     
    `
export const ContainerMenuFixed = styled.div`
width:100%;
background-color:#0b122e;
display:flex;
align-items:center;
justify-content:center;
position:fixed;
top:0;
left:0;
z-index:999;
@media (max-width: 425px) {
    position:relative;
}    
`
export const IMG = styled.img`
width:48px;

`

export const MenuFixed = styled.nav`
display:flex;
align-items:center;
justify-content:space-around;
width:100%;
min-height:10vh;
@media (max-width: 425px) {
    display:flex;
align-items:center;
justify-content:center;
width:66%;
}
`

export const List = styled.ul`
display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:100%;
    padding:0;    
    flex-wrap: wrap;
    list-style:none;
    font-size:1.3rem;
    @media (max-width: 425px) {
        display:none;
    }    
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
export const BoxAbout = styled.section`
display:flex;
align-items:center;
justify-content: space-evenly;
width:100%;
flex-wrap: wrap;
::after {
    content: "";
    width: 100%;
    height: 5vh;
    background-color: rgb(230, 230, 230);
    margin-top: 10px;
} 
padding-top:10vh; 
@media (max-width: 425px){
padding-top:0;}
     
`
export const MyPhoto = styled.img`
border-radius: 10% ;
height:400;           
width: 350px;
@media (max-width: 320px) {        
        width: 300px;
        height: 300px;
    }
}
`
export const BoxTxtFirst = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;     
    border-radius: 10% ;            
    p{      
        font-size:25px;        
        text-align:center;   
    }
    @media (max-width: 425px) {
        p{
            font-size:18px;
        }   
        `
    
 export const BoxTxtSecond = styled.div`
 display:flex;
    justify-content:center;
    align-items:center;   
        p{                      
        font-size:25px;        
        text-align:center;        
        }
    @media (max-width: 425px) {
        p{
            font-size:18px;
        }
    `
 
export const ContainerFormation = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100%;
padding-top:10vh;
::after {
    content: "";
    width: 100%;
    height: 5vh;
    background-color: rgb(230, 230, 230);
    margin-top: 10px;
} 
@media (max-width: 425px){
    padding-top:0;}
div{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;       
}
h2{
    color: white;
    font-size: 30px;
    
}
figure{
    display: flex;
    flex-direction: column;
    max-height: 55vh;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}  
ul{
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: center;
    list-style: none;
    padding: 0;
    
}
li{
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
}
@media (max-width: 1024px) {  
    ul{
        text-align: center;
    }
`

export const MyIMG = styled.img`
border-radius: 50% 50% 50% 50% / 30% 26% 74% 70% ;
width: 100%;
`


export const ContainerCuriosities  = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-around;
width:100%;
padding-bottom:2rem;
padding-top:3vh;
@media (max-width: 425px){
    padding-top:0;}
     
}
`

export const TittlePOne = styled.h2`
text-align:center;
font-size:50px;
padding-top:50px;
color:blue;
`

export const TittlePtwo = styled.span`
color:green;
&::after{
    content:'';
    width:100%;
    height:2px;
    background-color:black;
    display:block;
    margin-top:10px;
    position:relative;
    left:3px;    
}
`

export const IntoSectionleft = styled.div`
display:flex;
width:100%;
justify-content:center;
flex-wrap:wrap;
padding-bottom:2rem; 
figure{
    order:1;
}
div {
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items: flex-start;
width:40%;
text-align:left;
order:2;        
}
@media (max-width: 768px) {        
    div{
        width:100%;
        text-align:center;
    }
}
div > h2 {
    color: white;
    font-size:30px;
    align-self: left;
    
}
@media (max-width: 768px) {
    h2{
        align-self: center;
    }
}
div > p {
    color: white;
    font-size:16px;
}
div > button {
    background-color:#f4db31;
    color:white;
    font-size:16px;
    border:none;
    padding:10px;
    border-radius:5px;
    width:120px;
    height:6vh;
    align-self:start;
    cursor:pointer;
}
@media (max-width: 768px) {
    div > button {
        width:50%;
        height:6vh;
        align-self:center;
    }
}
div > button:hover {
    background-color: black;    
}
img{
    border-radius: 10%;
    width: 400px;
    height: 350px;
}
@media (max-width: 375px) {
    img{
        width: 300px;
        height: 300px;
    }
}
`


export const IntoSectionRight = styled.div`
display:flex;
width:100%;
justify-content:center;
padding-bottom:2rem;
flex-wrap:wrap;
figure{
    order:2;
}
@media (max-width: 768px) {        
    figure{
        order:1;
    }
}
div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
        width:40%;
    text-align:right;    
    order:1;    
}
@media (max-width: 768px) {        
    div{
        order:2;
        width:100%;
        text-align:center;
    }
}
div > h2 {
    color: white;
    font-size:30px;
    
}
div > p {
    color: white;
    font-size:16px;
}
div > button {
    background-color:#f4db31;
    color:white;
    font-size:16px;
    border:none;
    padding:10px;
    border-radius:5px;
    width:120px;
    height:6vh;
    align-self:flex-end;
    cursor:pointer;
   
}
@media (max-width: 768px) {
    div > button {
        width:50%;
        height:6vh;
        align-self:center;
    }
}
div > button:hover {
    background-color: black;
    
}
img{
    border-radius: 10%;
    width: 400px;
    height: 350px;
}
@media (max-width: 375px) {
    img{
        width: 300px;
        height: 300px;
    }
}
`