import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const Details = ({ data1 }) => {
    const classes = useStyles();
    const [ten, tenPlus] = useState(10)

    const increaseBox = () => {
        tenPlus(val => val + 10)
    }


    return (
        <>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell align="left">ID</StyledTableCell>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">completed</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data1.slice(0, ten).map((val, key) => (
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    {val.id}
                                </StyledTableCell>
                                <StyledTableCell align="left" >{val.title}</StyledTableCell>
                                <StyledTableCell align="left">{val.completed.toString()}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="button">
            <button onClick={increaseBox} className="btn">Next</button>
            </div>
        </>

    )
}

export default Details
