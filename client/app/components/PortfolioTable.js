import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(
  symbol,
  name,
  shares,
  lastPrice,
  costBasis,
  currentValue,
  netGain
) {
  id += 1;
  return {
    id,
    symbol,
    name,
    shares,
    lastPrice,
    costBasis,
    currentValue,
    netGain
  }
}

const rows = [
  createData("BABA", "Alibaba", 10, 130.21, 150.31, 1302.1, 200),
  createData("TSLA", "Tesla", 10, 200.55, 242.33, 2005.5, 200),
  createData("PYPL", "Paypal", 10, 86.53, 44.25, 865.3, 200),
  createData("DIS", "Disney", 10, 105.24, 109.44, 1052.4, 200),
  createData("GOOGL", "Google", 10, 1664.12, 1555, 16641.2, 200)
]

const PortfolioTable = props => {
  return (
    <Paper style={styles.root}>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell numeric>Shares</TableCell>
            <TableCell numeric>Last Price</TableCell>
            <TableCell numeric>Cost Basis</TableCell>
            <TableCell numeric>Current Value</TableCell>
            <TableCell numeric>Net Gain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.symbol}
                </TableCell>
                <TableCell numeric>{row.name}</TableCell>
                <TableCell numeric>{row.shares}</TableCell>
                <TableCell numeric>{row.lastPrice}</TableCell>
                <TableCell numeric>{row.costBasis}</TableCell>
                <TableCell numeric>{row.currentValue}</TableCell>
                <TableCell numeric>{row.netGain}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PortfolioTable;
