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

    //const [counter, setCounter] = useState(0);
    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        arrayIndex:0,
        textIndex: 1,
        timeout:1000 * 5 * 60,
        attempts: 0,
        complete: 0
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
    // To add merging steps:
    // could add multiple text boxes for the merging steps (so like 3), then have to users
    // input their values into all 3 and check their answers at the end (this way we still only have to check if one of them is valid)


    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    this.setState({ textIndex: this.state.textIndex + 1 });
    const i = ["Step 2: Now take the values from the right side of the middle and list them:", 
    "Step 3: Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). List the first half of the left sub-array in step 3, and the individual elements in 3(a) and 3(b):", 
    "Step 4: Now list the right half of the left sub-array in step 4 and the first single element in step 4(a):", 
    "Step 5: Now, we will continue to break down the right half of the left sub-array until each element is separated. Again, find the middle of the array and list the values to the right (and including) that element in step 5, then list the individual elements in step 5(a) and 5(b):", 
    "Step 6: Now that all of our values are separated, we need to compare the individual values and order them in ascending order. Compare 3(a) to 3(b) and select the smallest value to be entered first, then enter the second value.", 
    "Step 7: Compare 4(a) to 5(a). List the smallest element first, then compare 4(a) to 5(b). If 4(a) < 5(b), then list 4(a), otherwise list 5(b). After this, you'll compare 5(a) and 5(b) and list the smallest element next.", 
    "Step 8(a): Select the smallest values from the front of the lists (from step 6 and 7) and add the minimum value to 8(a). Record the remaining values of the lists in 6(a) and 7(a). Step 8(b) and 8(c): Continue to compare the smallest elements until one list is empty. Step 8: Copy the values from 8(a),8(b), and 8(c) then copy the remainder of the second list into the sorted array.", 
    "Step 9: Now starting from the right half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). List the first half of the right sub-array in step 9, and the individual elements in 9(a) and 9(b):", 
    "Step 10: Now list the right half of the right sub-array in step 10 and the first single element in step 10(a): ", 
    "Step 11: Now, we will continue to break down the right half of the right sub-array until each element is separated. Again, find the middle of the array and list the values to the right (and including) that element in step 11, then list the individual elements in step 11(a) and 11(b):", 
    "Step 12: Now that all of our values are separated, we need to compare the individual values and order them in ascending order. Compare 9(a) to 9(b) and select the smallest value to be entered first, then enter the second value.", 
    "Step 13: Compare 10(a) to 11(a). List the smallest element first, then compare 10(a) to 11(b). If 10(a) < 11(b), then list 4(a), otherwise list 11(b). After this, you'll compare 11(a) and 11(b) and list the smallest element next.", 
    "Step 14(a): Select the smallest values from the front of the lists (from step 12 and 13) and add the minimum value to 14(a). Record the remaining values of the lists in 12(a) and 13(a). Step 14(b) and 14(c): Continue to compare the smallest elements until one list is empty. Step 14: Copy the values from 14(a),14(b), and 14(c) then copy the remainder of the second list into the sorted array.", 
    "Step 15: For each part of step 15, compare the first value in step 8 to the first value in step 14. Add the minimum value to the step. You can use the boxes to the left to record the new arrays for step 8 and 14.",
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

    var incorrect1 = document.getElementById("IncorrectAttempt1");
    var incorrect2 = document.getElementById("IncorrectAttempt2");
    var incorrect3 = document.getElementById("IncorrectAttempt3");

    var incorrectOptionsBox = document.getElementById("incorrectOptionsBox");
    if(this.state.textIndex == 3 | this.state.textIndex == 4 | this.state.textIndex == 4 |
      this.state.textIndex == 9 | this.state.textIndex == 10 | this.state.textIndex == 11) {
        // beginning of step 3
        if(this.state.textIndex == 3){
          let response = event.target.extra.value;
          let response1 = event.target.extra1.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response1 != answer[1].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u2').style.background = "red";
            }
            if(response1 != answer[1].toString()){
              document.getElementById('u3').style.background = "red";
            }

            if(response2 != answer.toString()){
              document.getElementById('u50').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u2').style.background = "white";
            document.getElementById('u3').style.background = "white";
            document.getElementById('u50').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 3

        // beginning of step 4
        if(this.state.textIndex == 4){
          let response = event.target.extra.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u4').style.background = "red";
            }
            
            if(response2 != answer.toString()){
              document.getElementById('u51').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u4').style.background = "white";
            document.getElementById('u51').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 4

        // beginning of step 5
        if(this.state.textIndex == 5){
          let response = event.target.extra.value;
          let response1 = event.target.extra1.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response1 != answer[1].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u5').style.background = "red";
            }
            if(response1 != answer[1].toString()){
              document.getElementById('u6').style.background = "red";
            }

            if(response2 != answer.toString()){
              document.getElementById('u52').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u5').style.background = "white";
            document.getElementById('u6').style.background = "white";
            document.getElementById('u52').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 5

        // beginning of step 9
        if(this.state.textIndex == 9){
          let response = event.target.extra.value;
          let response1 = event.target.extra1.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response1 != answer[1].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u7').style.background = "red";
            }
            if(response1 != answer[1].toString()){
              document.getElementById('u8').style.background = "red";
            }

            if(response2 != answer.toString()){
              document.getElementById('u53').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u7').style.background = "white";
            document.getElementById('u8').style.background = "white";
            document.getElementById('u53').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 9

        // beginning of step 10
        if(this.state.textIndex == 10){
          let response = event.target.extra.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u9').style.background = "red";
            }
            
            if(response2 != answer.toString()){
              document.getElementById('u54').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u9').style.background = "white";
            document.getElementById('u54').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 10

        // beginning of step 11
        if(this.state.textIndex == 11){
          let response = event.target.extra.value;
          let response1 = event.target.extra1.value;
          let response2 = event.target.userInput.value;

          if(response != answer[0].toString() | response1 != answer[1].toString() | response2 != answer.toString()){
            if(response != answer[0].toString()) {
              document.getElementById('u10').style.background = "red";
            }
            if(response1 != answer[1].toString()){
              document.getElementById('u11').style.background = "red";
            }

            if(response2 != answer.toString()){
              document.getElementById('u55').style.background = "red";
            }

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
          else {
            popupC.style.visibility = "visible"; 
            document.getElementById('u10').style.background = "white";
            document.getElementById('u11').style.background = "white";
            document.getElementById('u55').style.background = "white";
            this.playCorrectAudio();
          }
        }
        // end of step 11
      }

    else
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

              <h1 className = "sort-title22">MergeSort</h1>
              <div className = "sort-title-background22" />
              
              <div onClick={refreshPage} className="gen-num-button1">Generate New Numbers</div>

                <Timer 
               level = {2} 
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

              <div className = "outlinerLvl2-3">
                  
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
                        id = "u1"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user1" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u1"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user2" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u50"
                      />
                        </label>
                        <label id="l22">
                        3.(a):
                        <input
                          type = "text"
                          name = "extra"
                          id = "u2"
                        />
                        </label>
                      <label id = "l32">
                      3.(b):
                        <input
                          type = "text"
                          name = "extra1"
                          id = "u3"
                        />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user3" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u51"
                      />
                        </label>
                        <label id = "l42">
                      4.(a):
                        <input
<<<<<<< HEAD
                          id = "u42"
=======
                          type = "text"
                          name = "extra"
                          id = "u4"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user4" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
<<<<<<< HEAD
                        id = "u12"
=======
                        id = "u52"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                      />
                        </label>
                      
                      <label id = "l52">
                      5.(a):
                      <input
<<<<<<< HEAD
                          id = "u52"
=======
                          type = "text"
                          name = "extra"
                          id = "u5"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                      </label>
                      <label id = "l62">
                      5.(b):
                        <input
<<<<<<< HEAD
                          id = "u62"
=======
                          type = "text"
                          name = "extra1"
                          id = "u6"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                      </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user5" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u12"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user6" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u12"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user7" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u1"
                      />
                        </label>
                        <label id = "l122">
                      8.(a):
                        <input
                          id = "u122"
                        />
                      </label>
                      <label id = "l152">
                      6.(a):
                        <input
                          id = "u152"
                        />
                      </label>
                      <label id = "l162">
                      7.(a):
                        <input
                          id = "u162"
                        />
                      </label>



                      <label id = "l132">
                      8.(b):
                        <input
                          id = "u132"
                        />
                      </label>
                      <label id = "l172">
                      6.(b):
                        <input
                          id = "u172"
                        />
                      </label>
                      <label id = "l182">
                      7.(b):
                        <input
                          id = "u182"
                        />
                      </label>





                      <label id = "l142">
                      8.(c):
                        <input
                          id = "u142"
                        />
                      </label>
                      <label id = "l192">
                      6.(c):
                        <input
                          id = "u192"
                        />
                      </label>
                      <label id = "l202">
                      7.(c):
                        <input
                          id = "u202"
                        />
                      </label>
                      
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user8" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u53"
                      />
                        </label>
                        <label id = "l72">
                      9.(a):
                      <input
<<<<<<< HEAD
                          id = "u72"
=======
                          type = "text"
                          name = "extra"
                          id = "u7"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                      </label>
                      <label id = "l82">
                      9.(b):
                        <input
<<<<<<< HEAD
                          id = "u82"
=======
                          type = "text"
                          name = "extra1"
                          id = "u8"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                      </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user9" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u54"
                      />
                        </label>
                        <label id = "l92">
                      10.(a):
                        <input
<<<<<<< HEAD
                          id = "u92"
=======
                          type = "text"
                          name = "extra"
                          id = "u9"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user10" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u55"
                      />
                        </label>
                        <label id = "l102">
                      11.(a):
                        <input
<<<<<<< HEAD
                          id = "u102"
=======
                          type = "text"
                          name = "extra"
                          id = "u10"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                        </label>
                        <label id = "l112">
                      11.(b):
                        <input
<<<<<<< HEAD
                          id = "u112"
=======
                          type = "text"
                          name = "extra1"
                          id = "u11"
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
                        />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user11" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u1"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user12" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 13:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u1"
                      />
                        </label>
                        <button class="check-button22" type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="user13" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Step 14:
                      <input 
                        type="text" 
                        name="userInput"
                        id = "u1"
                      />
                        </label>

                        <label id = "l212">
                      14.(a):
                        <input
                          id = "u212"
                        />
                      </label>
                      <label id = "l242">
                      13.(a):
                        <input
                          id = "u242"
                        />
                      </label>
                      <label id = "l252">
                      12.(a):
                        <input
                          id = "u252"
                        />
                      </label>



                      <label id = "l222">
                      14.(b):
                        <input
                          id = "u222"
                        />
                      </label>
                      <label id = "l262">
                      13.(b):
                        <input
                          id = "u262"
                        />
                      </label>
                      <label id = "l272">
                      12.(b):
                        <input
                          id = "u27"
                        />
                      </label>





                      <label id = "l23">
                      14.(c):
                        <input
                          id = "u23"
                        />
                      </label>
                      <label id = "l28">
                      13.(c):
                        <input
                          id = "u28"
                        />
                      </label>
                      <label id = "l29">
                      12.(c):
                        <input
                          id = "u29"
                        />
                      </label>
                        
                        <button class="check-button22" type="submit">Check your answer</button>
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
<<<<<<< HEAD
                        <button class="check-button22" type="submit">Check your answer</button>
=======

                        <label id = "l30">
                      15.(a):
                        <input
                          id = "u30"
                        />
                      </label>
                      <label id = "l38">
                      Leftover Array 8:
                        <input
                          id = "u38"
                        />
                      </label>
                      <label id = "l39">
                      Leftover Array 14:
                        <input
                          id = "u39"
                        />
                      </label>
                      <label id = "l31">
                      15.(b):
                        <input
                          id = "u31"
                        />
                      </label>
                      <label id = "l32">
                      15.(c):
                        <input
                          id = "u32"
                        />
                      </label>
                      <label id = "l33">
                      15.(d):
                        <input
                          id = "u33"
                        />
                      </label>
                      <label id = "l34">
                      15.(e):
                        <input
                          id = "u34"
                        />
                      </label>
                      <label id = "l35">
                      15.(f):
                        <input
                          id = "u35"
                        />
                      </label>
                      <label id = "l36">
                      15.(g):
                        <input
                          id = "u36"
                        />
                      </label>
                      <label id = "l37">
                      15.(h):
                        <input
                          id = "u37"
                        />
                      </label>
                        <button class="check-button" type="submit">Check your answer</button>
>>>>>>> fb9a0813a32959345ddafffc72d3b1d1f26d65e8
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

                <div className='incorrectOptions' id='incorrectOptionsBox'>
                  <br></br>
                  <h1>3 Strikes!</h1>
                  <h2>Please choose one of the following options:</h2>
                  <br></br>
                  <button onClick={refreshPage} className='incorrectOptionButton'>Restart This Level</button>
                  <br></br>
                  <br></br>
                  <Link to='/Level1'>
                    <button className='incorrectOptionButton'>Go Back to Level 1</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to=''>
                    <button className='incorrectOptionButton'>Switch to Another Algorithm (Coming Soon)</button>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to='/'>
                    <button className='incorrectOptionButton'>Quit</button>
                  </Link>
                </div>

                <div className='incorrectGrid22'>
                  <div className='incorrect1' id='IncorrectAttempt1'>
                    X
                  </div>
                  <div className='incorrect2' id='IncorrectAttempt2'>
                    X
                  </div>
                  <div className='incorrect3' id='IncorrectAttempt3'>
                    X
                  </div>
                </div>

               
        </>
        );
  }
}