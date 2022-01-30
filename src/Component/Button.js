
import styled from 'styled-components';
import './Button.css';
import buttonImage from "../sound/download.png"


const ButtonStyle = styled.button`
    background-color: rgb(137,207,240);
    //background: url(${buttonImage});
    color: grey;
    font-size: calc(1em + 0.5vmin);
    width: 3.2%;
    height: 5%;
    position: absolute;
    top: ${(props) => props.location[0]}%;
    left: ${(props) => props.location[1]}%;
    border-radius: 5px;
    border: 2px solid white;
    margin: 10px 0px;
    z-index:100;
    cursor: pointer;
    Access-Control-Allow-Origin: *
`;



var prevPlaying;
var prevSource


const Play = (event, audioSource) => {
    const sound = new Audio(audioSource);
    if (prevPlaying != null)
    {
        prevPlaying.pause();
    }
    if(prevSource == audioSource){
        prevPlaying.pause();
        sound.pause();
    }
    else{
        sound.play();
        prevPlaying = sound;
        prevSource = audioSource;
    }
}

const Button = ({ name, location, audioSource, description }) => {
    return ( <div class="tooltip"> <ButtonStyle onClick={(event) => Play(event, audioSource)} location={location}><span class="tooltiptext">{description}</span></ButtonStyle>
    </div>);
}

export default Button;