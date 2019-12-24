const React = require('react');


class ListItem extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        console.log(this.props.link);
        return(
            <div className="list-item">
                <textarea rows="1" columns="30">{this.props.link}</textarea>
            </div>
        )
    }
}


export default ListItem