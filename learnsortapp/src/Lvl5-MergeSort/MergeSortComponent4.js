import React, { Component } from 'react';
import { MergeSort4 } from './MergeSort4';
import { Partition4 } from './Partition4';
import { Link } from 'react-router-dom';
import './MergeSortComponent4.css'
import correctAudio from '../audio/correct_audio_2.mp3';
import wrongAudio from '../audio/wrong_audio_2.wav';

import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent2 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  constructor(props) {
    super(props)
    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        arrayIndex:0,
        textIndex: 1,
        timeout:1000 * 5 * 60,
        attempts: 0
    };
    this.mergeSort2 = new MergeSort4();

    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
  }

  _onAction(e) {
   this.idleTimer.reset();
 }

 _onActive(e) {
   this.idleTimer.reset();
 }

 _onIdle(e) {
   //alert("We've detected you are idle.");
   window.location = "/";
 }

  playCorrectAudio = () => {
    new Audio(correctAudio).play();
  }

  playWrongAudio = () => {
    new Audio(wrongAudio).play();
  }

  closeBoxI(){
    var popup = document.getElementById("myPopupI");
    popup.style.visibility = "hidden"; 
  }

  // random number generator
  randomNum = () => {
    let r = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);
    return r;
  }

  // display the next step in the algorithm with text
  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    this.setState({ textIndex: this.state.textIndex + 1 });
    const i = ["Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!", 
    "Fill in the blanks for the next step!",
    "Level Complete!"];
    
    let elementID = "test" + this.state.arrayIndex;
    let userInputID = "userInput" + this.state.textIndex ;
    let instructionBox = document.getElementById("instruction-box1");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    
    document.getElementById(userInputID).style.display = 'block';

    var popup = document.getElementById("myPopupC");
    popup.style.visibility = "hidden"; 
  }

  // start running the algorithm
  runAlgorithm = () => {
    let partition = new Partition4(0, this.unsorted);
    this.mergeSort2.mergeSort(partition);
    this.setState({partitions: this.mergeSort2.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button1').style.display =  'none'; 
    document.getElementById('instruction-box1').style.display = 'block';
    document.getElementById('instruction').style.display = 'block'; 
    document.getElementById('userInput0').style.display = 'block';
    document.getElementById('return-button1').style.display = 'block';
    document.getElementById('level1-button1').style.display = 'block';
  }


  handleSubmit = (event) => {
    event.preventDefault()

    let answer = [];

    let fragmentNo = "test" + this.state.arrayIndex;
    var length = document.getElementById(fragmentNo).getElementsByClassName('number').length
    for(let i = 0; i < length; i++){
      let value = document.getElementById(fragmentNo).getElementsByClassName('number')[i].innerHTML;
      answer.push(value);
    }

    var popupC = document.getElementById("myPopupC");

    var popupI = document.getElementById("myPopupI");

    var incorrect1 = document.getElementById("IncorrectAttempt1");
    var incorrect2 = document.getElementById("IncorrectAttempt2");
    var incorrect3 = document.getElementById("IncorrectAttempt3");

    if(event.target.userInput.value == answer.toString()){
      popupC.style.visibility = "visible"; 
      this.playCorrectAudio();

      if (this.state.textIndex > 14) {
        document.getElementById('next-button1').style.display = 'none';
        document.getElementById('next-level-button1').style.display = 'block';
      
      }
    }

    else {
      this.setState({attempts: this.state.attempts + 1});
      console.log(this.state.attempts);
      if(this.state.attempts == 0){
        incorrect1.style.visibility = "visible";
      }
      if(this.state.attempts == 1){
        incorrect2.style.visibility = "visible";
      }
      if(this.state.attempts == 2){
        incorrect3.style.visibility = "visible";
      }
      popupI.style.visibility = "visible"; 
      this.playWrongAudio(); 
    }  
    
  }

  render() {
    // get each partition and map each node 
    let fragments = this.state.partitions.map((node, i1) => {
      // for each fragment row
        return <div key={i1} className="fragment">
        {
          node.fragments.map((numbers, i2) =>
          <div className = "test">
            <div className="group" key={i2}>
            {
              numbers.map((number, index) => {
                return <div key={index} className="number" id="number">{number}</div>
              })
            }
            </div>
          </div>
          )
        }    
        </div>        
    });

    function refreshPage() {
      window.location.reload(false);
    }
    
    // steps in correct order
    let stepsArray = []
    stepsArray[0] = fragments[1];
    stepsArray[1] = fragments[9];
    stepsArray[2] = fragments[2];
    stepsArray[3] = fragments[4];
    stepsArray[4] = fragments[5];
    stepsArray[5] = fragments[3];
    stepsArray[6] = fragments[7];
    stepsArray[7] = fragments[8];
    stepsArray[8] = fragments[10];
    stepsArray[9] = fragments[12];
    stepsArray[10] = fragments[13];
    stepsArray[11] = fragments[11];
    stepsArray[12] = fragments[15];
    stepsArray[13] = fragments[16];
    stepsArray[14] = fragments[17];

      return (
        <>
            <div class="contents5">

              <h1 className = "sort-title5">MergeSort</h1>
              <div className = "sort-title-background5" />
              
              <div onClick={refreshPage} className="gen-num-button15">Generate New Numbers</div>
              <Timer/>
              <IdleTimer
                  ref={ref => { this.idleTimer = ref }}
                  element={document}
                  onActive={this.onActive}
                  onIdle={this.onIdle}
                  onAction={this.onAction}
                  debounce={250}
                  timeout={this.state.timeout}  
                  />
              <div className = "outliner15">
                  
                    {/* // will show the initial values (created by random number generator) */}
                    <div className="your-values15">
                      Your Values:
                      <br/><br/>
                    </div>
                    <div className='randomNum15'> { this.unsorted.join(', ') } </div>


                  {
                    this.state.show? <div><h1>
                      {stepsArray}
                    </h1></div> : null
                  }
                  <div onClick={this.runAlgorithm} id="test-button1" className="continue-button15">Start!</div>
                  <div onClick={this.IncrementItem} id="next-button1" class="next-button15">Next Step</div>

                  <Link to='/Level4'>
                    <div id="next-level-button1" className="next-level-button15">Next Level!</div>
                  </Link>

                  <div class="popupC5" id="myPopupC" >
                  <span class="popuptextC5" id="myPopupC"><br/><br/><br/><div id="poptextC">Correct</div><button class="popnextC5" onClick={this.IncrementItem}>Continue</button></span>
                  </div>
                  <div class="popupI5" id="myPopupI">
                  <span class="popuptextI5"><br/><br/><br/><div id="poptextI">Incorrect</div><button class="popnextI5" onClick={this.closeBoxI}>Continue</button></span>
                  </div>

                  <div id="instruction-box1" class="instructions15">Decide what needs to be done at each step!</div>
                  <div id="instruction" class="instruction5">NOTE: Please type all responses in the format x,x,x,x (commas between all values and no spaces between values)</div>

                  <div className="userInput05" id="userInput0">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 1:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput15" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput25" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput35" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput45" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput55" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput65" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput75" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput85" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput95" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput105" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput115" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput125" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 13:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput135" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 14:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput145" id="userInput14">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 15:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput155" id="userInput15"></div>



                  <div className="test05" id="test0">{stepsArray[0]}</div>
                  <div className="test15" id="test1">{stepsArray[1]}</div>
                  <div className="test25" id="test2">{stepsArray[2]}</div>
                  <div className="test35" id="test3">{stepsArray[3]}</div>
                  <div className="test45" id="test4">{stepsArray[4]}</div>
                  <div className="test55" id="test5">{stepsArray[5]}</div>
                  <div className="test65" id="test6">{stepsArray[6]}</div>
                  <div className="test75" id="test7">{stepsArray[7]}</div>
                  <div className="test85" id="test8">{stepsArray[8]}</div>
                  <div className="test95" id="test9">{stepsArray[9]}</div>
                  <div className="test105" id="test10">{stepsArray[10]}</div>
                  <div className="test115" id="test11">{stepsArray[11]}</div>
                  <div className="test125" id="test12">{stepsArray[12]}</div>
                  <div className="test135" id="test13">{stepsArray[13]}</div>
                  <div className="test145" id="test14">{stepsArray[14]}</div>
                  <div className="test155" id="test15"></div>
                  <br/><br/>
                  
                  <Link to='/Level2'>
                    <div id="level1-button1" className="level1-button15">Level 2</div>
                  </Link>
                  <Link to='/Levels'>
                    <div id="return-button1" className="return-button15">Levels Page</div>
                  </Link>
                </div>
                </div>
                
                <div className='incorrect15' id='IncorrectAttempt1'>
                  <h1 >X</h1>
                </div>
                <div className='incorrect25' id='IncorrectAttempt2'>
                  <h1 >X</h1>
                </div>
                <div className='incorrect35' id='IncorrectAttempt3'>
                  <h1 >X</h1>
                </div>
    

        </>
        );
  }
}
