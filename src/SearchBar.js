const React = require('react')
// import React, {component} from 'react'
 
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        //alert('new link!: ' + this.state.value); //play if first in list else push to list
        this.setState({list:this.state.value});
        // console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" placeholder="Enter the Youtube Link" size="90" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Get Video" />
            </form>

        );

    }
}

export default SearchBar;