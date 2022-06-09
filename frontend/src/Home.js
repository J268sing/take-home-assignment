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

    getTransactions = index => {
        axios
            .get('/' + this.state.characters[index] + '/txs')
            .then(res => {  
                let transactions = res.data.transactions
                this.setState({ getTransactionsData: [...this.state.getTransactionsData, transactions] })
            });
    }
    state = {
        characters: [],
        balances: [1,2],
        getTransactionsData: []
    };

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
        axios
    .get('https://blockchain.info/rawaddr/3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd')
    .then(r => {
          let balance = r.data.final_balance
          console.log(balance)
      });
        /*console.log('jashan')
        axios
            .get('/' + character + '/balance')
            .then(res => {  
                console.log(res)
                let balance = res.data.balance
                console.log('asa')
                this.setState({ balances: [...this.state.balances, balance] })
            });
        console.log(this.state.balances)*/
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