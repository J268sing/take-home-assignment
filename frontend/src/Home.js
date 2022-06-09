import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';


class Home extends Component {

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    getTransactions = character => {
        console.log(character)
        axios
        .get('https://blockchain.info/rawaddr/' + character)
        .then(res => {
          let transactions = res.data.txs
          let getTransactionsDataa = []
          for (let i = 0; i < transactions.length; i++) {
            this.setState({ getTransactionsData: [...this.state.getTransactionsData, [transactions[i].hash, transactions[i].fee]]});
          }
          console.log(getTransactionsDataa)
          this.setState({ getTransactionsData: getTransactionsDataa});
          console.log(this.state.getTransactionsData)

        });
    }
    state = {
        characters: [],
        balances: [],
        getTransactionsData: []
    };

    handleSubmit = character => {
        //console.log(character.name)
        this.setState({ characters: [...this.state.characters, character] });
        axios
    .get('https://blockchain.info/rawaddr/' + character.name)
    .then(r => {
          let balance = r.data.final_balance
          this.setState({ balances: [...this.state.balances, balance] })
       });
        
    }

    render() {
        return (
            <div className="container">

                <p style={{ padding: 20 }}></p>
                
                    <Form handleSubmit={this.handleSubmit} name={'Enter the address you want to save:'} addButton={true}/>
                    <Form handleSubmit={this.handleSubmit} name={'Send From:'} addButton={false}/>
                    <Form handleSubmit={this.handleSubmit} name={'Send To:'}addButton={false} />
                    <button onClick={this.handleSubmit}>send</button>
                <p style={{ padding: 40 }}></p>

                <Table
                    characterData={this.state.characters}
                    balanceData = {this.state.balances}
                    removeCharacter={this.removeCharacter}
                    getTransactions={this.getTransactions}
                />
            </div>
        );
    }
}



export default Home;