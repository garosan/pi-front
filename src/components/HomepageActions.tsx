import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const HomepageActions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={'audit/new/regular'}>
        <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
          Crear Auditoría de Seg. Alimentaria
        </Button>
      </Link>
      <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }} onClick={() => navigate("/new-audit/distintivo-h")}>
        Crear Auditoría Distintivo H
      </Button>
    </div>
  );
};

export default HomepageActions;