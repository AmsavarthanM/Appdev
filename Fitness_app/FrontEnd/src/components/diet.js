import React, { useState } from 'react';
import {Container, Typography, TextField, Button, Paper, List, ListItem, ListItemText, IconButton, FormControl, InputLabel, Select, MenuItem, Grid, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './de.css'
import NavBar from './NavBar';
import Footer from './footer';

const commonFoods = [
  { name: 'Apple', protein: 0.3, vitamins: 0.1, carbs: 25, fat: 0.2, type: 'solid' },
  { name: 'Banana', protein: 1.3, vitamins: 0.1, carbs: 27, fat: 0.3, type: 'solid' },
  { name: 'Chicken Breast', protein: 31, vitamins: 0, carbs: 0, fat: 3.6, type: 'solid' },
  { name: 'Broccoli', protein: 2.8, vitamins: 1.2, carbs: 6, fat: 0.4, type: 'solid' },
  { name: 'Milk', protein: 3.4, vitamins: 0.5, carbs: 5, fat: 3.3, type: 'liquid' },
  { name: 'Orange Juice', protein: 1.0, vitamins: 1.2, carbs: 25, fat: 0.2, type: 'liquid' },
  { name: 'Almond Milk', protein: 1.0, vitamins: 0.5, carbs: 8, fat: 2.5, type: 'liquid' },
  { name: 'Greek Yogurt', protein: 10, vitamins: 0.3, carbs: 4, fat: 0.4, type: 'solid' },
  { name: 'Spinach', protein: 2.9, vitamins: 1.7, carbs: 3.6, fat: 0.4, type: 'solid' },
  { name: 'Egg', protein: 6.3, vitamins: 0.2, carbs: 0.6, fat: 5, type: 'solid' }
];

function Meals() {
  const [foodInput, setFoodInput] = useState('');
  const [quantity, setQuantity] = useState('');
  const [nutritionList, setNutritionList] = useState([]);

  const handleAdd = () => {
    const food = commonFoods.find(f => f.name === foodInput);
    const qty = parseFloat(quantity);
    if (food && qty > 0) {
      const nutrition = {
        ...food,
        protein: food.protein * qty,
        vitamins: food.vitamins * qty,
        carbs: food.carbs * qty,
        fat: food.fat * qty,
        quantity: qty
      };
      setNutritionList([...nutritionList, nutrition]);
      setFoodInput('');
      setQuantity('');
    } else {
      alert('Please enter a valid food name and quantity');
    }
  };

  const handleDelete = (index) => {
    const newList = nutritionList.filter((_, i) => i !== index);
    setNutritionList(newList);
  };

  return (
    <div>

    <NavBar/>
    <Container maxWidth="lg" className="main" sx={{ paddingTop: '5%' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'sans-serif' }}>
            Nutrition Information
          </Typography>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel>Select Food</InputLabel>
              <Select
                value={foodInput}
                onChange={(e) => setFoodInput(e.target.value)}
                label="Select Food"
                >
                {commonFoods.map((food) => (
                  <MenuItem key={food.name} value={food.name}>
                    {food.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              margin="normal"
              />
            <Button variant="contained" color="primary" onClick={handleAdd} sx={{ backgroundColor: 'red',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkred'},}}>
              Add
            </Button>
          </Paper>
          {nutritionList.length > 0 && (
            <>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Nutrition Details
                </Typography>
                <List>
                  {nutritionList.map((nutrition, index) => (
                    <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                          <DeleteIcon />
                        </IconButton>
                      }
                      >
                      <ListItemText
                        primary={`${nutrition.name} - ${nutrition.quantity} units`}
                        secondary={`Protein: ${nutrition.protein}g, Vitamins: ${nutrition.vitamins}g, Carbs: ${nutrition.carbs}g, Fat: ${nutrition.fat}g`}
                        />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Nutrition Chart
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={nutritionList}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="protein" fill="red" />
                    <Bar dataKey="vitamins" fill="green" />
                    <Bar dataKey="carbs" fill="orange" />
                    <Bar dataKey="fat" fill="yellove" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </>
          )}
        </Grid>

     <Grid item xs={12} md={6}>
            <Box className="image-container">
            <video style={{marginTop:'50px'}} src='https://videos.pexels.com/video-files/854082/854082-sd_640_360_25fps.mp4' autoPlay muted loop></video>
            </Box>
          </Grid>
      </Grid>
    </Container>
    <Footer/>
          </div>
  );
}

export default Meals;
