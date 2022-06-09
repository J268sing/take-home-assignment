import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;
        let input
        if (this.props.addButton){
            input = <input
                type="button"
                value="Add"
                color= "white"
                onClick={this.submitForm}
            />
}
        return (
            <form>
                <label>{this.props.name}</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                
                {input}
            </form>
        );
    }
}

export default Form;