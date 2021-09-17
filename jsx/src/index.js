// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";



//Create a react component
const App = () => {
  function getTime() {
    return (new Date()).toLocaleTimeString()
  }
  
  function refresh() {
    window.location.reload();
  }
  
  const ButtonText = {  text: 'Click me'};
  const style={ backgroundColor: 'blue', color: 'white'}
  const labelText = 'Hello Enter text'


  return (
    <div style={{ backgroundColor: 'red', color: 'white'}} className="div">
      <label htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button  style={style} onClick={refresh}>{ButtonText.text}</button><br />
      <h1>Time</h1><h2>{getTime()}</h2>
    </div>
  )
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
