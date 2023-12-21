import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import button from '@mui/icons-material'
import{ Box, Typography } from '@mui/material'

const Footer = () => {
  return (
<>

  <Box
sx={{textAlign:"center",bgcolor:"#1A1A19",color:"goldenrod",p:3}}>
    <Box sx={{my:2,"& svg":
{
    fontSize:"50px",
    cursor:"pointer",
    mr:2,
},
"& svg:hover":{
    color:"green",
    transform:'translateX(5px)',
    transition:'all 400ms',
}

}
}>
  
        {/* icons */}
        <GitHubIcon/>
        <LinkedInIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
    </Box>
    <Typography variant='h6'
     sx={{
      "  @media(max-width:600px)":
      {
        fontSize:"1rem",
      }}}>
     





    
All Rights Reserved  &copy; Devesh Kumar

    </Typography>
</Box>





</>
  );
};

export default Footer
