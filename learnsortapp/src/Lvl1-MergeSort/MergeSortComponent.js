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
    this.state = {partitions:  [], show:false, arrayIndex:0, timeout:1000 * 5 * 60, mergeArrayIndex: 0, complete: 0};
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
    document.getElementById('back-button').style.display = 'block'; 
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
              "Step 5(a): Merge all of the left sub-array elements, now sorted in ascending order. ", 
              "Step 5(b): Compare the two highlighted values to get the smaller value.",
              "Step 5(c): Compare the two highlighted values to get the smaller value.",
              "Step 5(d): Compare the two highlighted values to get the smaller value.",
              "Step 5(e): Compare the two highlighted values to get the smaller value.",
              "Step 5(f): Compare the two highlighted values to get the final value.",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", 
              "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", 
              "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", 
              "Step 8: Now we can begin comparing all of the right sub-array elements and sort them in ascending order", 
              "Step 9(a): Merge the right sub-arrays in ascending order.", 
              "Step 9(b): Compare the two highlighted values to get the smaller value.",
              "Step 9(c): Compare the two highlighted values to get the smaller value.",
              "Step 9(d): Compare the two highlighted values to get the smaller value.",
              "Step 9(e): Compare the two highlighted values to get the smaller value.",
              "Step 9(f): Compare the two highlighted values to get the final value.",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Step 10: Merge the now sorted left subarray, and right subarray to get the final sorted list."];

    let elementID = "test" + this.state.arrayIndex;
    let instructionBox = document.getElementById("instruction-box");
    let instructionID = i[this.state.arrayIndex];
    instructionBox.innerHTML = instructionID;
 
    if (elementID !== "test5" && elementID !== "test6" && elementID !== "test7" && elementID !== "test8" 
        && elementID !== "test9" && elementID !== "test10" && elementID !== "test11" && elementID !== "test12"
        && elementID !== "test21" && elementID !== "test22" && elementID !== "test23" && elementID !== "test24" 
        && elementID !== "test25" && elementID !== "test26" && elementID !== "test27" && elementID !== "test28") {
      document.getElementById(elementID).style.display = 'block';
      document.getElementById(elementID).style.animation = 'pulse 1s';
      document.getElementById(elementID).style.fontSize = '20px';  

      document.getElementById("test12").style.backgroundColor = 'white';
      document.getElementById("test9").style.backgroundColor = 'white';
      document.getElementById("test25").style.backgroundColor = 'white';
      document.getElementById("test28").style.backgroundColor = 'white';

    } else if (elementID === "test5") {
      document.getElementById("stepFiveArray").style.animation = 'pulse 1s';
      document.getElementById("stepFiveArray").style.fontSize = '20px';    
    } else if (elementID === "test6") {
      document.getElementById("stepSixArray").style.animation = 'pulse 1s';
      document.getElementById("stepSixArray").style.fontSize = '20px'; 
    } else if (elementID === "test7") {
      document.getElementById("stepSevenArray").style.animation = 'pulse 1s';
      document.getElementById("stepSevenArray").style.fontSize = '20px';   
    } 
    
    // merging step starts
    // getting the first value of the left half array
    else if (elementID === "test8") {
      document.getElementById("test8").style.backgroundColor = 'yellow';
      document.getElementById("test10").style.backgroundColor = 'yellow';
      document.getElementById("test13").style.animation = 'pulse 1s';
    } 
    
    // getting the second value of the left half array
    else if (elementID === "test9") {
      if (parseInt(document.getElementById("test8").value) <= parseInt(document.getElementById("test10").value)) {
        document.getElementById("test8").style.backgroundColor = 'white';
        document.getElementById("test10").style.backgroundColor = 'yellow';

        if (parseInt(document.getElementById("test9").value) <= parseInt(document.getElementById("test11").value)) {
          document.getElementById("test9").style.backgroundColor = 'yellow';
          
        } else if (parseInt(document.getElementById("test9").value) > parseInt(document.getElementById("test11").value)) {
          document.getElementById("test11").style.backgroundColor = 'yellow';
         
        }

        document.getElementById("test14").style.animation = 'pulse 1s'; 
      } 
      else if (parseInt(document.getElementById("test8").value) > parseInt(document.getElementById("test10").value)) {
        document.getElementById("test10").style.backgroundColor = 'white';
        document.getElementById("test8").style.backgroundColor = 'yellow';

        if (parseInt(document.getElementById("test9").value) <= parseInt(document.getElementById("test11").value)) {
          document.getElementById("test9").style.backgroundColor = 'yellow';
       
        } else if (parseInt(document.getElementById("test9").value) > parseInt(document.getElementById("test11").value)) {
          document.getElementById("test11").style.backgroundColor = 'yellow';
   
        }

        document.getElementById("test14").style.animation = 'pulse 1s';
      } 
    }

    // getting the third value of the left half array
    else if (elementID === "test10") {
      // 4 possible cases
      if (document.getElementById("test10").style.backgroundColor === 'yellow' && document.getElementById("test9").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test10").value) <= parseInt(document.getElementById("test9").value)) {
          document.getElementById("test10").style.backgroundColor = 'white';
          document.getElementById("test9").style.backgroundColor = 'yellow';

          document.getElementById("test11").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test10").value) > parseInt(document.getElementById("test9").value)) {
          document.getElementById("test9").style.backgroundColor = 'white';
          document.getElementById("test10").style.backgroundColor = 'yellow';

          document.getElementById("test11").style.backgroundColor = 'yellow';
        }

        document.getElementById("test15").style.animation = 'pulse 1s';

      } else if (document.getElementById("test10").style.backgroundColor === 'yellow' && document.getElementById("test11").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test10").value) <= parseInt(document.getElementById("test11").value)) {
          document.getElementById("test10").style.backgroundColor = 'white';
          document.getElementById("test11").style.backgroundColor = 'yellow';

          document.getElementById("test9").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test10").value) > parseInt(document.getElementById("test11").value)) {
          document.getElementById("test11").style.backgroundColor = 'white';
          document.getElementById("test10").style.backgroundColor = 'yellow';

          document.getElementById("test9").style.backgroundColor = 'yellow';
        }

        document.getElementById("test15").style.animation = 'pulse 1s';

      } else if (document.getElementById("test8").style.backgroundColor === 'yellow' && document.getElementById("test9").style.backgroundColor === 'yellow') {
        document.getElementById("test8").style.backgroundColor = 'white';
        document.getElementById("test9").style.backgroundColor = 'yellow';

        document.getElementById("test11").style.backgroundColor = 'yellow';

        document.getElementById("test15").style.animation = 'pulse 1s';

      } else if (document.getElementById("test8").style.backgroundColor === 'yellow' && document.getElementById("test11").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test8").value) <= parseInt(document.getElementById("test11").value)) {
          document.getElementById("test8").style.backgroundColor = 'white';
          document.getElementById("test11").style.backgroundColor = 'yellow';

          document.getElementById("test9").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test8").value) > parseInt(document.getElementById("test11").value)) {
          document.getElementById("test11").style.backgroundColor = 'white';
          document.getElementById("test8").style.backgroundColor = 'yellow';

          document.getElementById("test9").style.backgroundColor = 'yellow';
        }

        document.getElementById("test15").style.animation = 'pulse 1s';
      }
    }

    // getting the fourth value of the left half array
    else if (elementID === "test11") {
      if (document.getElementById("test9").style.backgroundColor === 'yellow' && document.getElementById("test11").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test9").value) <= parseInt(document.getElementById("test11").value)) {
          document.getElementById("test9").style.backgroundColor = 'white';
          document.getElementById("test11").style.backgroundColor = 'yellow';

          document.getElementById("test12").style.backgroundColor = 'yellow';

        } else if (parseInt(document.getElementById("test9").value) > parseInt(document.getElementById("test11").value)) {
          document.getElementById("test11").style.backgroundColor = 'white';
          document.getElementById("test9").style.backgroundColor = 'yellow';

          document.getElementById("test12").style.backgroundColor = 'yellow';
        }

        document.getElementById("test16").style.animation = 'pulse 1s';

      } else if (document.getElementById("test10").style.backgroundColor === 'yellow' && document.getElementById("test11").style.backgroundColor === 'yellow') {
        document.getElementById("test10").style.backgroundColor = 'white';
        document.getElementById("test11").style.backgroundColor = 'yellow';

        document.getElementById("test12").style.backgroundColor = 'yellow';

        document.getElementById("test16").style.animation = 'pulse 1s';

      } else if (document.getElementById("test9").style.backgroundColor === 'yellow' && document.getElementById("test10").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test9").value) <= parseInt(document.getElementById("test10").value)) {
          document.getElementById("test9").style.backgroundColor = 'white';
          document.getElementById("test10").style.backgroundColor = 'yellow';

          document.getElementById("test11").style.backgroundColor = 'yellow';

        } else if (parseInt(document.getElementById("test9").value) > parseInt(document.getElementById("test10").value)) {
          document.getElementById("test10").style.backgroundColor = 'white';
          document.getElementById("test9").style.backgroundColor = 'yellow';

          document.getElementById("test11").style.backgroundColor = 'yellow';
        }

        document.getElementById("test16").style.animation = 'pulse 1s';
        
      } else if (document.getElementById("test8").style.backgroundColor === 'yellow' && document.getElementById("test9").style.backgroundColor === 'yellow') {
        document.getElementById("test8").style.backgroundColor = 'white';
        document.getElementById("test9").style.backgroundColor = 'yellow';

        document.getElementById("test12").style.backgroundColor = 'yellow';

        document.getElementById("test16").style.animation = 'pulse 1s';
      }
    }

    // getting the fifth value of the left half array
    else if (elementID === "test12") {
      if (document.getElementById("test11").style.backgroundColor === 'yellow' && document.getElementById("test12").style.backgroundColor === 'yellow') {
        document.getElementById("test11").style.backgroundColor = 'white';
        document.getElementById("test12").style.backgroundColor = 'yellow';
        document.getElementById("test17").style.animation = 'pulse 1s';
      } else if (document.getElementById("test9").style.backgroundColor === 'yellow' && document.getElementById("test12").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test9").value) <= parseInt(document.getElementById("test12").value)) {
          document.getElementById("test9").style.backgroundColor = 'white';
          document.getElementById("test12").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test9").value) > parseInt(document.getElementById("test12").value)) {
          document.getElementById("test9").style.backgroundColor = 'yellow';
          document.getElementById("test12").style.backgroundColor = 'white';
        }
        document.getElementById("test17").style.animation = 'pulse 1s';
      } else if (document.getElementById("test10").style.backgroundColor === 'yellow' && document.getElementById("test11").style.backgroundColor === 'yellow') {
        document.getElementById("test11").style.backgroundColor = 'white';
        document.getElementById("test12").style.backgroundColor = 'yellow';
        document.getElementById("test17").style.animation = 'pulse 1s';
      }

      this.setState({ arrayIndex: this.state.arrayIndex + 6 });
    }
    // end of left half merging steps

    // right half
    else if (elementID === "test21") {
      document.getElementById("step11Array").style.animation = 'pulse 1s';
      document.getElementById("step11Array").style.fontSize = '20px';    
    } else if (elementID === "test22") {
      document.getElementById("step12Array").style.animation = 'pulse 1s';
      document.getElementById("step12Array").style.fontSize = '20px'; 
    } else if (elementID === "test23") {
      document.getElementById("step13Array").style.animation = 'pulse 1s';
      document.getElementById("step13Array").style.fontSize = '20px';   
    } 
    
    // merging step starts
    // getting the first value of the right half array
    else if (elementID === "test24") {
      document.getElementById("test24").style.backgroundColor = 'yellow';
      document.getElementById("test26").style.backgroundColor = 'yellow';
      document.getElementById("test29").style.animation = 'pulse 1s';
    } 
    
    // getting the second value of the right half array
    else if (elementID === "test25") {
      if (parseInt(document.getElementById("test24").value) <= parseInt(document.getElementById("test26").value)) {
        document.getElementById("test24").style.backgroundColor = 'white';
        document.getElementById("test26").style.backgroundColor = 'yellow';

        if (parseInt(document.getElementById("test25").value) <= parseInt(document.getElementById("test27").value)) {
          document.getElementById("test25").style.backgroundColor = 'yellow';
          
        } else if (parseInt(document.getElementById("test25").value) > parseInt(document.getElementById("test27").value)) {
          document.getElementById("test27").style.backgroundColor = 'yellow';
         
        }

        document.getElementById("test30").style.animation = 'pulse 1s'; 
      } 
      else if (parseInt(document.getElementById("test24").value) > parseInt(document.getElementById("test26").value)) {
        document.getElementById("test26").style.backgroundColor = 'white';
        document.getElementById("test24").style.backgroundColor = 'yellow';

        if (parseInt(document.getElementById("test25").value) <= parseInt(document.getElementById("test27").value)) {
          document.getElementById("test25").style.backgroundColor = 'yellow';
       
        } else if (parseInt(document.getElementById("test25").value) > parseInt(document.getElementById("test27").value)) {
          document.getElementById("test27").style.backgroundColor = 'yellow';
   
        }

        document.getElementById("test30").style.animation = 'pulse 1s';
      } 
    }

    // getting the third value of the right half array
    else if (elementID === "test26") {
      // 4 possible cases
      if (document.getElementById("test26").style.backgroundColor === 'yellow' && document.getElementById("test25").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test26").value) <= parseInt(document.getElementById("test25").value)) {
          document.getElementById("test26").style.backgroundColor = 'white';
          document.getElementById("test25").style.backgroundColor = 'yellow';

          document.getElementById("test27").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test26").value) > parseInt(document.getElementById("test25").value)) {
          document.getElementById("test25").style.backgroundColor = 'white';
          document.getElementById("test26").style.backgroundColor = 'yellow';

          document.getElementById("test27").style.backgroundColor = 'yellow';
        }

        document.getElementById("test31").style.animation = 'pulse 1s';

      } else if (document.getElementById("test26").style.backgroundColor === 'yellow' && document.getElementById("test27").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test26").value) <= parseInt(document.getElementById("test27").value)) {
          document.getElementById("test26").style.backgroundColor = 'white';
          document.getElementById("test27").style.backgroundColor = 'yellow';

          document.getElementById("test25").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test26").value) > parseInt(document.getElementById("test27").value)) {
          document.getElementById("test27").style.backgroundColor = 'white';
          document.getElementById("test26").style.backgroundColor = 'yellow';

          document.getElementById("test25").style.backgroundColor = 'yellow';
        }

        document.getElementById("test31").style.animation = 'pulse 1s';

      } else if (document.getElementById("test24").style.backgroundColor === 'yellow' && document.getElementById("test25").style.backgroundColor === 'yellow') {
        document.getElementById("test24").style.backgroundColor = 'white';
        document.getElementById("test25").style.backgroundColor = 'yellow';

        document.getElementById("test27").style.backgroundColor = 'yellow';

        document.getElementById("test31").style.animation = 'pulse 1s';

      } else if (document.getElementById("test24").style.backgroundColor === 'yellow' && document.getElementById("test27").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test24").value) <= parseInt(document.getElementById("test27").value)) {
          document.getElementById("test24").style.backgroundColor = 'white';
          document.getElementById("test27").style.backgroundColor = 'yellow';

          document.getElementById("test25").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test24").value) > parseInt(document.getElementById("test27").value)) {
          document.getElementById("test27").style.backgroundColor = 'white';
          document.getElementById("test24").style.backgroundColor = 'yellow';

          document.getElementById("test25").style.backgroundColor = 'yellow';
        }

        document.getElementById("test31").style.animation = 'pulse 1s';
      }
    }

    // getting the fourth value of the right half array
    else if (elementID === "test27") {
      if (document.getElementById("test25").style.backgroundColor === 'yellow' && document.getElementById("test27").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test25").value) <= parseInt(document.getElementById("test27").value)) {
          document.getElementById("test25").style.backgroundColor = 'white';
          document.getElementById("test27").style.backgroundColor = 'yellow';

          document.getElementById("test28").style.backgroundColor = 'yellow';

        } else if (parseInt(document.getElementById("test25").value) > parseInt(document.getElementById("test27").value)) {
          document.getElementById("test27").style.backgroundColor = 'white';
          document.getElementById("test25").style.backgroundColor = 'yellow';

          document.getElementById("test28").style.backgroundColor = 'yellow';
        }

        document.getElementById("test32").style.animation = 'pulse 1s';

      } else if (document.getElementById("test26").style.backgroundColor === 'yellow' && document.getElementById("test27").style.backgroundColor === 'yellow') {
        document.getElementById("test26").style.backgroundColor = 'white';
        document.getElementById("test27").style.backgroundColor = 'yellow';

        document.getElementById("test28").style.backgroundColor = 'yellow';

        document.getElementById("test32").style.animation = 'pulse 1s';

      } else if (document.getElementById("test25").style.backgroundColor === 'yellow' && document.getElementById("test26").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test25").value) <= parseInt(document.getElementById("test26").value)) {
          document.getElementById("test25").style.backgroundColor = 'white';
          document.getElementById("test26").style.backgroundColor = 'yellow';

          document.getElementById("test27").style.backgroundColor = 'yellow';

        } else if (parseInt(document.getElementById("test25").value) > parseInt(document.getElementById("test26").value)) {
          document.getElementById("test26").style.backgroundColor = 'white';
          document.getElementById("test25").style.backgroundColor = 'yellow';

          document.getElementById("test27").style.backgroundColor = 'yellow';
        }

        document.getElementById("test32").style.animation = 'pulse 1s';
        
      } else if (document.getElementById("test24").style.backgroundColor === 'yellow' && document.getElementById("test25").style.backgroundColor === 'yellow') {
        document.getElementById("test24").style.backgroundColor = 'white';
        document.getElementById("test25").style.backgroundColor = 'yellow';

        document.getElementById("test28").style.backgroundColor = 'yellow';

        document.getElementById("test32").style.animation = 'pulse 1s';
      }
    }

    // getting the fifth value of the right half array
    else if (elementID === "test28") {
      if (document.getElementById("test27").style.backgroundColor === 'yellow' && document.getElementById("test28").style.backgroundColor === 'yellow') {
        document.getElementById("test27").style.backgroundColor = 'white';
        document.getElementById("test28").style.backgroundColor = 'yellow';
        document.getElementById("test33").style.animation = 'pulse 1s';

      } else if (document.getElementById("test25").style.backgroundColor === 'yellow' && document.getElementById("test28").style.backgroundColor === 'yellow') {
        if (parseInt(document.getElementById("test25").value) <= parseInt(document.getElementById("test28").value)) {
          document.getElementById("test25").style.backgroundColor = 'white';
          document.getElementById("test28").style.backgroundColor = 'yellow';
        } else if (parseInt(document.getElementById("test25").value) > parseInt(document.getElementById("test28").value)) {
          document.getElementById("test25").style.backgroundColor = 'yellow';
          document.getElementById("test28").style.backgroundColor = 'white';
        }
        document.getElementById("test33").style.animation = 'pulse 1s';
      } else if (document.getElementById("test26").style.backgroundColor === 'yellow' && document.getElementById("test27").style.backgroundColor === 'yellow') {
        document.getElementById("test27").style.backgroundColor = 'white';
        document.getElementById("test28").style.backgroundColor = 'yellow';
        document.getElementById("test33").style.animation = 'pulse 1s';
      }

      this.setState({ arrayIndex: this.state.arrayIndex + 6 });
    }
    // end of merging steps (right half)

    // next button disappears after the final step to avoid having 'undefined' on the text box
    if (this.state.arrayIndex > 33) {
      document.getElementById('next-button').style.display = 'none';
      document.getElementById('next-level-button').style.display = 'block';
      this.setState({complete: 1});
    }

    let answer = [];

    let fragmentNo = "test" + this.state.arrayIndex;
    var length = document.getElementById(fragmentNo).getElementsByClassName('number').length
    for(let i = 0; i < length; i++){
      let value = document.getElementById(fragmentNo).getElementsByClassName('number')[i].innerHTML;
      answer.push(value);
    }
    // will display the whole fragment
    // alert(answer)

    // will display only the first number of the fragment
    // alert(answer[0])

    // split the fragments into individual numbers (will probably require hard coding)
    if(this.state.arrayIndex === 5){
        document.getElementById('test8').innerHTML += answer[0];
        document.getElementById('test8').value = answer[0];

        document.getElementById('test9').innerHTML += answer[1];
        document.getElementById('test9').value = answer[1];
    }

    if(this.state.arrayIndex === 6){
      document.getElementById('test10').innerHTML += answer[0];
      document.getElementById('test10').value = answer[0];

      document.getElementById('test11').innerHTML += answer[1];
      document.getElementById('test11').value = answer[1];

      document.getElementById('test12').innerHTML += answer[2];
      document.getElementById('test12').value = answer[2];
    }

    if(this.state.arrayIndex === 7){
      document.getElementById('test13').innerHTML += answer[0];
      document.getElementById('test13').value = answer[0];

      document.getElementById('test14').innerHTML += answer[1];
      document.getElementById('test14').value = answer[1];

      document.getElementById('test15').innerHTML += answer[2];
      document.getElementById('test15').value = answer[2];

      document.getElementById('test16').innerHTML += answer[3];
      document.getElementById('test16').value = answer[3];

      document.getElementById('test17').innerHTML += answer[4];
      document.getElementById('test17').value = answer[4];
    }

    if(this.state.arrayIndex === 21){
      document.getElementById('test24').innerHTML += answer[0];
      document.getElementById('test24').value = answer[0];

      document.getElementById('test25').innerHTML += answer[1];
      document.getElementById('test25').value = answer[1];
    }

    if(this.state.arrayIndex === 22){
      document.getElementById('test26').innerHTML += answer[0];
      document.getElementById('test26').value = answer[0];

      document.getElementById('test27').innerHTML += answer[1];
      document.getElementById('test27').value = answer[1];

      document.getElementById('test28').innerHTML += answer[2];
      document.getElementById('test28').value = answer[2];
    }

    if(this.state.arrayIndex === 23){
      document.getElementById('test29').innerHTML += answer[0];
      document.getElementById('test29').value = answer[0];

      document.getElementById('test30').innerHTML += answer[1];
      document.getElementById('test30').value = answer[1];

      document.getElementById('test31').innerHTML += answer[2];
      document.getElementById('test31').value = answer[2];

      document.getElementById('test32').innerHTML += answer[3];
      document.getElementById('test32').value = answer[3];

      document.getElementById('test33').innerHTML += answer[4];
      document.getElementById('test33').value = answer[4];
    }
  }

  // display the previous step in the algorithm with text
  DecrementItem = () => {
    const i = ["Step 1(a): Find the middle index of the array, and divide the array into two parts from the middle. This is the left side:","Step 1(b): This is the right side:", 
              "Step 2(a): Now starting from the left half of the array, we are going to continue to divide each sub-array in half (as evenly as possible). This is the first half of the left sub-array:", 
              "Step 2(b): This is the second half of the left sub-array:", 
              "Step 3(a): Now, we will continue to break down the left sub-arrays until each element is separated. During this process we will also begin comparing elements to order them in ascending order. ", 
              "Step 3(b): Continue breaking down the sub-arrays into individual elements: ", 
              "Step 4: Now we have all of our elements separated, we can start to compare the elements of the left sub-array and sort them in ascending order.", 
              "Step 5(a): Merge all of the left sub-array elements, now sorted in ascending order. ", 
              "Step 5(b): Compare the two highlighted values to get the smaller value.",
              "Step 5(c): Compare the two highlighted values to get the smaller value.",
              "Step 5(d): Compare the two highlighted values to get the smaller value.",
              "Step 5(e): Compare the two highlighted values to get the smaller value.",
              "Step 5(f): Compare the two highlighted values to get the final value.",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Step 6(a): We will now repeat the process to the right sub-array. Split the right sub-array in half (as evenly as possible). This is the first half: ", 
              "Step 6(b): This is the second half: ", "Step 7(a): Continue to break down the right sub-arrays until they are all just one element. We will also begin comparing elements to ensure they are in ascending order. ", 
              "Step 7(b): Continue splitting the right sub-arrays that are still not single elements: ", 
              "Step 8: Now we can begin comparing all of the right sub-array elements and sort them in ascending order", 
              "Step 9(a): Merge the right sub-arrays in ascending order.", 
              "Step 9(b): Compare the two highlighted values to get the smaller value.",
              "Step 9(c): Compare the two highlighted values to get the smaller value.",
              "Step 9(d): Compare the two highlighted values to get the smaller value.",
              "Step 9(e): Compare the two highlighted values to get the smaller value.",
              "Step 9(f): Compare the two highlighted values to get the final value.",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Merging step",
              "Step 10: Merge the now sorted left subarray, and right subarray to get the final sorted list."];

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

              <h1 class = "sort-title00">MergeSort</h1>
              <h2 class = "sort-title-background00" />
              
              <div onClick={refreshPage} class="gen-num-button">Generate New Numbers</div>
              <Timer 
               level = {1} 
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
        
                  <div onClick={this.nextStep} id="test-button" className="continue-button">Start!</div>
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

                  {/* Inserting new merging steps: */}
                  <div id="stepFiveArray">
                    <div className="merge0" id="test8"></div>
                    <div className="merge1" id="test9"></div>
                  </div>

                  <div id="stepSixArray">
                    <div className="merge2" id="test10"></div>
                    <div className="merge3" id="test11"></div>
                    <div className="merge4" id="test12"></div>
                  </div>

                  <div id="stepSevenArray">
                    <div className="merge5" id="test13"></div>
                    <div className="merge6" id="test14"></div>
                    <div className="merge7" id="test15"></div>
                    <div className="merge8" id="test16"></div>
                    <div className="merge9" id="test17"></div>
                  </div>

                  <div className="test8" id="test18">{stepsArray[8]}</div>
                  <div className="test9" id="test19">{stepsArray[9]}</div>
                  <div className="test10" id="test20">{stepsArray[10]}</div>

                  <div className="test11" id="test21">{stepsArray[11]}</div>
                  <div className="test12" id="test22">{stepsArray[12]}</div>
                  <div className="test13" id="test23">{stepsArray[13]}</div>

                  {/* Inserting new merging steps: */}
                  <div id="step11Array">
                    <div className="merge10" id="test24"></div>
                    <div className="merge11" id="test25"></div>
                  </div>

                  <div id="step12Array">
                    <div className="merge12" id="test26"></div>
                    <div className="merge13" id="test27"></div>
                    <div className="merge14" id="test28"></div>
                  </div>

                  <div id="step13Array">
                    <div className="merge15" id="test29"></div>
                    <div className="merge16" id="test30"></div>
                    <div className="merge17" id="test31"></div>
                    <div className="merge18" id="test32"></div>
                    <div className="merge19" id="test33"></div>
                  </div>

                  <br/>
                  <div className="test14" id="test34"><strong>Sorted Array:</strong>{stepsArray[14]}</div>
                  <br/><br/>
                  
                  <div  className="back-button" id="back-button" onClick={this.DecrementItem}>Go Back</div>
                  <Link to='/Levels'>
                    <div id="return-button" className="return-button">Levels Page</div>
                  </Link>
                </div>
                </div>
        </>
        );
  }
}
