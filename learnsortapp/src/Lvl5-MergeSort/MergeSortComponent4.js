import React, { Component } from 'react';
import { MergeSort } from './MergeSort';
import { Partition } from './Partition';
import './MergeSortComponent.css'
import { Link } from 'react-router-dom';
import Timer from '../Timer/Timer.js';
import IdleTimer from 'react-idle-timer';

export default class MergeSortComponent extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 50}, () => Math.floor(Math.random() * 100)+1);

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
    let r = Array.from({length: 50}, () => Math.floor(Math.random() * 100)+1);
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
    stepsArray[1] = fragments[2];
    stepsArray[2] = fragments[3];
    stepsArray[3] = fragments[4];
    stepsArray[4] = fragments[8];
    stepsArray[5] = fragments[5];
    stepsArray[6] = fragments[9];
    stepsArray[7] = fragments[6];
    stepsArray[8] = fragments[10];
    stepsArray[9] = fragments[7];
    stepsArray[10] = fragments[11];
    stepsArray[11] = fragments[12];
    stepsArray[12] = fragments[13];
    stepsArray[13] = fragments[14];
    stepsArray[14] = fragments[15];
    stepsArray[15] = fragments[16]
    stepsArray[16] = fragments[17]
    stepsArray[17] = fragments[18]
    stepsArray[18] = fragments[19]
    stepsArray[19] = fragments[20]
    stepsArray[20] = fragments[21]
    stepsArray[21] = fragments[22]
    stepsArray[22] = fragments[23]





    stepsArray[23] = fragments[24]
    stepsArray[24] = fragments[25]
    stepsArray[25] = fragments[26]
    stepsArray[26] = fragments[27]
    stepsArray[27] = fragments[28]
    stepsArray[28] = fragments[29]
    stepsArray[29] = fragments[30]
    stepsArray[30] = fragments[31]
    stepsArray[31] = fragments[32]
    stepsArray[32] = fragments[33]
    stepsArray[33] = fragments[34]
    stepsArray[34] = fragments[35]
    stepsArray[35] = fragments[36]
    stepsArray[36] = fragments[37]
    stepsArray[37] = fragments[38]
    stepsArray[38] = fragments[39]
    stepsArray[39] = fragments[40]
    stepsArray[40] = fragments[41]
    stepsArray[41] = fragments[42]
    stepsArray[42] = fragments[43]
    stepsArray[43] = fragments[44]
    stepsArray[44] = fragments[45]
    stepsArray[45] = fragments[46]
    stepsArray[46] = fragments[47]
    stepsArray[47] = fragments[48]


    stepsArray[48] = fragments[49]
    stepsArray[49] = fragments[50]
    stepsArray[50] = fragments[51]
    stepsArray[51] = fragments[52]
    stepsArray[52] = fragments[53]
    stepsArray[53] = fragments[54]
    stepsArray[54] = fragments[55]
    stepsArray[55] = fragments[56]
    stepsArray[56] = fragments[57]
    stepsArray[57] = fragments[58]
    stepsArray[58] = fragments[59]
    stepsArray[59] = fragments[60]
    stepsArray[60] = fragments[61]
    stepsArray[61] = fragments[62]
    stepsArray[62] = fragments[63]
    stepsArray[63] = fragments[64]
    stepsArray[64] = fragments[65]
    stepsArray[65] = fragments[66]
    stepsArray[66] = fragments[67]
    stepsArray[67] = fragments[68]
    stepsArray[68] = fragments[69]
    stepsArray[69] = fragments[70]
    stepsArray[70] = fragments[71]
    stepsArray[71] = fragments[72]
    stepsArray[72] = fragments[73]
    stepsArray[73] = fragments[74]
    stepsArray[74] = fragments[75]
    stepsArray[75] = fragments[76]
    stepsArray[76] = fragments[77]
    stepsArray[77] = fragments[78]
    stepsArray[78] = fragments[79]

    stepsArray[79] = fragments[80]
    stepsArray[80] = fragments[81]
    stepsArray[81] = fragments[82]
    stepsArray[82] = fragments[83]
    stepsArray[83] = fragments[84]
    stepsArray[84] = fragments[85]
    stepsArray[85] = fragments[86]
    stepsArray[86] = fragments[87]
    stepsArray[87] = fragments[88]
    stepsArray[88] = fragments[89]
    stepsArray[89] = fragments[90]
    stepsArray[90] = fragments[91]
    stepsArray[91] = fragments[92]
    stepsArray[92] = fragments[93]
    stepsArray[93] = fragments[94]
    stepsArray[94] = fragments[95]
    stepsArray[95] = fragments[96]
    stepsArray[96] = fragments[97]
    stepsArray[97] = fragments[98]
    stepsArray[98] = fragments[99]
    stepsArray[99] = fragments[100]



    


    
    
    



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

                  <div className="userInput0" id="userInput0">
                  <form >
                    <label>
                      Step 1:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div><div className="userInput1" id="userInput0">
                  <form >
                    <label>
                      Step 2:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput2" id="userInput0">
                  <form >
                    <label>
                      Step 3:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput3" id="userInput0">
                  <form >
                    <label>
                      Step 4:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput4" id="userInput0">
                  <form >
                    <label>
                      Step 5:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput5" id="userInput0">
                  <form >
                    <label>
                      Step 6:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput6" id="userInput0">
                  <form >
                    <label>
                      Step 7:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput7" id="userInput0">
                  <form >
                    <label>
                      Step 8:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput8" id="userInput0">
                  <form >
                    <label>
                      Step 9:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput9" id="userInput0">
                  <form >
                    <label>
                      Step 10:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput10" id="userInput0">
                  <form >
                    <label>
                      Step 11:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>
                  <div className="userInput11" id="userInput0">
                  <form >
                    <label>
                      Step 12:
                      <input 
                        type="text" 
                        name="userInput"
                        className='number'
                      />
                        </label>
                    </form>
                  </div>



                  {/*<div>{stepsArray[0]}</div>
                  <div>{stepsArray[1]}</div>
                  <div>{stepsArray[2]}</div>
                  <div>{stepsArray[3]}</div>
                  <div>{stepsArray[4]}</div>
                  <div>{stepsArray[5]}</div>
                  <div>{stepsArray[6]}</div>
                  <div>{stepsArray[7]}</div>
                  <div>{stepsArray[8]}</div>
                  <div>{stepsArray[9]}</div>
                  <div>{stepsArray[10]}</div>
                  <div>{stepsArray[11]}</div>
                  <div >{stepsArray[12]}</div>
                  <div >{stepsArray[13]}</div>
                  <div >{stepsArray[14]}</div>
                  <div >{stepsArray[15]}</div>
                  <div >{stepsArray[16]}</div>
                  <div >{stepsArray[17]}</div>
                  <div >{stepsArray[18]}</div>
                  <div >{stepsArray[19]}</div>
                  <div >{stepsArray[20]}</div>
                  <div >{stepsArray[21]}</div>
                  <div >{stepsArray[22]}</div>*/}


                  {/*<div >{stepsArray[23]}</div>
                  <div >{stepsArray[24]}</div>
                  <div >{stepsArray[25]}</div>
                  <div >{stepsArray[26]}</div>
                  <div >{stepsArray[27]}</div>
                  <div >{stepsArray[28]}</div>
                  <div >{stepsArray[29]}</div>
                  <div >{stepsArray[30]}</div>
                  <div >{stepsArray[31]}</div>
                  <div >{stepsArray[32]}</div>
                  <div >{stepsArray[33]}</div>
                  <div >{stepsArray[34]}</div>
                  <div >{stepsArray[35]}</div>
                  <div >{stepsArray[36]}</div>
                  <div >{stepsArray[37]}</div>
                  <div >{stepsArray[38]}</div>
                  <div >{stepsArray[39]}</div>
                  <div >{stepsArray[40]}</div>
                  <div >{stepsArray[41]}</div>
                  <div >{stepsArray[42]}</div>
                  <div >{stepsArray[43]}</div>
                  <div >{stepsArray[44]}</div>
                  <div >{stepsArray[45]}</div>
                  <div >{stepsArray[46]}</div>
                  <div >{stepsArray[47]}</div>
                  <div >{stepsArray[48]}</div>*/}

                  {/*<div >{stepsArray[49]}</div>
                  <div >{stepsArray[50]}</div>
                  <div >{stepsArray[51]}</div>
                  <div >{stepsArray[52]}</div>
                  <div >{stepsArray[53]}</div>
                  <div >{stepsArray[54]}</div>
                  <div >{stepsArray[55]}</div>
                  <div >{stepsArray[56]}</div>
                  <div >{stepsArray[57]}</div>
                  <div >{stepsArray[58]}</div>
                  <div >{stepsArray[59]}</div>

                  <br/>
                  <div >{stepsArray[60]}</div>
                  <div >{stepsArray[61]}</div>
                  <div >{stepsArray[62]}</div>
                  <div >{stepsArray[63]}</div>
                  <div >{stepsArray[64]}</div>
                  <div >{stepsArray[65]}</div>
                  <div >{stepsArray[66]}</div>
                  <div >{stepsArray[67]}</div>
                  <div >{stepsArray[68]}</div>
                  <div >{stepsArray[69]}</div>
                  <div >{stepsArray[70]}</div>
                  
                  <div >{stepsArray[71]}</div>
                  <div >{stepsArray[72]}</div>
                  <div >{stepsArray[73]}</div>
                  <div >{stepsArray[74]}</div>
                  <div >{stepsArray[75]}</div>
                  <div >{stepsArray[76]}</div>
                  <div >{stepsArray[77]}</div>
                  <div >{stepsArray[78]}</div>
                  <div >{stepsArray[79]}</div>
                  <div >{stepsArray[80]}</div>
                  <div >{stepsArray[81]}</div>
                  <div >{stepsArray[82]}</div>
                  <div >{stepsArray[83]}</div>
                  <div >{stepsArray[84]}</div>
                  <div >{stepsArray[85]}</div>
                  <div >{stepsArray[86]}</div>
                  <div >{stepsArray[87]}</div>
                  <div >{stepsArray[88]}</div>
                  <div >{stepsArray[89]}</div>
                  <div >{stepsArray[90]}</div>
                  <div >{stepsArray[91]}</div>
                  <div >{stepsArray[92]}</div>
                  <div >{stepsArray[93]}</div>
                  <div >{stepsArray[94]}</div>
                  <div >{stepsArray[95]}</div>
                  <div >{stepsArray[96]}</div>
                  <div >{stepsArray[97]}</div>
                  <div >{stepsArray[98]}</div>
                  <div >{stepsArray[99]}</div>*/}
                  

                  

                  
                  
                  
                  <br/>
                  <br/>

                  <br/>

                  <br/>

                  <br/>

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
