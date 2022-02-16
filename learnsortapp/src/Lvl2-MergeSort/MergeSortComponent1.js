import React, { Component } from 'react';
import { MergeSort1 } from './MergeSort1';
import { Partition1 } from './Partition1';
import { Link } from 'react-router-dom';
import './MergeSortComponent1.css'

import correctAudio from '../audio/correct_audio_2.mp3';
import wrongAudio from '../audio/wrong_audio_2.wav';

import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent1 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  constructor(props) {
    super(props)
    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        arrayIndex:0,
        textIndex: 1,
        timeout:1000 * 5 * 60
    };
    this.mergeSort1 = new MergeSort1();

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

  // start running the algorithm
  runAlgorithm = () => {
    let partition = new Partition1(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button1').style.display =  'none'; 
    document.getElementById('instruction-box1').style.display = 'block';
    document.getElementById('instruction').style.display = 'block'; 
    document.getElementById('userInput0').style.display = 'block';
    document.getElementById('return-button1').style.display = 'block';
    document.getElementById('level1-button1').style.display = 'block';
  }

  // display the next step in the algorithm with text
  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    this.setState({ textIndex: this.state.textIndex + 1 });
    const i = ["Step 2: Now take the values from the right side of the middle and list them:", 
    "Step 3: Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). List the first half of the left sub-array:", 
    "Step 4: Now list the right half of the left sub-array:", 
    "Step 5: Now, we will continue to break down the right half of the left sub-array until each element is separated. Again, find the middle of the array and list the values to the right (and including) that element:", 
    "Step 6: Now that all of our values are separated, we need to compare the individual values and order them in ascending order. List the values from the left half of the left sub-array in ascending order:", 
    "Step 7: Order all of the elements from the right half of the left sub-array in ascending order and list them:", 
    "Step 8: Merge all of the left sub-array elements, and list them in ascending order:", 
    "Step 9: We will now repeat the process to the right sub-array. Find the middle value in the array and list the first half of the right sub-array:", 
    "Step 10: Now list the right half of the left sub-array: ", 
    "Step 11: Now, we will continue to break down the right half of the right sub-array until each element is separated. Again, find the middle of the array and list the values to the right (and including) that element:", 
    "Step 12: Now that all of our values are separated, we need to compare the individual values and order them in ascending order. List the values from the left half of the right sub-array in ascending order:", 
    "Step 13: Order all of the elements from the right half of the right sub-array in ascending order and list them:", 
    "Step 14: Merge all of the right sub-array elements, and list them in ascending order:", 
    "Step 15: Merge the now sorted left subarray, and right subarray to get the final sorted array. List the sorted values in ascending order:",
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

    if(event.target.userInput.value == answer.toString()){
      popupC.style.visibility = "visible"; 
      this.playCorrectAudio();

      if (this.state.textIndex > 14) {
        document.getElementById('next-button1').style.display = 'none';
        document.getElementById('next-level-button1').style.display = 'block';
      
      }
    }

    else {
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
            <div class="contents">

              <h1 className = "sort-title">MergeSort</h1>
              <div className = "sort-title-background" />
              
              <div onClick={refreshPage} className="gen-num-button1">Generate New Numbers</div>
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

                  <Link to='/Level3'>
                    <div id="next-level-button1" className="next-level-button1">Next Level!</div>
                  </Link>

                  <div class="popupC" id="myPopupC" >
                  <span class="popuptextC" id="myPopupC"><br/><br/><br/><div id="poptextC">Correct</div><button class="popnextC" onClick={this.IncrementItem}>Continue</button></span>
                  </div>
                  <div class="popupI" id="myPopupI">
                  <span class="popuptextI"><br/><br/><br/><div id="poptextI">Incorrect</div><button class="popnextI" onClick={this.closeBoxI}>Continue</button></span>
                  </div>

                  <div id="instruction-box1" class="instructions1">Step 1: Find the middle of the current array. Take all of the elements to the left side of this value and list them to create the left sub-array.</div>
                  <div id="instruction" class="instruction">NOTE: Please type all responses in the format x,x,x,x (commas between all values and no spaces between values)</div>

                  <div className="userInput0" id="userInput0">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 1:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput1" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput2" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput3" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput4" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput5" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput6" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput7" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput8" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput9" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput10" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput11" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput12" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 13:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput13" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 14:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput14" id="userInput14">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 15:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button class="check-button" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput15" id="userInput15"></div>



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
                  <div className="test15" id="test15"></div>
                  <br/><br/>
                  
                  <Link to='/Level1'>
                    <div id="level1-button1" className="level1-button1">Level 1</div>
                  </Link>
                  <Link to='/Levels'>
                    <div id="return-button1" className="return-button1">Levels Page</div>
                  </Link>
                </div>
                </div>
        </>
        );
  }
}
