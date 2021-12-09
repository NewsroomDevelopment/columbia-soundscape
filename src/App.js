import logo from './logo.svg';
import './App.css';
import map from './map.jpg'
import GlobalData from './GlobalData'
import React from 'react';
import Button from './Component/Button.js'
import styled from 'styled-components';

const Background = styled.div`
  position: relative;
`

const BackgroundImg = styled.img`
  width:100%;
  image-source: map;
  height:auto;	
`

class App extends React.PureComponent {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Background class="container">
          <BackgroundImg alt="Logo" />
          {GlobalData['locations'].map((button) => <Button class="btn1" name={button.name} location={button.location} audioSource={button.audioSource}>13</Button>)}
        </Background>

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
