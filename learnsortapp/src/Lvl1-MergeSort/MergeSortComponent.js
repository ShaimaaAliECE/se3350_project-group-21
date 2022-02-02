import React, { Component } from 'react';
import { MergeSort } from './MergeSort';
import { Partition } from './Partition';
import './Level1.css';

export default class MergeSortComponent extends Component {

  // Random number generator 
  unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 21));

  constructor() {
    super();

    // create references for partitions and mergesort
    this.state = {partitions:  []};
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
    
      return (
        <>
            <div class="contents">
               <div class = "Rectangle15">
                  <h3 class = "MergeSortText">Merge Sort</h3>
               </div>
               <button className='btn' onClick={this.unsorted.join(' ')}>Generate Numbers</button>
            </div>            
            <div className="fragment-row">
               {/* // will show the initial values (created by random number generator) */}
               <div className="values"> 
               Your Values <br/>
               </div>
               <div className='randomNum'>
               { this.unsorted.join(', ') }
               
               
               <br/>
               </div>
               
               <button className="forward" onClick={this.nextStep}>Next</button>
               {/* this is where the rows of the output are printed
               each fragment is a row of the output, e.g. fragments[0] is row 1... */}
               
               {fragments}
               
            </div>
            
        </>
        );
  }
}