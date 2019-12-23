
const React = require('react')
const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
// import React, {component} from 'react'
 
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event){
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit(event){
    //     //alert('new link!: ' + this.state.value); //play if first in list else push to list
    //     let url = this.state.value;
    //     // console.log(link);
    //     if(!(url.startsWith("https://www.youtube.com"))){
    //         alert("Please enter a valid youtube video link.");    
    //     }
    //     console.log("the link passed is: "+url);

    //     event.preventDefault();
    // }

    // componentDidMount() {
    //     console.log("bar state:" + Object.values(this.state));
    // }

    // getId(url) {
    //     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    //     const match = url.match(regExp);
    
    //     return (match && match[2].length === 11)
    //       ? match[2]
    //       : null;
    // }

    handleChange(event){
        this.props.onLinkSubmission(event.target.value);
    }
    

    render() {
        console.log(Object.values(this.props));
        const link = this.props.link;
        return (
            <div>
            <form onSubmit={this.props.handleSubmit}>
            <label>
                <input type="text" placeholder="Enter the Youtube Link" size="90" onChange={this.handleChange} value={link}/>
                </label>
                <input type="submit" value="Get Video"/>
            </form>
            </div>
        );

    }
}

export default SearchBar;