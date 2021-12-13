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
min-height: 75vh;
@media (max-width: 425px) {
    min-height: 71vh;
}
@media
`
export const ContainerInterno = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
figure{
    display: flex;        
    max-width: 400px;
    justify-content: center;
    align-items: center;    
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
padding: 1.5rem;
h1{
    color: white;
    font-size: 30px;
}
p{
    color: white;
    font-size: 18px;
    }
`
