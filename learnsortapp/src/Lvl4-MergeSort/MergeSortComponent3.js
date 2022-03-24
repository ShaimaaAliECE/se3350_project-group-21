import React, { Component } from 'react';
import { MergeSort3 } from './MergeSort3';
import { Partition3 } from './Partition3';
import { Link } from 'react-router-dom';
import './MergeSortComponent3.css'
import correctAudio from '../audio/correct_audio_2.mp3';
import wrongAudio from '../audio/wrong_audio_2.wav';

import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent3 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 20}, () => Math.floor(Math.random() * 50)+1);

  constructor(props) {
    super(props)
    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        arrayIndex:0,
        textIndex: 1,
        timeout:1000 * 5 * 60,
        attempts: 0,
        complete: 0
    };
    this.mergeSort3 = new MergeSort3();

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
    let r = Array.from({length: 20}, () => Math.floor(Math.random() * 50)+1);
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
    let partition = new Partition3(0, this.unsorted);
    this.mergeSort3.mergeSort(partition);
    this.setState({partitions: this.mergeSort3.partitions});

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
      //comment this line out if you want to speed through without correct answers  
      answer.push(value);
    }

    var popupC = document.getElementById("myPopupC");

    var popupI = document.getElementById("myPopupI");

    var incorrect1 = document.getElementById("IncorrectAttempt1");
    var incorrect2 = document.getElementById("IncorrectAttempt2");
    var incorrect3 = document.getElementById("IncorrectAttempt3");

    var incorrectOptionsBox = document.getElementById("incorrectOptionsBox");

    if(event.target.userInput.value == answer.toString()){
      popupC.style.visibility = "visible"; 
      this.playCorrectAudio();

      if (this.state.textIndex > 32) {
        document.getElementById('next-button1').style.display = 'none';
        document.getElementById('next-level-button1').style.display = 'block';
        this.setState({complete: 1});
      }
    }

    else {
      this.setState({attempts: this.state.attempts + 1});
            console.log(this.state.attempts);

            if(this.state.attempts == 0){
              incorrect1.style.visibility = "visible";
              popupI.style.visibility = "visible"; 
            }

            if(this.state.attempts == 1){
              incorrect2.style.visibility = "visible";
              popupI.style.visibility = "visible"; 
            }
            
            if(this.state.attempts == 2){
              incorrect3.style.visibility = "visible";
              popupI.style.visibility = "visible"; 
            }
            if(this.state.attempts >= 3){
              incorrectOptionsBox.style.visibility = "visible";
            }
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
    stepsArray[1] = fragments[19];
    stepsArray[2] = fragments[2];
    stepsArray[3] = fragments[10];
    stepsArray[4] = fragments[3];
    stepsArray[5] = fragments[5];
    stepsArray[6] = fragments[6];
    stepsArray[7] = fragments[4];
    stepsArray[8] = fragments[8];
    stepsArray[9] = fragments[9];
    stepsArray[10] = fragments[11];
    stepsArray[11] = fragments[13];
    stepsArray[12] = fragments[14];
    stepsArray[13] = fragments[12];
    stepsArray[14] = fragments[16];
    stepsArray[15] = fragments[17];
    stepsArray[16] = fragments[18];
    stepsArray[17] = fragments[20];
    stepsArray[18] = fragments[28];
    stepsArray[19] = fragments[21];
    stepsArray[20] = fragments[23];
    stepsArray[21] = fragments[24];
    stepsArray[22] = fragments[22];
    stepsArray[23] = fragments[26];
    stepsArray[24] = fragments[27];
    stepsArray[25] = fragments[29];
    stepsArray[26] = fragments[31];
    stepsArray[27] = fragments[32];
    stepsArray[28] = fragments[30];
    stepsArray[29] = fragments[34];
    stepsArray[30] = fragments[35];
    stepsArray[31] = fragments[36];
    stepsArray[32] = fragments[37];


      return (
        <>
            <div class="contents">

              <h1 className = "sort-title2">MergeSort</h1>
              <div className = "sort-title-background2" />
              
              <div onClick={refreshPage} className="gen-num-button1">Generate New Numbers</div>
              <Timer 
               level = {4} 
               completion = {this.state.complete}/>
              <IdleTimer
                  ref={ref => { this.idleTimer = ref }}
                  element={document}
                  onActive={this.onActive}
                  onIdle={this.onIdle}
                  onAction={this.onAction}
                  debounce={250}
                  timeout={this.state.timeout}  
                  />
              <div className = "outliner11">
                  
                    {/* // will show the initial values (created by random number generator) */}
                    <div className="your-values1">
                      Your Values:
                      <br/><br/>
                    </div>
                    <div className='randomNum1'> { this.unsorted.join(', ') } </div>


                  {
                    this.state.show? <div><h1>
                      {stepsArray}
                    </h1></div> : null
                  }
                  <div onClick={this.runAlgorithm} id="test-button1" className="continue-button1">Start!</div>
                  <div onClick={this.IncrementItem} id="next-button1" class="next-button1">Next Step</div>

                  <Link to='/Level5'>
                    <div id="next-level-button1" className="next-level-button1">Next Level!</div>
                  </Link>
                  <div class="popupC" id="myPopupC" >
                  <span class="popuptextC" id="myPopupC"><br/><br/><br/><div id="poptextC">Correct</div><button class="popnextC" onClick={this.IncrementItem}>Continue</button></span>
                  </div>
                  <div class="popupI" id="myPopupI">
                  <span class="popuptextI"><br/><br/><br/><div id="poptextI">Incorrect</div><button class="popnextI" onClick={this.closeBoxI}>Continue</button></span>
                  </div>

                  <div id="instruction-box1" class="instructions1">Decide what needs to be done at each step!</div>
                  <div id="instruction" class="instruction">NOTE: Please type all responses in the format x,x,x,x (commas between all values and no spaces between values)</div>

                  <div className="userInput0-4" id="userInput0">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 1:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput1-4" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput2-4" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput3-4" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput4-4" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 5 MERGE */}
                      <label id="l5a">
                        5(a):
                      <input 
                        id = "u5a"
                      />
                        </label>
                      <label id="l5b">
                        5(b):
                      <input 
                        id = "u5b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput5-4" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                        {/* LEVEL 6 MERGE */}
                      <label id="l6a">
                      6(a):
                      <input 
                        id = "u6a"
                      />
                      </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput6-4" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 7 MERGE */}
                      <label id="l7a">
                      7(a):
                      <input 
                        id = "u7a"
                      />
                        </label>
                      <label id="l7b">
                      7(b):
                      <input 
                        id = "u7b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput7-4" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput8-4" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput9-4" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 10 MERGE */}
                      <label id="l8">
                      Leftover Array 8:
                      <input 
                        id = "u8"
                      />
                        </label>
                      <label id="l9">
                      Leftover Array 9:
                      <input 
                        id = "u9"
                      />
                        </label>
                      <label id="l10a">
                      10(a):
                      <input 
                        id = "u10a"
                      />
                        </label>
                      <label id="l10b">
                      10(b):
                      <input 
                        id = "u10b"
                      />
                        </label>
                        <label id="l10c">
                      10(c):
                      <input 
                        id = "u10c"
                      />
                        </label>
                      <label id="l10d">
                      10(d):
                      <input 
                        id = "u10d"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput10-4" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                        {/* LEVEL 11 MERGE */}
                      <label id="l11a">
                      11(a):
                      <input 
                        id = "u11a"
                      />
                        </label>
                      <label id="l11b">
                      11(b):
                      <input 
                        id = "u11b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput11-4" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                          {/* LEVEL 12 MERGE */}
                      <label id="l12a">
                      12(a):
                      <input 
                        id = "u12a"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput12-4" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 13:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 13 MERGE */}
                      <label id="l13a">
                      13(a):
                      <input 
                        id = "u13a"
                      />
                        </label>
                      <label id="l13b">
                      13(b):
                      <input 
                        id = "u13b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput13-4" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 14:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput14-4" id="userInput14">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 15:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput15-4" id="userInput15">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 16:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 16 MERGE */}
                      <label id="l15">
                      Leftover Array 15:
                      <input 
                        id = "u15"
                      />
                        </label>
                      <label id="l14">
                      Leftover Array 14:
                      <input 
                        id = "u14"
                      />
                        </label>
                      <label id="l16a">
                      16(a):
                      <input 
                        id = "u16a"
                      />
                        </label>
                      <label id="l16b">
                      16(b):
                      <input 
                        id = "u16b"
                      />
                        </label>
                        <label id="l16c">
                      16(c):
                      <input 
                        id = "u16c"
                      />
                        </label>
                      <label id="l16d">
                      16(d):
                      <input 
                        id = "u16d"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput16-4" id="userInput16">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 17:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 17 MERGE */}
                        <label id = "l10">
                      Leftover Array 10:
                        <input
                          id = "u10"
                        />
                      </label>
                      <label id = "l16">
                      Leftover Array 16:
                        <input
                          id = "u16"
                        />
                      </label>
                      <label id = "l17a">
                      17.(a):
                        <input
                          id = "u17a"
                        />
                      </label>
                      <label id = "l17b">
                      17.(b):
                        <input
                          id = "u17b"
                        />
                      </label>
                      <label id = "l17c">
                      17.(c):
                        <input
                          id = "u17c"
                        />
                      </label>
                      <label id = "l17d">
                      17.(d):
                        <input
                          id = "u17d"
                        />
                      </label>
                      <label id = "l17e">
                      17.(e):
                        <input
                          id = "u17e"
                        />
                      </label>
                      <label id = "l17f">
                      17.(f):
                        <input
                          id = "u17f"
                        />
                      </label>
                      <label id = "l17g">
                      17.(g):
                        <input
                          id = "u17g"
                        />
                      </label>
                      <label id = "l17h">
                      17.(h):
                        <input
                          id = "u17h"
                        />
                      </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput17-4" id="userInput17">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 18:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput18-4" id="userInput18">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 19:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput19-4" id="userInput19">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 20:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                        {/* LEVEL 20 MERGE */}
                        <label id="l20a">
                      20(a):
                      <input 
                        id = "u20a"
                      />
                        </label>
                      <label id="l20b">
                      20(b):
                      <input 
                        id = "u20b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput20-4" id="userInput20">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 21:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                        {/* LEVEL 21 MERGE */}
                        <label id="l21a">
                      21(a):
                      <input 
                        id = "u21a"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput21-4" id="userInput21">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 22:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 22 MERGE */}
                      <label id="l22a">
                      22(a):
                      <input 
                        id = "u22a"
                      />
                        </label>
                      <label id="l22b">
                      22(b):
                      <input 
                        id = "u22b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  
                  <div className="userInput22-4" id="userInput22">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 23:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput23-4" id="userInput23">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 24:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput24-4" id="userInput24">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 25:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"

                      />
                        </label>

                    {/* LEVEL 25 MERGE */}
                    <label id="l23">
                      Leftover Array 23:
                      <input 
                        id = "u23"
                      />
                        </label>
                      <label id="l24">
                      Leftover Array 24:
                      <input 
                        id = "u24"
                      />
                        </label>
                      <label id="l25a">
                      25(a):
                      <input 
                        id = "u25a"
                      />
                        </label>
                      <label id="l25b">
                      25(b):
                      <input 
                        id = "u25b"
                      />
                        </label>
                        <label id="l25c">
                      25(c):
                      <input 
                        id = "u25c"
                      />
                        </label>
                      <label id="l25d">
                      25(d):
                      <input 
                        id = "u25d"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput25-4" id="userInput25">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 26:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 26 MERGE */}
                      <label id="l26a">
                      26(a):
                      <input 
                        id = "u26a"
                      />
                        </label>
                      <label id="l26b">
                      26(b):
                      <input 
                        id = "u26b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput26-4" id="userInput26">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 27:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 27 MERGE */}
                      <label id="l27a">
                      27(a):
                      <input 
                        id = "u27a"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput27-4" id="userInput27">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 28:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                      {/* LEVEL 28 MERGE */}
                      <label id="l28a">
                      28(a):
                      <input 
                        id = "u28a"
                      />
                        </label>
                      <label id="l28b">
                      28(b):
                      <input 
                        id = "u28b"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput28-4" id="userInput28">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 29:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput29-4" id="userInput29">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 30:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput30-4" id="userInput30">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 31:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                    {/* LEVEL 31 MERGE */}
                    <label id="l29">
                      Leftover Array 29:
                      <input 
                        id = "u29"
                      />
                        </label>
                      <label id="l30">
                      Leftover Array 30:
                      <input 
                        id = "u30"
                      />
                        </label>
                      <label id="l31a">
                      31(a):
                      <input 
                        id = "u31a"
                      />
                        </label>
                      <label id="l31b">
                      31(b):
                      <input 
                        id = "u31b"
                      />
                        </label>
                        <label id="l31c">
                      31(c):
                      <input 
                        id = "u31c"
                      />
                        </label>
                      <label id="l31d">
                      Step 31(d):
                      <input 
                        id = "u31d"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput31-4" id="userInput31">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 32:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>

                        {/* LEVEL 32 MERGE */}
                        <label id = "l25">
                      Leftover Array 25:
                        <input
                          id = "u25"
                        />
                      </label>
                      <label id = "l31">
                      Leftover Array 31:
                        <input
                          id = "u31"
                        />
                      </label>
                      <label id = "l32a">
                      32.(a):
                        <input
                          id = "u32a"
                        />
                      </label>
                      <label id = "l32b">
                      32.(b):
                        <input
                          id = "u32b"
                        />
                      </label>
                      <label id = "l32c">
                      32.(c):
                        <input
                          id = "u32c"
                        />
                      </label>
                      <label id = "l32d">
                      32.(d):
                        <input
                          id = "u32d"
                        />
                      </label>
                      <label id = "l32e">
                      32.(e):
                        <input
                          id = "u32e"
                        />
                      </label>
                      <label id = "l32f">
                      32.(f):
                        <input
                          id = "u32f"
                        />
                      </label>
                      <label id = "l32g">
                      32.(g):
                        <input
                          id = "u32g"
                        />
                      </label>
                      <label id = "l32h">
                      32.(h):
                        <input
                          id = "u32h"
                        />
                      </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput32-4" id="userInput32">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 33:
                      <input 
                        type="text" 
                        name="userInput"
                        className="boxSize"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                 



                  <div className="test0" id="test0">{stepsArray[0]}</div>
                  <div className="test1" id="test1">{stepsArray[1]}</div>
                  <div className="test2" id="test2">{stepsArray[2]}</div>
                  <div className="test3" id="test3">{stepsArray[3]}</div>
                  <div className="test4" id="test4">{stepsArray[4]}</div>
                  <div className="test5" id="test5">{stepsArray[5]}</div>
                  <div className="test6" id="test6">{stepsArray[6]}</div>
                  <div className="test7" id="test7">{stepsArray[7]}</div>
                  <div className="test8" id="test8">{stepsArray[8]}</div>
                  <div className="test9" id="test9">{stepsArray[9]}</div>
                  <div className="test10" id="test10">{stepsArray[10]}</div>
                  <div className="test11" id="test11">{stepsArray[11]}</div>
                  <div className="test12" id="test12">{stepsArray[12]}</div>
                  <div className="test13" id="test13">{stepsArray[13]}</div>
                  <div className="test14" id="test14">{stepsArray[14]}</div>
                  <div className="test15" id="test15">{stepsArray[15]}</div>
                  <div className="test16-4" id="test16">{stepsArray[16]}</div>
                  <div className="test17-4" id="test17">{stepsArray[17]}</div>
                  <div className="test18-4" id="test18">{stepsArray[18]}</div>
                  <div className="test19" id="test19">{stepsArray[19]}</div>
                  <div className="test20" id="test20">{stepsArray[20]}</div>
                  <div className="test21" id="test21">{stepsArray[21]}</div>
                  <div className="test22" id="test22">{stepsArray[22]}</div>
                  <div className="test23" id="test23">{stepsArray[23]}</div>
                  <div className="test24" id="test24">{stepsArray[24]}</div>
                  <div className="test25" id="test25">{stepsArray[25]}</div>
                  <div className="test26" id="test26">{stepsArray[26]}</div>
                  <div className="test27" id="test27">{stepsArray[27]}</div>
                  <div className="test28" id="test28">{stepsArray[28]}</div>
                  <div className="test29" id="test29">{stepsArray[29]}</div>
                  <div className="test30" id="test30">{stepsArray[30]}</div>
                  <div className="test31" id="test31">{stepsArray[31]}</div>
                  <div className="test32" id="test32">{stepsArray[32]}</div>
                  <br/><br/>
                  
                  <Link to='/Level3'>
                    <div id="level1-button1" className="level1-button1">Level 3</div>
                  </Link>
                  <Link to='/Levels'>
                    <div id="return-button1" className="return-button1">Levels Page</div>
                  </Link>
                </div>
                </div>
                
                <div className='incorrectOptions4' id='incorrectOptionsBox'>
                  <br></br>
                  <h1>3 Strikes!</h1>
                  <h2>Please choose one of the following options:</h2>
                  <br></br>
                  <button onClick={refreshPage} className='incorrectOptionButton4'>Restart This Level</button>
                  <br></br>
                  <br></br>
                  <Link to='/Level3'>
                    <button className='incorrectOptionButton4'>Go Back to Level 3</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to=''>
                    <button className='incorrectOptionButton4'>Switch to Another Algorithm (Coming Soon)</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to='/'>
                    <button className='incorrectOptionButton4'>Quit</button>
                  </Link>
                </div>

                <div className='incorrectGrid4'>
                  <div className='incorrect14' id='IncorrectAttempt1'>
                    X
                  </div>
                  <div className='incorrect24' id='IncorrectAttempt2'>
                    X
                  </div>
                  <div className='incorrect34' id='IncorrectAttempt3'>
                    X
                  </div>
                </div>
    

        </>
        );
  }
}
