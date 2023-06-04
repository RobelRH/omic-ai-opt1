import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { COLORS } from '../constants';

const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
});

function createData(field, type) {
  return { field, type };
}

const rows = [
  createData('date', 'date'),
  createData('devce_type', 'character varying'),
  createData('country', 'character varying'),
  createData('sessions', 'integer'),
  createData('revenue', 'integer'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer style={{ backgroundColor: COLORS.primaryB }}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{ color: COLORS.White }}>Field</TableCell>
            <TableCell align="right" style={{ color: COLORS.White }}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right" style={{ color: COLORS.textColor }}>{row.field}</TableCell>
              <TableCell align="right" style={{ color: COLORS.textColor }}>{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
