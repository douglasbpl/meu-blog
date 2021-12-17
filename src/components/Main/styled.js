import styled from 'styled-components';

export const ContainerMain = styled.div`
width:100%;
display:flex;
flex-direction:column;
color: #fff;
`

export const ContainerSobre = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
min-height: 75vh;
@media (max-width: 425px) {
    min-height: 75vh;
}

`
export const ContainerInt = styled.div`
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
`

export const MyIMG = styled.img`
border-radius: 50% 50% 50% 50% / 30% 26% 74% 70% ;
width: 100%;    
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
     font-size: 30px;
}
p{  
    font-size: 18px;
    }
`