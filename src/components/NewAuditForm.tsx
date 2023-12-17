import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NewAuditForm = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5" mb={3}>
        Aqui irá una nueva auditoría...por lo pronto solo puedes:
      </Typography>
      <Link to={'/'}>
        <Button variant="contained">Regresar al Inicio</Button>
      </Link>
    </Box>
  );
};

export default NewAuditForm;
