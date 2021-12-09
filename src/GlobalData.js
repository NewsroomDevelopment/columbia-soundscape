import fanfare from "./sound/Fanfare60.wav"
import pinkpanther from "./sound/PinkPanther30.wav"
import preamble from "./sound/preamble.wav"

const GlobalData = {
    locations: [
        {
            name: "poop",
            audioSource: fanfare,
            location: [10, 20],
            description: "this is poopy"
        },
        {
            name: "poop",
            audioSource: pinkpanther,
            location: [20, 20],
            description: "this is poopy"
        }
    ]
}
export default GlobalData;