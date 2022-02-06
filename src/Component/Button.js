import styled from 'styled-components';
import './Button.css';
import buttonImage from "../sound/button.png"
import React, { useState } from 'react';


const ButtonStyle = styled.button`
    //background-color: rgb(137,207,240);
    background: url(${buttonImage});
    background-size: cover;
    font-size: calc(1em + 0.5vmin);
    opacity: ${(props) => props.opacity};
    width: 3%;
    height: 5%;
    position: absolute;
    top: ${(props) => props.location[0]}%;
    left: ${(props) => props.location[1]}%;
    border: none;
    cursor: pointer;
    Access-Control-Allow-Origin: *
    .click:hover {
        transform: scale(0.6);
        transition-duration: 0.5s;
    }
`;



var prevPlaying;

var prevSource


const Play = (event, audioSource, setOpacity) => {
    const sound = new Audio(audioSource);
    if (prevPlaying != null) {
        prevPlaying.pause();
        setOpacity(1);
    }
    if (prevSource == audioSource) {
        prevPlaying.pause();
        sound.pause();
        prevSource = null;
        setOpacity(1);
    }
    else {
        sound.play();
        prevPlaying = sound;
        prevSource = audioSource;
        setOpacity(0.7);
    }
}

const Button = ({ name, location, audioSource, description }) => {
    const [opacity, setOpacity] = useState(1);
    return (<div class="tooltip">
        <ButtonStyle opacity={opacity} onClick={(event) => Play(event, audioSource, setOpacity)} location={location}><span class="tooltiptext">{description}</span></ButtonStyle>
        
    </div>);
}


export default Button;