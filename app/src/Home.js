import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';



class Home extends Component {
    state = {
        characters: [],
        balances: [],
        getTransactionsData: [],
    };

    // removeCharacter: removes the address from state that has been deleted by the user
    removeCharacter = index => {
        const { characters,balances,getTransactionsData } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });

        this.setState({
            balances: balances.filter((balance, i) => {
                return i !== index;
            })
        });

        this.setState({
            getTransactionsData: getTransactionsData.filter((getTransactionsDdata, i) => {
                return i !== index;
            })
        });
    }

    getTransactions = (character) => {
    }

    handleSynchronization = (from, to) => {
        const { characters,balances,getTransactionsData } = this.state;
        if (characters.includes(from) && characters.includes(to)){
            let indexFrom = 0;
            for (let i = 0; i < characters.length; i++) {
                if (characters[i] ===from){
                    indexFrom = i
                } 
            }

            if (balances[indexFrom] > 0){
                console.error('Transaction Completed')
            } else{
                console.error('Amount to be sent is greater than current balance')
            }

        } else {
            console.error('Both Send From and Send To addresses must be valid');
        }
    }

    // handleSubmit: handles Blockchain.com API call and fetches the required data and
    //               stores it in state
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
        axios
            .get('https://blockchain.info/rawaddr/' + character.name)
            .then(r => {
                let balance = r.data.final_balance
                this.setState({ balances: [...this.state.balances, balance] })


                //transaction data
                let getTransactionsDataa = []
                let transactions = r.data.txs
                for (let i = 0; i < transactions.length; i++) {
                    getTransactionsDataa.push([transactions[i].hash, transactions[i].fee, transactions[i].size])
                }
                this.setState({ getTransactionsData: [...this.state.getTransactionsData,  getTransactionsDataa] })
            });
    }

    render() {
        return (
            <div className="container">
                <p style={{ padding: 20 }}></p>
                <Form handleSubmit={this.handleSubmit} name={'Enter the address you want to save:'} addButton={true} />
                <Form handleSubmit={this.handleSubmit} name={'Send From:'} addButton={false} />
                <Form handleSubmit={this.handleSubmit} name={'Send To:'} addButton={false} />
                <Form handleSubmit={this.handleSynchronization} name={'Amount:'} addButton={false} />
                <button onClick={this.handleSynchronization}>send</button>
                <p style={{ padding: 40 }}></p>
                <Table
                    characterData={this.state.characters}
                    balanceData={this.state.balances}
                    removeCharacter={this.removeCharacter}
                    getTransactions={this.getTransactions}
                />
            </div>
        );
    }
}



export default Home;