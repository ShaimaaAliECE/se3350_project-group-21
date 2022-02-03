import React, { Component } from 'react';
import { MergeSort } from './MergeSort';
import { Partition } from './Partition';
import './MergeSortComponent.css'

export default class MergeSortComponent extends Component {

  // Random number generator 
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 21));

  constructor() {
    super();

    // create references for partitions and mergesort
    this.state = {partitions:  [], show:false, arrayIndex:0};
    this.mergeSort1 = new MergeSort();
    this.forward = { render: false}
    this.nextStep = this.nextStep.bind(this);

  }

  randomNum(){
    let r = Array.from({length: 10}, () => Math.floor(Math.random() * 21));
    return r;
  }

  nextStep(){
    let partition = new Partition(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});

    // hiding the run algorithm button if it's clicked
    document.getElementById('test-button').style.display =  'none'; 
    document.getElementById('instruction-box').style.display = 'block';
    document.getElementById('next-button').style.display = 'block'; 

  }

  IncrementItem = () => {
    this.setState({ arrayIndex: this.state.arrayIndex + 1 });
    const i = ["step 1","step 2", "step 3", "step 4", "step 5", "step 6", "step 7", "step 8", "step 9", "step 10", "step 11", "step 12", "step 13", "step 14"];
    let elementID = "test" + this.state.arrayIndex;
    let instructionBox = document.getElementById("instruction-box");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;

    document.getElementById(elementID).style.display = 'block';
    document.getElementById(elementID).style.textAlign = 'center';
    document.getElementById(elementID).style.animation = 'pulse 2s';
    document.getElementById(elementID).style.fontSize = '14px';  


  }

  // will be called after the component is rendered
 /* componentDidMount() {
    // make a partition of the current unsorted array
    let partition = new Partition(0, this.unsorted);
    this.mergeSort1.mergeSort(partition);
    this.setState({partitions: this.mergeSort1.partitions});   
  }*/

  render() {
    // more styling, again it could use some work
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
                {/* will display the first half of each row (before "split from" or "merged from") */}
                
                return <span key={index} className="number"> {number} </span>
              })
            }
            </span>
          </span>
          )
        }
        
        {/* will either be "split from" or "merged from" */}

                {/* will display the first half of the right side (after "split from" or "merged from") */}
              
              
                {/* will display the second half of the right side (after "split from" or "merged from") */}
                
              </div>
              
    });

    let sortedArray = fragments[fragments.length-1]

    function refreshPage() {
      window.location.reload(false);
    }

    // steps in correct order
    let stepsArray = new Array();
    stepsArray[0] = fragments[1];
    stepsArray[1] = fragments[9];
    stepsArray[2] = fragments[2];
    stepsArray[3] = fragments[4];
    stepsArray[4] = fragments[3];
    stepsArray[5] = fragments[5];
    stepsArray[6] = fragments[7];
    stepsArray[7] = fragments[8];
    stepsArray[8] = fragments[10];
    stepsArray[9] = fragments[12];
    stepsArray[10] = fragments[11];
    stepsArray[11] = fragments[13];
    stepsArray[12] = fragments[15];
    stepsArray[13] = fragments[16];
    stepsArray[14] = fragments[17];


      return (
        <>
            <div class="contents">

              <h1 class = "sort-title">MergeSort</h1>
              <h2 class = "sort-title-background" />
              
              <div onClick={refreshPage} class="gen-num-button">Generate New Numbers</div>
  
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
                   

                  {/* <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button> */}
                  
                  <div onClick={this.nextStep} id="test-button" className="continue-button">Run Algorithm</div>
                  <br/>
                  
                  <div>
                    <button id="next-button" class="next-button" onClick={this.IncrementItem}>Next Step</button>
                  </div>

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
                  <div className="test14" id="test14">{stepsArray[14]}</div>
                  <br/><br/>
                  
                  <div className="sorted-array">{sortedArray}</div>
                  <div className='sorted-text'>Sorted List: </div>
                  
                  {/* <div onClick={this.nextStep} className="continue-button">Continue</div> */}
                  <div  className="back-button">Go Back</div>
                
          
                </div>
                

                </div>
         
            {/* this is where the rows of the output are printed
            each fragment is a row of the output, e.g. fragments[0] is row 1... */}
            {/* {fragments} */}
        </>
        );
  }
}