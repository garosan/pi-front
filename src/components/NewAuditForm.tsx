import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

const NewAuditForm = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5" mb={3}>Nueva Auditoria </Typography>
      <TextField
        sx={{ minWidth: "300px" }}
        label="Hora del día"
      // value={value}
      // onChange={(onChange)}
      />
      <br></br>
      <TextField
        sx={{ minWidth: "300px" }}
        label="Nombre del restaurante"
      // value={value}
      // onChange={(onChange)}
      />
      <br></br>
      <TextField
        sx={{ minWidth: "300px" }}
        label="Auditor"
      // value={value}
      // onChange={(onChange)}
      />
      <br></br>
      <TextField
        sx={{ minWidth: "300px" }}
        label="Gerente/Encargado"
      // value={value}
      // onChange={(onChange)}
      />
      <br></br>

      <Button variant="contained" onClick={() => navigate("/new-audit/distintivo-h/12345")}>
        Iniciar Auditoria
      </Button>
    </Box>
  );
};

export default NewAuditForm;
