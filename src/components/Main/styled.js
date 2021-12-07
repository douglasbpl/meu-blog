import styled from 'styled-components';

export const ContainerMain = styled.div`
width:100%;
display:flex;
flex-direction:column;

`

export const ContainerFIrstSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding-top:10vh;
::after{
    content:'';
    width:100%;
    height:30px;
    background-color: #e6e6e6;
    margin-top:10px;
}
`
export const ContainerInterno = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
figure{
    display: flex;
    flex-direction: column;
    height: 55vh;
    max-width: 400px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}
`

export const MyIMG = styled.img`
border-radius: 50% 50% 50% 50% / 30% 26% 74% 70% ;
width: 100%;
}
`

export const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
max-width: 400px;
padding: 2rem;
h1{
    color: white;
    font-size: 30px;
}
p{
    color: white;
    font-size: 18px;
    }
`

export const ContainerSecondSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-top:10vh;
div{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
        
        
}
h2{
    color: white;
    font-size: 30px;
}
figure{
    display: flex;
    flex-direction: column;
    height: 55vh;
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
    width: 70%;
    list-style: none;
    padding: 0;
}
li{
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
}
  
`