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
    stepsArray[1] = fragments[19];
    stepsArray[2] = fragments[2];
    stepsArray[3] = fragments[10];
    stepsArray[4] = fragments[3];
    stepsArray[5] = fragments[5];
    stepsArray[6] = fragments[11];
    stepsArray[7] = fragments[13];
    stepsArray[8] = fragments[7];
    stepsArray[9] = fragments[4];
    stepsArray[10] = fragments[8];
    stepsArray[11] = fragments[9];
    stepsArray[12] = fragments[15];
    stepsArray[13] = fragments[12];
    stepsArray[14] = fragments[16];
    stepsArray[15] = fragments[17];
    stepsArray[16] = fragments[18];
    stepsArray[17] = fragments[20];
    stepsArray[18] = fragments[28];
    stepsArray[19] = fragments[21];
    stepsArray[20] = fragments[23];
    stepsArray[21] = fragments[29];
    stepsArray[22] = fragments[31];
    stepsArray[23] = fragments[25];
    stepsArray[24] = fragments[22];
    stepsArray[25] = fragments[26];
    stepsArray[26] = fragments[27];
    stepsArray[27] = fragments[33];
    stepsArray[28] = fragments[30];
    stepsArray[29] = fragments[34];
    stepsArray[30] = fragments[35];
    stepsArray[31] = fragments[36];
    stepsArray[32] = fragments[37];


      return (
        <>
            <div class="contents">

              <h1 className = "sort-title">MergeSort</h1>
              <div className = "sort-title-background" />
              
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
              <div className = "outliner1">
                  
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
                
                <div className='incorrect1' id='IncorrectAttempt1'>
                  <h1 >X</h1>
                </div>
                <div className='incorrect2' id='IncorrectAttempt2'>
                  <h1 >X</h1>
                </div>
                <div className='incorrect3' id='IncorrectAttempt3'>
                  <h1 >X</h1>
                </div>
    

        </>
        );
  }
}
