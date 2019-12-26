const React = require('react');


class ListItem extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        console.log(this.props.link);
        const link = this.props.link;
        return(
            <div className="list-item">
                <textarea rows="1" columns="30" value={link}></textarea>
            </div>
        )
    }
}


export default ListItem