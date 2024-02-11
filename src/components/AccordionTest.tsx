import { Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AUDIT_DISTINTIVO_H } from '../data/auditData';

function AuditAccordion() {
  return (
    <div>
      {AUDIT_DISTINTIVO_H.map(category => (
        <Accordion key={category.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{category.categoryName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {category.subCategories ? (
              category?.subCategories?.map(subcategory => (
                <div key={subcategory.subCategoryName}>
                  <Typography variant="subtitle1" gutterBottom>
                    {subcategory.subCategoryName}
                  </Typography>
                  <TableContainer>
                    {renderCriteriaTable(subcategory.subCategoryItems)}
                  </TableContainer>
                </div>
              ))
            ) : (
              <TableContainer>
                {renderCriteriaTable(category.criteriaItems)}
              </TableContainer>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

function renderCriteriaTable(criteriaItems) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="center">YES</TableCell>
          <TableCell align="center">NO</TableCell>
          <TableCell align="center">N/A</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {criteriaItems?.map(item => (
          <TableRow key={item.id}>
            <TableCell component="th" scope="row" style={{ fontWeight: item.important ? 'bold' : 'normal' }}>
              {item.criteriaItem}
            </TableCell>
            <TableCell align="center" colSpan={3}>
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="" />
                <FormControlLabel value="no" control={<Radio />} label="" />
                <FormControlLabel value="na" control={<Radio />} label="" />
              </RadioGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AuditAccordion;
