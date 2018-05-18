import React from 'react'

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtitle: "This is a subtitle" };
    this.handleSubtitleClick = this.handleSubtitleClick.bind(this); //event is passed noneless
  }
  
  handleSubtitleClick(event) {
    if (event.target.value)
      this.setState({subtitle: event.target.value});
  }

  render() {
    return (<div>
      <h1>Sandbox to play with React</h1>
      <h2>Updating the sub-title by clicking buttons - passing value</h2>
      <hr />
        
      <Subtitle text={this.state.subtitle} />
      <button onClick={this.handleSubtitleClick} value="This is subtitle">Click me!!!!</button>
      <button onClick={this.handleSubtitleClick} value="This is the new subtitle">Click for a new text</button>
      <button onClick={this.handleSubtitleClick} value="">Empty value button</button>
    </div>);
  }
}
  
const Subtitle = ({ text }) => (<h2>{text}</h2>);

export default Application
