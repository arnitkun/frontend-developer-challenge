const React = require('react')

 
class Player extends React.Component {

    
   
    render() {
        console.log(Object.values(this.props));
        return (
            
            <iframe title="player"  align="left" scrolling="no" allowFullScreen
             src={this.props.link}>
             </iframe>
             
        );

    }
}

export default Player