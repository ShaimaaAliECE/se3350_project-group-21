import React, { Component } from 'react';
import { MergeSort5 } from './MergeSort5';
import { Partition5 } from './Partition5';
import { Link } from 'react-router-dom';
import './Component5.css'
import correctAudio from '../audio/correct_audio_2.mp3';
import wrongAudio from '../audio/wrong_audio_2.wav';

import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent2 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 50}, () => Math.floor(Math.random() * 100)+1);

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
    this.mergeSort2 = new MergeSort5();

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
    let instructionBox = document.getElementById("instruction-box5");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    
    document.getElementById(userInputID).style.display = 'block';

    var popup = document.getElementById("myPopupC");
    popup.style.visibility = "hidden"; 
  }

  // start running the algorithm
  runAlgorithm = () => {
    let partition = new Partition5(0, this.unsorted);
    this.mergeSort2.mergeSort(partition);
    this.setState({partitions: this.mergeSort2.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button5').style.display =  'none'; 
    document.getElementById('instruction-box5').style.display = 'block';
    document.getElementById('instruction5').style.display = 'block'; 
    document.getElementById('userInput0').style.display = 'block';
    document.getElementById('return-button5').style.display = 'block';
    document.getElementById('level-button5').style.display = 'block';
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

    var incorrectOptionsBox = document.getElementById("incorrectOptionsBox5");


    if(event.target.userInput.value == answer.toString()){
      popupC.style.visibility = "visible"; 
      this.playCorrectAudio();

      if (this.state.textIndex > 14) {
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
    stepsArray[0] = fragments[1];//no 1
    stepsArray[1] = fragments[2];
    stepsArray[2] = fragments[3];
    stepsArray[3] = fragments[13];
    stepsArray[4] = fragments[4];    
    stepsArray[5] = fragments[5];
    stepsArray[6] = fragments[6];
    stepsArray[7] = fragments[7];
    stepsArray[8] = fragments[8];
    stepsArray[9] = fragments[9];
    stepsArray[10] = fragments[10];
    stepsArray[11] = fragments[11];
    stepsArray[12] = fragments[12];
    stepsArray[13] = fragments[14];
    stepsArray[14] = fragments[18];
    stepsArray[15] = fragments[15];
    stepsArray[16] = fragments[16];
    stepsArray[17] = fragments[17];
    stepsArray[18] = fragments[19];
    stepsArray[19] = fragments[20];
    stepsArray[20] = fragments[21];
    stepsArray[21] = fragments[22];
    stepsArray[22] = fragments[23];


    stepsArray[23] = fragments[24];
    stepsArray[24] = fragments[25];
    stepsArray[25] = fragments[35];
    stepsArray[26] = fragments[26];
    stepsArray[27] = fragments[30];
    stepsArray[28] = fragments[27];
    stepsArray[29] = fragments[28];
    stepsArray[30] = fragments[29];
    stepsArray[31] = fragments[31];
    stepsArray[32] = fragments[32];
    stepsArray[33] = fragments[33];
    stepsArray[34] = fragments[34];
    stepsArray[35] = fragments[36];
    stepsArray[36] = fragments[40];
    stepsArray[37] = fragments[37];
    stepsArray[38] = fragments[38];
    stepsArray[39] = fragments[39];
    stepsArray[40] = fragments[41];
    stepsArray[41] = fragments[42];
    stepsArray[42] = fragments[43];
    stepsArray[43] = fragments[44];
    stepsArray[44] = fragments[45];
    stepsArray[45] = fragments[46];
    stepsArray[46] = fragments[47];
    stepsArray[47] = fragments[48];

    stepsArray[48] = fragments[49];
    stepsArray[49] = fragments[50];
    stepsArray[50] = fragments[51];
    stepsArray[51] = fragments[61];
    stepsArray[52] = fragments[52];
    stepsArray[53] = fragments[53];
    stepsArray[54] = fragments[54];
    stepsArray[55] = fragments[55];
    stepsArray[56] = fragments[56];
    stepsArray[57] = fragments[57];
    stepsArray[58] = fragments[58];
    stepsArray[59] = fragments[59];
    stepsArray[60] = fragments[60];
    stepsArray[61] = fragments[61];
    stepsArray[62] = fragments[62];
    stepsArray[63] = fragments[63];
    stepsArray[64] = fragments[64];
    stepsArray[65] = fragments[65];
    stepsArray[66] = fragments[66];
    stepsArray[67] = fragments[67];
    stepsArray[68] = fragments[68];
    stepsArray[69] = fragments[69];
    stepsArray[70] = fragments[70];
    stepsArray[71] = fragments[71];
    stepsArray[72] = fragments[72];
    stepsArray[73] = fragments[73];
    stepsArray[74] = fragments[84];
    stepsArray[75] = fragments[74];
    stepsArray[76] = fragments[78];
    stepsArray[77] = fragments[75];
    stepsArray[78] = fragments[76];

    stepsArray[79] = fragments[77];
    stepsArray[80] = fragments[79];
    stepsArray[81] = fragments[80];
    stepsArray[82] = fragments[81];
    stepsArray[83] = fragments[82];
    stepsArray[84] = fragments[83];
    stepsArray[85] = fragments[88];
    stepsArray[86] = fragments[84];
    stepsArray[87] = fragments[85];
    stepsArray[88] = fragments[86];
    stepsArray[89] = fragments[87];
    stepsArray[90] = fragments[89];
    stepsArray[91] = fragments[90];
    stepsArray[92] = fragments[91];
    stepsArray[93] = fragments[92];
    stepsArray[94] = fragments[93];
    stepsArray[95] = fragments[94];
    stepsArray[96] = fragments[95];
    
    

      return (
        <>
            <div class="contents5">

              <h1 className = "sort-title5">MergeSort</h1>
              <div className = "sort-title-background5" />
              
              <div onClick={refreshPage} className="gen-num-button5">Generate New Numbers</div>
              <Timer 
               level = {5} 
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
              <div className = "outliner5">
                  
                    {/* // will show the initial values (created by random number generator) */}
                    <div className="your-values5">
                      Your Values:
                      <br/><br/>
                    </div>
                    <div className='randomNum5'> { this.unsorted.join(', ') } </div>


                  {
                    this.state.show? <div><h1>
                    </h1></div> : null
                  }
                  <div onClick={this.runAlgorithm} id="test-button5" className="continue-button5">Start!</div>
                  <div onClick={this.IncrementItem} id="next-button5" class="next-button5">Next Step</div>

                  <div class="popupC" id="myPopupC" >
                  <span class="popuptextC" id="myPopupC"><br/><br/><br/><div id="poptextC">Correct</div><button class="popnextC" onClick={this.IncrementItem}>Continue</button></span>
                  </div>
                  <div class="popup" id="myPopupI">
                  <span class="popuptext"><br/><br/><br/><div id="poptextI">Incorrect</div><button class="popnextI" onClick={this.closeBoxI}>Continue</button></span>
                  </div>

                  <div id="instruction-box5" class="instructions5">Decide what needs to be done at each step!</div>
                  <div id="instruction5" class="instruction5">NOTE: Please type all responses in the format x,x,x,x (commas between all values and no spaces between values)</div>

                  <div className="userInput0-5" id="userInput0">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 1:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number0'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput1-5" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number1'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput2-5" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number2'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput3-5" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number3'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput4-5" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number4'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput5-5" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number5'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput6-5" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number6'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput7-5" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number7'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput8-5" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number8'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput9-5" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number9'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput10-5" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number10'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput11-5" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number11'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput12-5" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 13:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number12'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput13-5" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 14:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number13'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput14-5" id="userInput14">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 15:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number14'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput15-5" id="userInput15">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 16:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number15'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput16-5" id="userInput16">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 17:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number16'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput17-5" id="userInput17">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 18:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number17'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput18-5" id="userInput18">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 19:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number18'
                      />
                        </label>
                        <button class="check-button-5" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput19" id="userInput19">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 20:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number19'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput20" id="userInput20">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 21:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number20'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput21" id="userInput21">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 22:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number21'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput22" id="userInput22">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 23:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number22'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput23" id="userInput23">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 24:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number23'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput24" id="userInput24">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 25:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number24'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput25" id="userInput25">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 26:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number25'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput26" id="userInput26">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 27:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number26'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput27" id="userInput27">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 28:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number27'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput28" id="userInput28">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 29:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number28'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput29" id="userInput29">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 30:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number29'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput30" id="userInput30">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 31:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number30'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput31" id="userInput31">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 32:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number31'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput32" id="userInput32">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 33:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number32'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput33" id="userInput33">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 34:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number33'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput34" id="userInput34">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 35:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number34'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>


                  <div className="userInput35" id="userInput35">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 36:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number35'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput36" id="userInput36">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 37:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number36'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput37" id="userInput37">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 38:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number37'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput38" id="userInput38">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 39:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number38'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput39" id="userInput39">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 40:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number39'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput40" id="userInput40">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 41:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number40'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput41" id="userInput41">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 42:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number41'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput41" id="userInput41">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 42:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number41'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput42" id="userInput42">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 43:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number42'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput43" id="userInput43">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 44:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number43'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  

                  <div className="userInput44" id="userInput44">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 45:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number44'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput45" id="userInput45">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 46:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number45'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput46" id="userInput46">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 47:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number46'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput47" id="userInput47">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 48:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number47'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput48" id="userInput48">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 49:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number48'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>


                  <div className="userInput49" id="userInput49">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 50:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number49'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput50" id="userInput50">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 51:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number50'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput51" id="userInput51">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 52:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number51'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput52" id="userInput52">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 53:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number52'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput53" id="userInput53">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 54:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number53'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput54" id="userInput54">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 55:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number54'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput55" id="userInput55">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 56:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number55'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput56" id="userInput56">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 57:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number56'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput57" id="userInput57">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 58:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number57'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput58" id="userInput58">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 59:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number58'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput59" id="userInput59">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 60:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number59'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput60" id="userInput60">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 61:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number60'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput61" id="userInput61">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 62:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number61'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput62" id="userInput62">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 63:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number62'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput63" id="userInput63">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 64:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number63'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput64" id="userInput64">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 65:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number64'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput65" id="userInput65">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 66:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number65'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput64" id="userInput64">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 65:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number64'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput65" id="userInput65">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 66:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number65'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput66" id="userInput66">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 67:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number66'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput67" id="userInput67">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 68:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number67'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput68" id="userInput68">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 69:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number68'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput69" id="userInput69">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 70:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number69'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput70" id="userInput70">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 71:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number70'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput71" id="userInput71">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 72:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number71'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput72" id="userInput72">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 73:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number72'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput73" id="userInput73">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 74:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number73'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput74" id="userInput74">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 75:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number74'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput75" id="userInput75">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 76:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number75'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput76" id="userInput76">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 77:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number76'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput77" id="userInput77">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 78:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number77'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  
                  <div className="userInput78" id="userInput78">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 79:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number78'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput79" id="userInput79">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 80:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number79'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput80" id="userInput80">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 81:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number80'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput81" id="userInput81">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 82:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number81'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput82" id="userInput82">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 83:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number82'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput83" id="userInput83">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 84:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number83'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput84" id="userInput84">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 85:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number84'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput85" id="userInput85">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 86:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number85'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput86" id="userInput86">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 87:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number86'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput87" id="userInput87">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 88:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number87'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput88" id="userInput88">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 89:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number88'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput89" id="userInput89">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 90:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number89'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput90" id="userInput90">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 91:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number90'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput91" id="userInput91">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 92:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number91'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput92" id="userInput92">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 93:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number92'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput93" id="userInput93">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 94:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number93'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput94" id="userInput94">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 95:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number94'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput95" id="userInput95">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 96:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number95'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  <div className="userInput96" id="userInput96">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 97:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number96'
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>
                  

            
                  



                  <div className="test0-5" id="test0">{stepsArray[0]}</div>
                  <div className="test1-5" id="test1">{stepsArray[1]}</div>
                  <div className="test2-5" id="test2">{stepsArray[2]}</div>
                  <div className="test3-5" id="test3">{stepsArray[3]}</div>
                  <div className="test4-5" id="test4">{stepsArray[4]}</div>
                  <div className="test5-5" id="test5">{stepsArray[5]}</div>
                  <div className="test6-5" id="test6">{stepsArray[6]}</div>
                  <div className="test7-5" id="test7">{stepsArray[7]}</div>
                  <div className="test8-5" id="test8">{stepsArray[8]}</div>
                  <div className="test9-5" id="test9">{stepsArray[9]}</div>
                  
                  <div className="test10-5" id="test10">{stepsArray[10]}</div>
                  <div className="test11-5" id="test11">{stepsArray[11]}</div>
                  <div className="test12-5" id="test12">{stepsArray[12]}</div>
                  <div className="test13-5" id="test13">{stepsArray[13]}</div>
                  <div className="test14-5" id="test14">{stepsArray[14]}</div>
                  <div className="test15-5" id="test15">{stepsArray[15]}</div>
                  
                  <div className="test16-5" id="test16">{stepsArray[16]}</div>
                  <div className="test17-5" id="test17">{stepsArray[17]}</div>
                  <div className="test18-5" id="test18">{stepsArray[18]}</div>
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

                  <div className="test33" id="test33">{stepsArray[33]}</div>
                  <div className="test34" id="test34">{stepsArray[34]}</div>
                  <div className="test35" id="test35">{stepsArray[35]}</div>
                  <div className="test36" id="test36">{stepsArray[36]}</div>
                  <div className="test37" id="test37">{stepsArray[37]}</div>
                  <div className="test38" id="test38">{stepsArray[38]}</div>
                  <div className="test39" id="test39">{stepsArray[39]}</div>
                  <div className="test40" id="test40">{stepsArray[40]}</div>
                  <div className="test41" id="test41">{stepsArray[41]}</div>
                  <div className="test42" id="test42">{stepsArray[42]}</div>
                  <div className="test43" id="test43">{stepsArray[43]}</div>
                  <div className="test44" id="test44">{stepsArray[44]}</div>

                  <div className="test45" id="test45">{stepsArray[45]}</div>
                  <div className="test46" id="test46">{stepsArray[46]}</div>
                  <div className="test47" id="test47">{stepsArray[47]}</div>
                  <div className="test48" id="test48">{stepsArray[48]}</div>
                  <div className="test49" id="test49">{stepsArray[49]}</div>
                  <div className="test50" id="test50">{stepsArray[50]}</div>
                  <div className="test51" id="test51">{stepsArray[51]}</div>
                  <div className="test52" id="test52">{stepsArray[52]}</div>
                  <div className="test53" id="test53">{stepsArray[53]}</div>
                  <div className="test54" id="test54">{stepsArray[54]}</div>
                  <div className="test55" id="test55">{stepsArray[55]}</div>
                  <div className="test56" id="test56">{stepsArray[56]}</div>

                  <div className="test57" id="test57">{stepsArray[57]}</div>
                  <div className="test58" id="test58">{stepsArray[58]}</div>
                  <div className="test59" id="test59">{stepsArray[59]}</div>
                  <div className="test60" id="test60">{stepsArray[60]}</div>
                  <div className="test61" id="test61">{stepsArray[61]}</div>
                  <div className="test62" id="test62">{stepsArray[62]}</div>
                  <div className="test63" id="test63">{stepsArray[63]}</div>
                  <div className="test64" id="test64">{stepsArray[64]}</div>
                  <div className="test65" id="test65">{stepsArray[65]}</div>
                  <div className="test66" id="test66">{stepsArray[66]}</div>
                  <div className="test67" id="test67">{stepsArray[67]}</div>
                  <div className="test68" id="test68">{stepsArray[68]}</div>
                  
                  <div className="test69" id="test69">{stepsArray[69]}</div>
                  <div className="test70" id="test70">{stepsArray[70]}</div>
                  <div className="test71" id="test71">{stepsArray[71]}</div>
                  <div className="test72" id="test72">{stepsArray[72]}</div>
                  <div className="test73" id="test73">{stepsArray[73]}</div>
                  <div className="test74" id="test74">{stepsArray[74]}</div>
                  <div className="test75" id="test75">{stepsArray[75]}</div>
                  <div className="test76" id="test76">{stepsArray[76]}</div>
                  <div className="test77" id="test77">{stepsArray[77]}</div>
                  <div className="test78" id="test78">{stepsArray[78]}</div>
                  <div className="test79" id="test79">{stepsArray[79]}</div>
                  <div className="test80" id="test80">{stepsArray[80]}</div>
                  
                  <div className="test81" id="test81">{stepsArray[81]}</div>
                  <div className="test82" id="test82">{stepsArray[82]}</div>
                  <div className="test83" id="test83">{stepsArray[83]}</div>
                  <div className="test84" id="test84">{stepsArray[84]}</div>
                  <div className="test85" id="test85">{stepsArray[85]}</div>
                  <div className="test86" id="test86">{stepsArray[86]}</div>
                  <div className="test87" id="test87">{stepsArray[87]}</div>
                  <div className="test88" id="test88">{stepsArray[88]}</div>
                  <div className="test89" id="test89">{stepsArray[89]}</div>
                  <div className="test90" id="test90">{stepsArray[90]}</div>
                  <div className="test91" id="test91">{stepsArray[91]}</div>
                  <div className="test92" id="test92">{stepsArray[92]}</div>
                  <div className="test93" id="test93">{stepsArray[93]}</div>

                  <div className="test94" id="test94">{stepsArray[94]}</div>
                  <div className="test95" id="test95">{stepsArray[95]}</div>
                  <div className="test96" id="test96">{stepsArray[96]}</div>
                  <div className="test97" id="test97">{stepsArray[97]}</div>
                  <div className="test98" id="test98">{stepsArray[98]}</div>
                  <div className="test99" id="test99">{stepsArray[99]}</div>


                  <br/><br/>
                  
                  <Link to='/Levels'>
                    <div id="return-button5" className="return-button5">Levels Page</div>
                  </Link>
                </div>
                </div>
                
                <div className='incorrectOptions5' id='incorrectOptionsBox5'>
                  <br></br>
                  <h1>3 Strikes!</h1>
                  <h2>Please choose one of the following options:</h2>
                  <br></br>
                  <button onClick={refreshPage} className='incorrectOptionButton5'>Restart This Level</button>
                  <br></br>
                  <br></br>
                  <Link to='/Level4'>
                    <button className='incorrectOptionButton5'>Go Back to Level 4</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to=''>
                    <button className='incorrectOptionButton5'>Switch to Another Algorithm</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to='/'>
                    <button className='incorrectOptionButton5'>Quit</button>
                  </Link>
                </div>

                <div className='incorrectGrid-5'>
                  <div className='incorrect1-5' id='IncorrectAttempt1'>
                    X
                  </div>
                  <div className='incorrect2-5' id='IncorrectAttempt2'>
                    X
                  </div>
                  <div className='incorrect3-5' id='IncorrectAttempt3'>
                    X
                  </div>
                </div>
    

        </>
        );
  }
}
