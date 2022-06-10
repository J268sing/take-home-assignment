import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
class ViewTransactions extends Component {
    render()
     {
        console.log('jashandeep')
        console.log(this.props)
        console.log('singh')
        function createData(
            hash,
            size,
            balance

        ) {
            return { hash, size, balance };
        }

        const rows = [
            createData('0f98d9edca880a6c124e25095712df8952e0439ac7409738aAASDDFD', 159, 6.0),
            createData('auaoei07d0f98d9edca880a6c124e25095712df8952e0439ac7409738a', 237, 9.0),
            createData('00000000000007d0f98d9edca880a6c124e25095712df8952e0439ac7409738a', 262, 16.0),
            createData('07d0f98d9edca880a6c124e25095712df8952e0439ac7409738awilNdfn', 305, 3.7),
            createData('ween7d0f98d9edca880a6c124e25095712df8952e0439ac7409738asaeoiinfe', 356, 16.0),
        ];
        return (
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>HASH</TableCell>
                            <TableCell align="right">SIZE</TableCell>
                            <TableCell align="right">BALANCE</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.hash}
                                </TableCell>
                                <TableCell align="right">{row.size}</TableCell>
                                <TableCell align="right">{row.balance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}





export default ViewTransactions;