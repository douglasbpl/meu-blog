import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;       
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
        width: 80%;        
        align-items: center;
        justify-content: center;
`

export const Card = styled.div`
    width: 40%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
img{
    width: 100%;
    height: 490px;
    border-radius: 10px;
} `
