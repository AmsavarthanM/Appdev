import React from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import './tracker.css';

const Track = () => {
  return (
    <Box sx={{ minHeight: '100vh', padding: '2vh 5vw'}}>
      <Paper elevation={3} sx={{ marginTop: { xs: '20px', md: '80px' }, padding: '2vh 3vw', minHeight: '60vh' ,backgroundColor:'#FFEBEB'}}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
          <Box flexBasis={{ xs: '100%', md: '50%' }} textAlign="center" mb={{ xs: 4, md: 0 }}>
            <img 
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrack-food-medium.d90d9a03.png&w=425&q=75" 
              alt="mobile"
              style={{ width: '100%', maxWidth: '80%', height: 'auto' }}
            />
          </Box>
          <Box flexBasis={{ xs: '100%', md: '50%' }} textAlign="center">
            <Typography variant="h4" component="h3" sx={{ fontFamily: 'sans-serif', color: '#000066', mb: 4 }}>
              <b>Trackers</b>
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
              <Link to="/cal" style={{ color: 'black', textDecoration: 'none', maxWidth: '180px' }}>
                <Paper elevation={6} sx={{ padding: '16px', borderRadius: '20px', textAlign: 'center' }}>
                  <img 
                    className="but" 
                    src="/cropped_image.png" 
                    alt="Calorie Calculator" 
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }} 
                  />
                  <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                    <b>Calorie</b>
                  </Typography>
                </Paper>
              </Link>
              <Link to="/sleep" style={{ color: 'black', textDecoration: 'none', maxWidth: '180px' }}>
                <Paper elevation={6} sx={{ padding: '16px', borderRadius: '20px', textAlign: 'center' }}>
                  <img 
                    className="but" 
                    src="/cropped_image (1).png" 
                    alt="Sleep" 
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }} 
                  />
                  <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                    <b>Sleep</b>
                  </Typography>
                </Paper>
              </Link>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4} mt={4}>
              <Link to="/work" style={{ color: 'black', textDecoration: 'none', maxWidth: '180px' }}>
                <Paper elevation={6} sx={{ padding: '16px', borderRadius: '20px', textAlign: 'center' }}>
                  <img 
                    className="but" 
                    src="/cropped_image (2).png" 
                    alt="Plans" 
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }} 
                  />
                  <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                    <b>Plans</b>
                  </Typography>
                </Paper>
              </Link>
              <Link to="/diet" style={{ color: 'black', textDecoration: 'none', maxWidth: '180px' }}>
                <Paper elevation={6} sx={{ padding: '16px', borderRadius: '20px', textAlign: 'center' }}>
                  <img 
                    className="but" 
                    src="/cropped_image (3).png" 
                    alt="Diet" 
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }} 
                  />
                  <Typography variant="h6" component="h4" sx={{ mt: 2 }}>
                    <b>Diet</b>
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Track;
