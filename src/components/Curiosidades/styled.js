import styled from 'styled-components';


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
height:10vh;
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
export const ContainerSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
padding-bottom:2rem;
`

export const TittleSecoSection = styled.h2`
text-align:center;
font-size:50px;
padding-top:50px;
color:blue;
`

export const SpUloax = styled.span`
color:green;
&::after{
    content:'';
    width:245px;
    height:2px;
    background-color:black;
    display:block;
    margin-top:10px;
    position:relative;
    left:20px;
    
}
`

export const IntoSectionleft = styled.div`
display:flex;
width:50%;
justify-content:center;
 
@media (min-width: 768px) {
    width:80%;
}

div {
display:flex;
flex-direction:column;
justify-content:space-evenly;
width:40%;
text-align:left;
height:33vh;        
}

div > h2 {
    color: white;
    font-size:30px;
}
div > p {
    color: orange;
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

div > button:hover {
    background-color: black;    
}
img{
    width: 343px;
    height: 279px;

}
`


export const IntoSectionRight = styled.div`
display:flex;
width:50%;
justify-content:center;
@media (min-width: 768px) {
    width:80%;
}


div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
        width:40%;
    text-align:right;
    height:33vh;    
}
div > h2 {
    color: white;
    font-size:30px;
}
div > p {
    color: orange;
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

div > button:hover {
    background-color: black;
    
}

img{
    width: 343px;
    height: 279px;

}
`