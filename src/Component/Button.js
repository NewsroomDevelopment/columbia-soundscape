
import styled from 'styled-components';
import './Button.css';


const ButtonStyle = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    width: 10%;
    height: 10%;
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
    const sound = new Audio(audioSource);
    // if (prevPlaying != null)
    // {
    //     prevPlaying.pause();
    // }
    sound.play();
//    prevPlaying = sound;
}

const Button = ({ name, location, audioSource }) => {
    return ( <div class="tooltip"> <ButtonStyle onClick={(event) => Play(event, audioSource)} location={location}>{name}<span class="tooltiptext">Tooltip text</span></ButtonStyle>
    </div>);
}

export default Button;