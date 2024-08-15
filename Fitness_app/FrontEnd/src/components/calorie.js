import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Box, Paper } from '@mui/material';
import NavBar from './NavBar';
import Footer from './footer';
import './calorie.css';

const Calorie = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);

  const handleCalculate = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    let dailyCalories;
    switch (activityLevel) {
      case 'sedentary':
        dailyCalories = bmr * 1.2;
        break;
      case 'light':
        dailyCalories = bmr * 1.375;
        break;
      case 'moderate':
        dailyCalories = bmr * 1.55;
        break;
      case 'active':
        dailyCalories = bmr * 1.725;
        break;
      case 'very active':
        dailyCalories = bmr * 1.9;
        break;
      default:
        dailyCalories = bmr;
    }

    setCalories(Math.round(dailyCalories));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          mb: 4,
        }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: '12px', width: '100%' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Calorie Calculator
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center" alignItems="center" mb={{ xs: 3, md: 0 }}>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '350px',
                    borderRadius: '12px',
                  }}
                  src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Calorie Calculator"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Age"
                    variant="outlined"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Gender</InputLabel>
                    <Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Weight (kg)"
                    variant="outlined"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Height (cm)"
                    variant="outlined"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Activity Level</InputLabel>
                    <Select
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(e.target.value)}
                      label="Activity Level"
                    >
                      <MenuItem value="sedentary">
                        Sedentary (little or no exercise)
                      </MenuItem>
                      <MenuItem value="light">
                        Light (light exercise/sports 1-3 days/week)
                      </MenuItem>
                      <MenuItem value="moderate">
                        Moderate (moderate exercise/sports 3-5 days/week)
                      </MenuItem>
                      <MenuItem value="active">
                        Active (hard exercise/sports 6-7 days a week)
                      </MenuItem>
                      <MenuItem value="very active">
                        Very Active (very hard exercise/sports & a physical job)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCalculate}
                    fullWidth
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkred'},
                      
                      mt: 2,
                    }}
                  >
                    Calculate
                  </Button>
                </Grid>
                {calories && (
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center" mt={2}>
                      Your daily caloric needs: {calories} calories/day
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Calorie;
