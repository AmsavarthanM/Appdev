import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia, List, ListItem } from "@mui/material";
import NavBar from "../NavBar";
import Footer from "../footer";

function Video1(){
  return (
    <div>
      <NavBar />
      <Box
        component="main"
        flex="1"
        sx={{ padding: "20px", backgroundColor: "#f5f5f5" ,marginTop:'20px'}}
        >
        <Typography variant="h4" component="h1" textAlign="center" color='#000066'>
          PUSH-UP
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <video width="60%" controls autoPlay>
            <source src="/4945123-uhd_4096_2160_24fps.mp4" type="video/mp4" />
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
                      <ListItem>Builds upper body strength, focusing on chest, shoulders, and triceps.</ListItem>
                      <ListItem>Enhances core stability and balance.</ListItem>
                      <ListItem>Increases functional fitness by mimicking everyday movements.</ListItem>
                      <ListItem>Boosts cardiovascular health and endurance.</ListItem>
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
                image="https://www.inspireusafoundation.org/wp-content/uploads/2021/08/diamond-pushup.gif"
                alt="Exercise 1"
                />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://miro.medium.com/v2/resize:fit:1024/1*gBFz5MjoS7t9GRhJt2kTvw.jpeg "
                alt="Exercise 2"
                />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-537ce9d/www.aleanlife.com/wp-content/uploads/2021/02/incline-push-up-form.jpg"
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

export default Video1;
