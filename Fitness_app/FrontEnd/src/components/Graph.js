import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Container, Grid, Paper, TextField, Button, Box } from '@mui/material';

const initialData = [
  { day: 'Mon', uv: 3000, pv: 2400 },
  { day: 'Tue', uv: 2000, pv: 1300 },
  { day: 'Wed', uv: 2500, pv: 1800 },
  { day: 'Thu', uv: 2700, pv: 1900 },
  { day: 'Fri', uv: 3000, pv: 2100 },
  { day: 'Sat', uv: 3200, pv: 2500 },
  { day: 'Sun', uv: 2900, pv: 2200 },
];

const Gra = () => {
  const [data, setData] = useState(initialData);
  const [inputs, setInputs] = useState(
    initialData.reduce((acc, { day, uv, pv }) => {
      acc[day] = { uv, pv };
      return acc;
    }, {})
  );

  const handleInputChange = (day, key, value) => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [day]: {
        ...prevInputs[day],
        [key]: Number(value)
      }
    }));
  };

  const updateData = () => {
    setData(data.map(d => ({
      ...d,
      uv: inputs[d.day]?.uv || d.uv,
      pv: inputs[d.day]?.pv || d.pv
    })));
  };

  return (
    <Container sx={{ paddingTop: '10%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#1D2A51" />
              <Bar dataKey="uv" fill="#FF8F57" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ padding: 2 }}>
        {data.map(d => (
          <Box key={d.day} sx={{ marginBottom: 2 }}>
            <TextField
              label={`${d.day} UV`}
              type="number"
              value={inputs[d.day]?.uv || ''}
              onChange={(e) => handleInputChange(d.day, 'uv', e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <TextField
              label={`${d.day} PV`}
              type="number"
              value={inputs[d.day]?.pv || ''}
              onChange={(e) => handleInputChange(d.day, 'pv', e.target.value)}
            />
          </Box>
        ))}
        <Button variant="contained" onClick={updateData}>Update Charts</Button>
      </Box>
    </Container>
  );
};

export default Gra;
