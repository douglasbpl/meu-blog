import styled from 'styled-components';


export const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
background-color:#0b122e;
color: #fff;
width: 100%;
max-height: 15vh;
// background-color: #2d3246;
font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
text-transform: uppercase;
@media (max-width: 320px) {
  font-size: 11px;
}


`

export const Container = styled.div`
display:flex;
width: 100%;
justify-content: center;
align-items: center;
`

export const BoxMenuFSection = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;    
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid green;
    border-top: 3px solid green;
    width: 50%; 
  }
  div:hover{
    background-color: #24ada5;
  }
  ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;  
  }
  li{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;  
  }
  a{
    text-decoration:none;
    color:white;
}
a:hover{
    color:gold;
}
  h3 {
    font-size: 25px;
  }
`

export const BoxsocialNetwork = styled.div`
width: 100%;
  ul{
  display: flex;
  width: 100%;    
  list-style: none;
  padding: 0;
  margin: 0;    
  }  
   li{
    display: flex;
    align-items: center;
    padding: 0;
    border: 2px solid green;
    width: 25%;   
    }
    li:hover{
      background-color: #24ada5;
    }
    a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 23px;
    padding-bottom: 23px;
    color: #852828;
    text-decoration: none;  
  }
  a:hover{
    color: gold;
  }
  `

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9vh;
  text-align: center;    
  border-top:0px;
  border-bottom: 2px solid green;
  border-left: 2px solid green;
  border-right: 2px   solid green;
  &:hover{
    background-color: #24ada5;
  }
  `