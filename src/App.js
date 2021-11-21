import logo from './logo.svg';
import './App.css';
import map from './map.jpg'
import ButtonAudio from './Component/Button.js';


function App() {
  let audio1 = new Audio("./sound/Fanfare60.wav")
  let audio2 = new Audio("./sound/PinkPanther30.wav")
  let audio3 = new Audio("./sound/preamble.wav")


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

  return (
    <div className="App">
      <header className="App-header">

      <div class="container">
      <img src={map} alt="Logo" />
      <button class="btn1" onClick={start1()}>13</button>
      <button class="btn2" onClick={start2}>2</button>
      <button class="btn3" onClick={start3}>3</button>
      <ButtonAudio />
      </div>
    </header>
    </div>
  );
}


export default App;
