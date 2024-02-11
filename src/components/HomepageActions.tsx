import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

const HomepageActions = () => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Button variant="contained" size="large" sx={{ mt: 2, mb: 2 }}>
          Crear Auditoría de Seg. Alimentaria
        </Button>
      </Grid>
      <Grid xs={12} md={6}>
        <Button variant="contained" size="large" sx={{ mt: 2, mb: 2 }} onClick={() => navigate("/new-audit/distintivo-h")}>
          Crear Auditoría Distintivo H
        </Button>
      </Grid>
    </Grid>

  );
};

export default HomepageActions;