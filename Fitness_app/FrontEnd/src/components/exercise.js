import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Button,Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './exercise.css';

const Exercise = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom sx={{color:'#000066',marginTop:'30px'}}>
                Workouts
            </Typography>
            <Grid container spacing={4} sx={{marginTop:'40px'}}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <Link to='/home/push' style={{textDecoration:'none'}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image='https://images.pexels.com/photos/6388395/pexels-photo-6388395.jpeg?auto=compress&cs=tinysrgb&w=600'
                                    alt='Push-up'
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="#000066">
                                        Push-up
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A basic upper body exercise that works the chest, shoulders, and triceps.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <Link to='/home/push2' style={{textDecoration:'none'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image='https://t4.ftcdn.net/jpg/01/44/68/03/360_F_144680361_ntZD6son6d0vOCNw9sIsj3qXbuzBZc8D.jpg'
                                alt='Squat'
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="#000066">
                                    Squat
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A lower body exercise that targets the thighs, hips, and body strength.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image='https://media.gq.com/photos/57055d0d244f7cb971462730/16:9/w_2560%2Cc_limit/details-plank.jpg'
                                alt='Plank'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="#000066">
                                    Plank
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    An isometric core exercise that involves maintaining a position.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                {showMore && (
                    <>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image='https://www.wikihow.com/images/thumb/a/a8/Do-Lunges-Step-4-Version-7.jpg/550px-nowatermark-Do-Lunges-Step-4-Version-7.jpg'
                                        alt='Lunges'
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#000066">
                                            Lunges
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            A lower body exercise that targets the legs and glutes.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagkSBP7A0KpDwObSP0R8XuTT_DR3xqrOTSA&s'
                                        alt='Burpees'
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#000066">
                                            Back
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            A full-body exercise that builds strength and endurance.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcJhOCtS2OA8GsFnK5vdYjepaArawrt56ag&s'
                                        alt='Burpees'
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#000066">
                                            Shoulder
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Build the muscles around the shoulder joint, primarily targeting the deltoids
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </>
                )}
            </Grid>

            <Box textAlign="center" mt={4}>
                <Button variant="contained" color="primary" onClick={handleShowMore} sx={{ backgroundColor: 'red',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkred'},}}>
                    {showMore ? 'Show Less' : 'Show More'}
                </Button>
            </Box>
        </Container>
    );
};

export default Exercise;
