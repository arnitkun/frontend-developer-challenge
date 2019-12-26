import React from 'react';
import './App.css';
import SearchBar from './SearchBar'
import Player from './Player'
import ListItem from './ListItem'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {link:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onLinkSubmission = this.onLinkSubmission.bind(this);
    this.onGettingLink = this.onGettingLink.bind(this);
    const url = this.state.link;
    
  }

  onGettingLink(url){
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const template = "https://youtube.com/embed/";

    const match = url.match(regExp);

          if(match&&match[2].length === 11){
            // console.log(match[2]);
            url = template+match[2];
          } else if(match){
            console.log("Please enter a valid url link");
          }
      console.log(template+match[2]);
    this.setState({link: url});
  }

  handleSubmit(){
      //alert('new link!: ' + this.state.value); //play if first in list else push to list
      let url = this.props.link;
      // console.log(link);
      if(!(url.startsWith("https://www.youtube.com"))){
          alert("Please enter a valid youtube video link.");    
      }
      console.log("the link passed is: "+url);
      // this.setState({link: event.target.value});
  }
 

  render(){
    console.log("The state is : "+this.state.link);
    return (
      <div className="App" >
        <div className="SearchBar" align="left">
          <SearchBar text={this.state.link} onLinkSubmission={this.onGettingLink}/>
        </div>
      {/* prop to link should be the name of the video not the link */}
        <div className="videoWrapper">
            <div><Player link={this.state.link}/>
            </div>
        </div>
        <div className="Video-List"><ListItem link={this.state.link}/>
        
        </div>
        
      </div>
  );
    }
}

export default App
