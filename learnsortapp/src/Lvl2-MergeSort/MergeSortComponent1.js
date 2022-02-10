import React, { Component } from 'react';
import { MergeSort1 } from './MergeSort1';
import { Partition1 } from './Partition1';
import './MergeSortComponent1.css'

export default class MergeSortComponent1 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  constructor(props) {
    super(props)
    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        arrayIndex:0
    };
    this.mergeSort1 = new MergeSort1();
  }

  closeBox(){
    var popup = document.getElementById("myPopup");
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
    document.getElementById('next-button1').style.display = 'block'; 
    document.getElementById('userInput0').style.display = 'block';
  }

  // display the next step in the algorithm with text
  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    const i = ["Step 1(b): This is the right side:", "Step 2(a): Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). This is the first half of the left sub-array:", "Step 2(b): This is the second half of the left sub-array:", "Step 3(a): Now, we will continue to break down the left sub-arrays until each element is separated. During this process we will also begin comparing elements to order them in ascending order. ", "Step 3(b): Continue breaking down the sub-arrays into individual elements: ", "Step 4: Now we have all of our elements separated, we can start to compare the elements of the left sub-array and sort them in ascending order.", "Step 5: Merge all of the left sub-array elements, now sorted in ascending order. ", "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", "Step 8(a): Now we can begin comparing all of the right sub-array elements and sort them in ascending order", "Step 8(b): Merge the right sub-arrays in ascending order.", "Step 15: Merge the now sorted left subarray, and right subarray to get the final sorted list."];
    let elementID = "test" + this.state.arrayIndex;
    let userInputID = "userInput" + this.state.arrayIndex;
    let instructionBox = document.getElementById("instruction-box1");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    document.getElementById(elementID).style.display = 'block';
    document.getElementById(elementID).style.animation = 'pulse 1s';
    document.getElementById(elementID).style.fontSize = '20px';  
    document.getElementById(userInputID).style.display = 'block';
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

    var popup = document.getElementById("myPopup");
    var popupText = document.getElementById("poptext");
    popup.style.visibility = "visible"; 

    if(event.target.userInput.value == answer.toString()){
        popupText.innerHTML = "Correct"; 
    }
    else
      popupText.innerHTML = "Incorrect";      
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

              <h1 class = "sort-title">MergeSort</h1>
              <div class = "sort-title-background" />
              
              <div onClick={refreshPage} class="gen-num-button1">Generate New Numbers</div>
  
              <div class = "outliner1">
                  
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
                  <div class="popup" >
                  <span class="popuptext" id="myPopup"><br/><br/><br/><div id="poptext">Correct</div><button class="popnext" onClick={this.closeBox}>Close</button></span>
                  </div>

                  <div id="instruction-box1" class="instructions1">Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:</div>


                  <div className="userInput0" id="userInput0">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput1" id="userInput1">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput2" id="userInput2">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput3" id="userInput3">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput4" id="userInput4">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput5" id="userInput5">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput6" id="userInput6">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput7" id="userInput7">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput8" id="userInput8">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput9" id="userInput9">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput10" id="userInput10">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput11" id="userInput11">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput12" id="userInput12">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput13" id="userInput13">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
                    </form>
                  </div>

                  <div className="userInput14" id="userInput14">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Answer:
                      <input 
                        type="text" 
                        name="userInput"
                      />
                        </label>
                        <button type="submit">Check your answer</button>
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
                  <br/><br/>
                  
                  <div  className="back-button1">Go Back</div>
                </div>
                </div>
        </>
        );
  }
}
