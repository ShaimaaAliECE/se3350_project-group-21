import React, { Component } from 'react';
import { MergeSort2 } from './MergeSort2';
import { Partition2 } from './Partition2';
import './MergeSortComponent2.css'

export default class MergeSortComponent2 extends Component {

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

   this.mergeSort2 = new MergeSort2();
   this.forward = { render: false}
   this.runAlgorithm = this.runAlgorithm.bind(this);

 }

 // random number generator
 randomNum(){
   let r = Array.from({length: 10}, () => Math.floor(Math.random() * 20)+1);
   return r;
 }


 // start running the algorithm
 runAlgorithm(){
   let partition = new Partition2(0, this.unsorted);
   this.mergeSort2.mergeSort(partition);
   this.setState({partitions: this.mergeSort2.partitions});

   // hiding the run algorithm button if it's clicked
   document.getElementById('test-button1').style.display =  'none'; 
 
   document.getElementById('next-button1').style.display = 'block'; 

 }

 // display the next step in the algorithm with text
 IncrementItem = () => {
   this.setState({ arrayIndex: this.state.arrayIndex + 1 });
  
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

   if(event.target.userInput.value == answer.toString()){
       alert("correct");
   }
   else
       alert("false");       
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

                 <div id="instruction-box1" class="instructions1">Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:</div>
                 <div>
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
                 <div className="test14" id="test14">Sorted Array: {stepsArray[14]}</div>
                 <br/><br/>
                 
                 <div  className="back-button1">Go Back</div>
               </div>
               </div>
       </>
       );
 }
}