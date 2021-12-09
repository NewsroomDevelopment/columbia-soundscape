import logo from './logo.svg';
import './App.css';
import map from './map.png'
import GlobalData from './GlobalData'
import React from 'react';
import Button from './Component/Button.js'
import styled from 'styled-components';

const Container = styled.div`

background-image: url(${map});
background-position: center;
background-size:cover;
padding: 30%;
display: block;
left-margin: auto;
right-margin: auto;
top-margin: auto;
bottom-margin: auto;
position: relative;
`;

const StyledDiv = styled.div`
  
  background-color: skyblue;
`;
class App extends React.PureComponent {
  render() {
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
      <Container>
            
            {GlobalData['locations'].map((button) => <Button class="btn1" name={button.name} location={button.location} audioSource={button.audioSource}>13</Button>)}
      </Container>

    );
  }
}


export default App;
