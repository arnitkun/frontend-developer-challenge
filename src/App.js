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
    console.log(this.state.link);
    return (
      <div className="App" width="100%" height="100%">
      <div className="search-bar" align="left"> 
        <SearchBar text={this.state.link}  onChange={this.handleChange} onLinkSubmission={this.onGettingLink}/>
      </div>
      {/* prop to link should be the name of the video not the link */}
      <span><Player link={this.state.link}/></span><span><ListItem link={this.state.value} /></span>
      
    </div>
    
  );
    }
}

export default App
