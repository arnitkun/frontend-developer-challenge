
const React = require('react')

// import React, {component} from 'react'
 
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.onLinkSubmission(event.target.value);
    }

    handleSubmit(event){
        console.log("running handle-Submit");
        this.props.onLinkSubmission(event.target.value);
    }
    

    render() {
        console.log(Object.values(this.props));
        const link = this.props.link;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" placeholder="Paste the link here" size="90" onChange={this.handleChange} value={link}/>
                </label>
                {/* <input type="submit" value="Get Video"/> */}
            </form>
            </div>
        );
    }
}

export default SearchBar;