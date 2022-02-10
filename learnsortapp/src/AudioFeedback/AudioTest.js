import React, {useState, useEffect} from 'react';
import useSound from 'use-sound';
import correct_audio_1 from '../audio/correct_audio_1.mp3';
import correctAudio from '../audio/correct_audio_2.mp3';
import correct_audio_3 from '../audio/correct_audio_3.wav';
import wrong_audio_1 from '../audio/wrong_audio_1.mp3';
import wrongAudio from '../audio/wrong_audio_2.wav';
import wrong_audio_3 from '../audio/wrong_audio_3.wav';

class AudioTest extends React.Component{

  playCorrectAudio = () => {
    new Audio(correctAudio).play();
  }

  playWrongAudio = () => {
    new Audio(wrongAudio).play();
  }

  render() {
    return (
        <div>
          <button onClick={this.playCorrectAudio}>PLAY AUDIO</button>
          <button onClick={this.playWrongAudio}>PLAY AUDIO</button>
        </div>
    );
  }
}

export default AudioTest;

// // just to test things out
// function AudioTest() {

//     const [play] = useSound(
//         correct_audio_1,
//         { volume: 0.5 }
//     );

//     const [play2] = useSound(
//         correct_audio_2,
//         { volume: 0.75 }
//     );

//     const [play3] = useSound(
//         wrong_audio_1,
//         { volume: 0.75 }
//     );
//     const [play4] = useSound(
//         wrong_audio_2,
//         { volume: 0.75 }
//     );

//     const [play5] = useSound(
//         correct_audio_3,
//         { volume: 0.75 }
//     );

//     const [play6] = useSound(
//         wrong_audio_3,
//         { volume: 0.75 }
//     );

//     // audio feedback function
//     const audioFeedback = (event) => {
//         event.preventDefault();
        
//         if (event.target.answer.value == "hello") {
//             play2();
//         }
//         else {
//             play4();
//         }
//     }    

//     return (
//         <>
//             <div>
//                 <form onSubmit={audioFeedback}>
//                     <label>
//                       Answer: 
//                       <input 
//                         name="answer"
//                         type="text" 
//                       />
//                     </label>
//                     <button>Check your answer</button>
//                 </form>
//             </div>
// {/*             
//             <h2>correct feedback</h2>
//             <br></br>
//             <button onClick={play}>correct audio 1</button>
//             <br></br>
//             <button onClick={play2}>correct audio 2</button>

//             <h2>wrong feedback</h2>
//             <br></br>
//             <button onClick={play3}>wrong audio 1</button>
//             <br></br>
//             <button onClick={play4}>wrong audio 2</button>

//             <h2>feedback audio set</h2>
//             <br></br>
//             <button onClick={play5}>correct audio 3</button>
//             <br></br>
//             <button onClick={play6}>wrong audio 3</button> */}
//         </>
//     );
// }

