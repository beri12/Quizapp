import { Box, styled} from '@mui/material';
import React from 'react';
import headerImage  from '../images/jobbg.jpg';

const Header = () => {

  const StyleHeader = styled(Box)(({theme})=> (
    {

    display: "flex",
    justifyContent: "center",
    minHeight: "400px",
    backgroundImage: `url(${headerImage})`,
    bacckgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main

    }

  ));
  return (
    <>
       
       <StyleHeader>

       </StyleHeader>
    </>
  )
}

export default Header;
