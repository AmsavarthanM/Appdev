import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia, List, ListItem } from "@mui/material";
import NavBar from "../NavBar";
import Footer from "../footer";

function Video2(){
  return (
    <div>
      <NavBar />
      <Box
        component="main"
        flex="1"
        sx={{ padding: "20px", backgroundColor: "#f5f5f5" ,marginTop:'20px'}}
        >
        <Typography variant="h4" component="h1" textAlign="center" color='#000066'>
          SQUAT
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <video width="60%" controls autoPlay>
            <source src="https://videos.pexels.com/video-files/4265287/4265287-sd_640_360_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ padding: "20px" }}>
                <CardContent>
                  <Typography variant="h5" component="h2" color="#000066" gutterBottom>
                    Benefits
                  </Typography>
                  <Typography variant="body1" component="div">
  <List>
    <ListItem>Strengthens the lower body, focusing on quads, hamstrings, and glutes.</ListItem>
    <ListItem>Improves core strength and stability.</ListItem>
    <ListItem>Enhances mobility and balance.</ListItem>
    <ListItem>Burns calories and boosts cardiovascular health.</ListItem>
  </List>
</Typography>

                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
         <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={4} color="#000066">
          Workout Images
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://www.temple-of-iron.com/wp-content/uploads/2016/03/squat-muscles.gif"
                alt="Exercise 1"
                />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/1200x/b4/3b/bd/b43bbd23fabfe3f377a6b7edba9e7f01.jpg"
                alt="Exercise 2"
                />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://www.inspireusafoundation.org/wp-content/uploads/2023/02/high-bar-squat-benefits.jpg"
                alt="Exercise 3"
                />
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Box>
      <Footer/> 
        </div>
  );
};

export default Video2;
