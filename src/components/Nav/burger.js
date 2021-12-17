import React, { useState } from 'react';
import * as S from './styled';
import RightNav from './rightnav';



const Burguer = () => {


  const [open, setOpen] = useState(false)


  
  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burguer;