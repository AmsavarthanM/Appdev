import React, { useState } from 'react';
import {
  Container, Box, Typography, Button, List, ListItem,
  ListItemText, IconButton, Paper, Select, MenuItem, FormControl, InputLabel, Grid
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './workout.css';
import NavBar from './NavBar';
import Footer from './footer';
import axios from 'axios';
// import userContext from '../Context';
const predefinedWorkouts = [
  { category: 'Cardio', name: 'Running' },
  { category: 'Cardio', name: 'Cycling' },
  { category: 'Strength', name: 'Push-ups' },
  { category: 'Strength', name: 'Deadlifts' },
  { category: 'Flexibility', name: 'Yoga' },
  { category: 'Flexibility', name: 'Stretching' },
];

function PlansPage() {
  // const[user,setUser]=useContext(userContext)
  const [workouts, setWorkouts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const handleAddWorkout = async() => {
    if (selectedWorkout) {
      const newWorkout = { category: selectedCategory, type: selectedWorkout };
      console.log(newWorkout);
      try {
     
        const response = await axios.post('http://localhost:8080/addwork', newWorkout);
        console.log(newWorkout);
        if (response.status === 200) {
          setWorkouts([...workouts, newWorkout]);
          setSelectedCategory('');
          setSelectedWorkout('');
        } else {
          alert('Failed to add workout to the database');
        }
      } catch (error) {
        console.error('There was an error posting the workout!', error);
        alert('There was an error posting the workout!');
      }
    } else {
      alert('Please select a workout or enter a custom workout plan.');
    }
  };

  const handleRemoveWorkout = (index) => {
    const newWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(newWorkouts);
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" className="main" style={{height:'500px'}}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className="input-container">
              <Typography variant="h5" component="h2" gutterBottom>
                Add Workout Plan
              </Typography>
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="Category"
                >
                  <MenuItem value="Cardio">Cardio</MenuItem>
                  <MenuItem value="Strength">Strength</MenuItem>
                  <MenuItem value="Flexibility">Flexibility</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel>Workout</InputLabel>
                <Select
                  value={selectedWorkout}
                  onChange={(e) => setSelectedWorkout(e.target.value)}
                  label="Workout"
                  disabled={!selectedCategory}
                >
                  {predefinedWorkouts
                    .filter(workout => workout.category === selectedCategory)
                    .map((workout, index) => (
                      <MenuItem key={index} value={workout.name}>
                        {workout.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddWorkout}
                className="add-button"
                sx={{ backgroundColor: 'red',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkred'},}}
              >
                Add Workout
              </Button>
              <List>
                {workouts.map((workout, index) => (
                  <ListItem key={index} secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveWorkout(index)}>
                      <DeleteIcon />
                    </IconButton>
                  }>
                    <ListItemText primary={`${workout.category}: ${workout.type}`} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="image-container">
              <img className="workout-image" src='https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='workout' />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default PlansPage;
