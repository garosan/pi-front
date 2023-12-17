import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DUMMY_AUDITS } from '../data/dummyData';

import Navbar from '../components/Navbar';
import HomepageActions from '../components/HomepageActions';

const HomePage = ({ setUserFunc }) => {
  return (
    <>
      <Navbar setUserFunc={setUserFunc} />
      <Box m={2}>
        <HomepageActions />
        <Typography component="h1" variant="h5" mb={3}>
          Auditorías recientes:
        </Typography>
        {DUMMY_AUDITS.map((audit) => (
          <div key={audit.auditId}>
            <Typography component="h3" variant="h5">
              {audit.auditId}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {audit.title}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {audit.status}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {audit.subTitle}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {audit.dateDisplay}
            </Typography>
            <hr />
          </div>
        ))}
      </Box>
    </>
  );
};

export default HomePage;