import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    position: absolute;
    top: ${(props) => props.location[0]}%;
    left: ${(props) => props.location[1]}%;
    border-radius: 5px;
    margin: 10px 0px;
    z-index:100;
    cursor: pointer;
    Access-Control-Allow-Origin: *
`;

var prevPlaying;
const Play = (event, audioSource) => {
    console.log(event)
    console.log("played")
    const sound = new Audio(audioSource);
    if (prevPlaying != null)
    {
        prevPlaying.pause();
    }
    sound.play();

    if (sound !== undefined) {
        sound.then(function() {
          // Automatic playback started!
        }).catch(function(error) {
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
        });
    }

    prevPlaying = sound;
}

const Button = ({ name, location, audioSource }) => {
    return <ButtonStyle onClick={(event) => Play(event, audioSource)} location={location}>{name}</ButtonStyle>;
}

export default Button;