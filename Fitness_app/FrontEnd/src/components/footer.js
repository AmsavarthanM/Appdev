import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        // mt: 'auto',
      backgroundColor:'#ECF5FF',
      marginTop:'30px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="#000066" gutterBottom>
              Health & Fitness
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Your go-to platform for tracking and enhancing your health and fitness journey.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#000066" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@healthfitness.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Address: 123 Health St, Fitness City, HF 12345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="#000066" gutterBottom>
              Follow Us
            </Typography>
            <IconButton aria-label="Facebook" href="https://facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" href="https://twitter.com">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" href="https://instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://yourwebsite.com/">
              Health & Fitness
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
