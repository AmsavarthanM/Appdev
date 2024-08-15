import React, { useContext } from 'react';
import { Box, Container, Typography, Avatar, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import userContext from '../Context';
import NavBar from './NavBar';
import Footer from './footer';

const ProfilePage = () => {
  const [user, setUser] = useContext(userContext);

  return (
    <div>
     <NavBar/>
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Card>
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
            textAlign: 'center',
        }}
        >
        <Avatar
          alt={user.username}
          src={user.avatar}
          sx={{ width: 150, height: 150, mb: 2, boxShadow: 3 }}
          />
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#000066' }}>
            WELCOME:
          {user.username}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {user.email}
        </Typography>
        {/* <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ backgroundColor: '#000066', color: '#fff', ':hover': { backgroundColor: '#000099' } }}
          >
          Edit Profile
          </Button> */}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#000066' }}>
          Contact Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>Email: {user.email}</Typography>
        {/* <Typography variant="body1">Phone: {user.phone}</Typography> */}
      </Box>

      {/* <Box sx={{ mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#000066' }}>
        Recent Activities
        </Typography>
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
        component="img"
        height="140"
        image="/images/workout.jpg"
        alt="Workout"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Workout
        </Typography>
        <Typography variant="body2" color="text.secondary">
        You recently completed a 5km run.
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
        component="img"
        height="140"
        image="/images/meal.jpg"
        alt="Meal"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Meal Plan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        You logged a healthy meal today.
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Box> */}
        </Card>
    </Container>
    <Footer/>
    </div>
  );
};

export default ProfilePage;
