import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Typography>Next js Template with MUI, emotion!!</Typography>
      <Button variant="contained">Button</Button>
    </Box>
  );
};

export default Home;
