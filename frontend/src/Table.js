import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Table extends Component {
    render() {
        const { characterData,balanceData, removeCharacter, getTransactions } = this.props;
        const TableHeader = () => {
            return (
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Current Balance</th>
                    </tr>
                </thead>
            );
        }
        const TableBody = props => {
            const rows = props.characterData.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{balanceData[index]}</td>
                        <td><Link to="/address"><button style={{backgroundColor:"green"}} onClick={() => props.getTransactions(index)}>View Transactions</button></Link></td>
                        
                        <td><button style={{backgroundColor:"red"}} onClick={() => props.removeCharacter(index)}>Delete</button></td>
                    </tr>
                    
                );
            })

            return <tbody>{rows}</tbody>
        }

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                    getTransactions={getTransactions}
                />
            </table>
        );
    }
}

export default Table;