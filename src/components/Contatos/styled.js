import styled from 'styled-components';

export const ContainerContatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;    
    min-height: 75vh;
    color: #fff;
    @media (max-width: 425px) { 
        min-height: 71vh;
    }
   
    h1{
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
     }
    p{
        font-size: 1.5rem;
        font-weight: bold;        
        text-align: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;         
`;

export const Input = styled.input`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
`;

export const Textarea = styled.textarea`
    width: 90%;
    height: 100px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
`;

export const Button = styled.button`
    width: 30%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #f5f5f5;
    color: #000;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
    }
`;

export const BoxsocialNetwork = styled.div`
width: 50%;
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
    padding-bottom: 20px;
    color: #852828;
    text-decoration: none;  
  }
  a:hover{
    color: gold;
  }
  `