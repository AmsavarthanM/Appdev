import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import Footer from './footer';
import NavBar from './NavBar';

function Sleep() {
  const [labels, setLabels] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  const [data, setData] = useState([7, 8, 6, 5, 9, 7.5, 8.2]);
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');

  const handleAddData = () => {
    if (day && hours) {
      const dayIndex = labels.indexOf(day);

      if (dayIndex !== -1) {
        const newData = [...data];
        newData[dayIndex] = parseFloat(hours);
        setData(newData);
      } else {
        setLabels([...labels, day]);
        setData([...data, parseFloat(hours)]);
      }

      setDay('');
      setHours('');
    } else {
      alert('Please enter both the day and hours of sleep.');
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Hours of Sleep',
        data: data,
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutBounce',
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: '#000',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
      x: {
        ticks: {
          color: '#000',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} hours`;
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" sx={{ flexGrow: 1, my: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Sleep Tracker
          </Typography>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{marginTop:'185px'}}>
                <img
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '400px',
                    borderRadius: '12px',
                  }}
                  src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sleep"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  Add Sleep Data
                </Typography>
                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Day of the Week"
                    variant="outlined"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="e.g., Monday"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Hours of Sleep"
                    variant="outlined"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="e.g., 8"
                    sx={{ mb: 2 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddData}
                    fullWidth
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkred',
                      },
                    }}
                  >
                    Add Data
                  </Button>
                </Box>
                <Box sx={{ height: '400px', position: 'relative' }}>
                  <Line data={chartData} options={chartOptions} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Sleep;
