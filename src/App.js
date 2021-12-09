import logo from './logo.svg';
import './App.css';
import map from './map.jpg'
import GlobalData from './GlobalData'
import React from 'react';
import Button from './Component/Button.js'

import fanfare from "./sound/Fanfare60.wav"
import pinkpanther from "./sound/PinkPanther30.wav"
import preamble from "./sound/preamble.wav"

class App extends React.PureComponent {
  render() {
    let audio1 = new Audio(fanfare)
    let audio2 = new Audio(pinkpanther)
    let audio3 = new Audio(preamble)


    function start1() {
      console.log('tapped');
      new Audio("./sound/Fanfare60.wav").play()
    }

    const start2 = () => {
      audio2.play()
    }

    const start3 = () => {
      audio3.play()
    }

    var list = [];
    // const Buttons = GlobalData['locations'].map((el, i) => {
    //   var newID = el.name;
    //   var id = newID.replace(/ /g, "-");
    //   console.log(id);
    //   list[i] = {
    //     name: el.name,
    //     description: el.description,
    //     location: el.location
    //   }
    //   return <Button key={i} data={el} id={id} location={el.location}></Button>
    // })
    console.log(list)
    return (
      <div className="App">
        <header className="App-header">

          <div class="container">
            <img src={map} alt="Logo" />
            {GlobalData['locations'].map((button) => <Button class="btn1" name={button.name} location={button.location} audioSource={button.audioSource}>13</Button>)}
          </div>


          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
