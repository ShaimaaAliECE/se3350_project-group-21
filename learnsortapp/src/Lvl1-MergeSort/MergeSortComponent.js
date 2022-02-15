import React, { Component } from 'react';
import { MergeSort } from './MergeSort';
import { Partition } from './Partition';
import './MergeSortComponent.css'
import { Link } from 'react-router-dom';
import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  // MergeSortComponent Constructor
  constructor(props) {
    super(props);
    // create references for partitions and mergesort
    this.state = {partitions:  [], show:false, arrayIndex:0, timeout:1000 * 5 * 60};
    this.mergeSort1 = new MergeSort();
    this.forward = { render: false}
    this.nextStep = this.nextStep.bind(this);

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

  // random number generator
  randomNum(){
    let r = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);
    return r;
  }

  // start running the algorithm
  nextStep(){
    let partition = new Partition(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button').style.display =  'none'; 
    document.getElementById('instruction-box').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('return-button').style.display = 'block'; 
  }

  // display the next step in the algorithm with text
  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    const i = ["Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:","Step 1(b): This is the right side:", 
              "Step 2(a): Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). This is the first half of the left sub-array:", 
              "Step 2(b): This is the second half of the left sub-array:", 
              "Step 3(a): Now, we will continue to break down the left sub-arrays until each element is separated. During this process we will also begin comparing elements to order them in ascending order. ", 
              "Step 3(b): Continue breaking down the sub-arrays into individual elements: ", 
              "Step 4: Now we have all of our elements separated, we can start to compare the elements of the left sub-array and sort them in ascending order.", 
              "Step 5: Merge all of the left sub-array elements, now sorted in ascending order. ", 
              "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", 
              "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", 
              "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", 
              "Step 8(a): Now we can begin comparing all of the right sub-array elements and sort them in ascending order", 
              "Step 8(b): Merge the right sub-arrays in ascending order.", 
              "Step 15: Merge the now sorted left subarray, and right subarray to get the final sorted list."];
    let elementID = "test" + this.state.arrayIndex;
    let instructionBox = document.getElementById("instruction-box");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    document.getElementById(elementID).style.display = 'block';
    document.getElementById(elementID).style.animation = 'pulse 1s';
    document.getElementById(elementID).style.fontSize = '20px';  

    // next button disappears after the final step to avoid having 'undefined' on the text box
    if (this.state.arrayIndex > 13) {
      document.getElementById('next-button').style.display = 'none';
      document.getElementById('next-level-button').style.display = 'block';
    }
  }

  // display the previous step in the algorithm with text
  DecrementItem = () => {
    const i = ["Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:",
    "Step 1(b): This is the right side:", 
    "Step 2(a): Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). This is the first half of the left sub-array:", 
    "Step 2(b): This is the second half of the left sub-array:", 
    "Step 3(a): Now, we will continue to break down the left sub-arrays until each element is separated. During this process we will also begin comparing elements to order them in ascending order. ", 
    "Step 3(b): Continue breaking down the sub-arrays into individual elements: ", 
    "Step 4: Now we have all of our elements separated, we can start to compare the elements of the left sub-array and sort them in ascending order.", 
    "Step 5: Merge all of the left sub-array elements, now sorted in ascending order. ", 
    "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", 
    "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", 
    "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", 
    "Step 8(a): Now we can begin comparing all of the right sub-array elements and sort them in ascending order", 
    "Step 8(b): Merge the right sub-arrays in ascending order.", 
    "Step 15: Merge the now sorted left subarray, and right subarray to get the final sorted list."];

    if (this.state.arrayIndex-1 >= 0) { // to avoid going below zero and printing undefined
      
      let elementID = "test" + (this.state.arrayIndex-1);
      document.getElementById(elementID).style.display = 'none';
    
      let instructionBox = document.getElementById("instruction-box");
      
      let instructionID = '<div>Click "Next Step" to View</div>'

      if (this.state.arrayIndex-1 == 0) { // to avoid printing undefined
        instructionBox.innerHTML = instructionID;
      } else {
        instructionID = i[this.state.arrayIndex-2];
      }

      instructionBox.innerHTML = instructionID;
      this.setState({ arrayIndex: this.state.arrayIndex - 1 });
    }
  }

  render() {
    // take the current partition and turn it into a "fragment"
    let fragments = this.state.partitions.map((node, i1) => {
      // for each fragment, we need to get the specific part of the JSON
        return <div key={i1} className="fragment" >
        {
          node.fragments.map((numbers, i2) =>
          <span>
            <span className="group" key={i2}>
            {
              numbers.map((number, index) => {
                return <span key={index} className="number"> {number} </span>
              })
            }
            </span>
          </span>
          )
        }    
        </div>
              
    });

    // refresh page function
    // will be called every time the user click the random number generator button
    function refreshPage() {
      window.location.reload(false);
    }

    // steps in correct order
    let stepsArray = new Array();
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

              <h1 class = "sort-title">MergeSort</h1>
              <h2 class = "sort-title-background" />
              
              <div onClick={refreshPage} class="gen-num-button">Generate New Numbers</div>
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

              <div class = "outliner">
                    {/* // will show the initial values (created by random number generator) */}
                    <div className="your-values">
                      Your Values:
                      <br/><br/>
                    </div>
                    <div className='randomNum'> { this.unsorted.join(', ') } </div>
                   
                  {
                    this.state.show? <div><h1>
                      {stepsArray}
                      </h1></div> : null
                  }
        
                  <div onClick={this.nextStep} id="test-button" className="continue-button">Run Algorithm</div>
                  <div id="next-button" class="next-button" onClick={this.IncrementItem}>Next Step</div>
                  <Link to='/Level2'>
                    <div id="next-level-button" class="next-level-button">Next Level!</div>
                  </Link>

                  <div id="instruction-box"class="instructions">Click "Next Step" to View</div>

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
                  <br/>
                  <div className="test14" id="test14"><strong>Sorted Array:</strong>{stepsArray[14]}</div>
                  <br/><br/>
                  
                  
                  <div  className="back-button" onClick={this.DecrementItem}>Go Back</div>
                  <Link to='/Levels'>
                    <div id="return-button" className="return-button">Levels Page</div>
                  </Link>
                </div>
                </div>
        </>
        );
  }
}
