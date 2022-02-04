import React, { Component } from 'react';
import { MergeSort1 } from './MergeSort1';
import { Partition1 } from './Partition1';
import './MergeSortComponent1.css'

export default class MergeSortComponent1 extends Component {

  // Initiliaze unsorted array
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);

  constructor() {
    super();

    // create references for partitions and mergesort
    this.state = {
        partitions:  [], 
        show:false, 
        arrayIndex:0
    };

    this.mergeSort1 = new MergeSort1();
    this.forward = { render: false}
    this.nextStep = this.nextStep.bind(this);

  }

  // random number generator
  randomNum(){
    let r = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);
    return r;
  }


  // start running the algorithm
  nextStep(){
    let partition = new Partition1(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button1').style.display =  'none'; 
    document.getElementById('instruction-box1').style.display = 'block';
    document.getElementById('next-button1').style.display = 'block'; 

  }

  // display the next step in the algorithm with text
  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    const i = ["Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:","Step 1(b): This is the right side:", "Step 2(a): Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). This is the first half of the left sub-array:", "Step 2(b): This is the second half of the left sub-array:", "Step 3(a): Now, we will continue to break down the left sub-arrays until each element is separated. During this process we will also begin comparing elements to order them in ascending order. ", "Step 3(b): Continue breaking down the sub-arrays into individual elements: ", "Step 4: Now we have all of our elements separated, we can start to compare the elements of the left sub-array and sort them in ascending order.", "Step 5: Merge all of the left sub-array elements, now sorted in ascending order. ", "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", "Step 8(a): Now we can begin comparing all of the right sub-array elements and sort them in ascending order", "Step 8(b): Merge the right sub-arrays in ascending order.", "Step 15: Merge the now sorted left subarray, and right subarray to get the final sorted list."];
    let elementID = "test" + this.state.arrayIndex;
    let instructionBox = document.getElementById("instruction-box1");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    document.getElementById(elementID).style.display = 'block';
    document.getElementById(elementID).style.animation = 'pulse 1s';
    document.getElementById(elementID).style.fontSize = '20px';  


  }

  render() {
    // get each partition and map each node 
    let fragments = this.state.partitions.map((node, i1) => {
      // for each fragment row
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

    function handleSubmit(event) {
        event.preventDefault()
        // will not get the correct value of steps array, just returns [object Object]
        if(event.target.answer0.value == stepsArray[0]){
            alert("correct");
        }
        else
            alert("false");
      }
    
      return (
        <>
        
            <div class="contents">

              <h1 class = "sort-title">MergeSort</h1>
              <h2 class = "sort-title-background" />
              
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
        
                  <div>{fragments[1]}</div>
                  <div onClick={this.nextStep} id="test-button1" className="continue-button1">Run Algorithm</div>
              
                  <div>
                    <button id="next-button1" class="next-button1" onClick={this.IncrementItem}>Next Step</button>
                  </div>

                  <div id="instruction-box1" class="instructions1">Click "Next Step" to View</div>

                  <div>
                  <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input 
                            type="text"
                            name="answer0"
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
                  <div className="test14" id="test14">Sorted Array: {stepsArray[14]}</div>
                  <br/><br/>
                  
                  <div  className="back-button1">Go Back</div>
                </div>
                </div>
        </>
        );
  }
}
