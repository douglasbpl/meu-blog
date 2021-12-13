import styled from 'styled-components';


export const ContainerHeader = styled.div`
display:flex;
width:100%;
min-height:10vh;
`
export const ContainerMenuFixed = styled.div`
width:100%;
background-color:#0b122e;
display:flex;

`
export const MenuFixed = styled.nav`
display: flex;
align-items: center;
justify-content: space-evenly;
width:100%;                     
`
export const List = styled.ul`
display:flex;
    align-items:center;
    justify-content:space-around;
    width:50%;
    height:100%;    
    flex-wrap: wrap;
    list-style:none;
    font-size:1.3rem;
    @media (max-width: 768px) {
        width:80%;
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
export const IMG = styled.img`
width:50px;`
