import React, { useRef } from 'react';
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
var prevPlayingName;
var paused;
const Play = (event, audioSource) => {
    const sound = new Audio(audioSource);

    if (prevPlaying != null)
    {
        prevPlaying.pause();
        if (prevPlayingName !== audioSource)
        {
            sound.play();
            prevPlayingName = audioSource;
            prevPlaying = sound;
            paused = false;
        }
        else
        {
            if (paused) { prevPlaying.play();}
            paused = !paused;
        }
    }
    else
    {
        prevPlaying = sound;
        prevPlayingName = audioSource;
        sound.play();
    }

    sound.onended = function()
    {
        prevPlaying = null;
        paused = false;
        prevPlayingName = null;
    }
    prevPlaying.onended = function()
    {
        prevPlaying = null;
        paused = false;
        prevPlayingName = null;
        console.log("reset");
    }
}





const Button = ({ name, location, audioSource }) => {
    return <ButtonStyle onClick={(event) => Play(event, audioSource)} location={location}>{name}</ButtonStyle>;
}

export default Button;