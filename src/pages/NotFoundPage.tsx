import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">La página que buscas no existe.</Typography>
            <Link to={'/'}>
              <Button variant="contained">Regresar al Inicio</Button>
            </Link>
          </Grid>
          <Grid xs={12} md={6}>
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt="" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
