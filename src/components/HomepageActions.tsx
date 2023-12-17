import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomepageActions = () => {
  return (
    <div>
      <Link to={'/audit/new/regular'}>
        <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
          Crear Auditoría de Seg. Alimentaria
        </Button>
      </Link>
      <Link to={'/audit/new/distintivo-h'}>
        <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
          Crear Auditoría Distintivo H
        </Button>
      </Link>
    </div>
  );
};

export default HomepageActions;