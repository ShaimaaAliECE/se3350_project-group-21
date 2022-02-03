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
    this.state = {partitions:  [], show:false};
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

    document.getElementById('next-button').style.display = 'block'; 
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
                    
                    {/* {fragments[1]}
                    {fragments[9]}
                    <br/><br/><br/>
                    {fragments[2]}
                    {fragments[4]}
                    <br/>
                    {fragments[3]}
                    <br/>
                    {fragments[5]}
                    <br/>
                    {fragments[7]}
                    <br/>
                    {fragments[8]}
                    <br/><br/><br/>
                    {fragments[10]}
                    {fragments[12]}
                    <br/>
                    {fragments[11]}
                    <br/>
                    {fragments[13]}
                    <br/>
                    {fragments[15]}
                    <br/>
                    {fragments[16]}
                    <br/><br/><br/>
                    {fragments[17]} */}

                  {
                    this.state.show? <div><h1>{fragments}</h1></div> : null
                  }
                  <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'} Div</button>
                  <div onClick={this.nextStep} id="test-button" className="continue-button">Run Algorithm</div>
                  <br/><br/><br/>
                  <button id="next-button" class="next-button">Next Step</button>
                    {fragments[17]}

                  <div className="sorted-array">{sortedArray}</div>
                  <div className='sorted-text'>Sorted List: </div>
                  <div onClick={this.nextStep} className="continue-button">Continue</div>
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